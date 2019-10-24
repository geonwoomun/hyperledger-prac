//9.캠페인 후원하기
import React, { Component } from "react";
import cam from "../image/cam.PNG";
import Cardtab from "../components/Cardtab";
import { Link } from "react-router-dom";
import { Header, Image, Segment } from "semantic-ui-react";
import SideContent from "./SideContent";
import { getNumProgram } from './pageFunction';
//9.후원하기-후원안내

class HomepageLayout extends Component {
  state = {
    program : {}
  }
  componentDidMount() {
    const { proNum } = this.props.match.params;
    getNumProgram(proNum).then(res => {
      this.setState({
        program : res
      })
    })
  }

  render() {
    const { program } = this.state;
    const date = new Date(); // 현재 날짜
    let date2 = ''; // 프로그램의 종료 날짜를 넣을 변수
    let btMs = 0;  // 초로 나타낸 차이
    let btDay = 0; // 초를 일 수로 나타낸 차이
    if(program.targetDate){ // 프로그램의 종료일이 있을 경우
      date2 = program.targetDate.split('-')
      date2 = new Date(date2[0], date2[1]-1, date2[2]); 
      btMs = date2.getTime() - date.getTime();
      btDay = parseInt(btMs / (1000*60*60*24));  // 남은 기간 계산.
    }


    return (
      <>
      {program ? 
        <Segment style={{ padding: "0em 15.6em 50em", display: "flex" }} vertical>
        <SideContent part="donation" info={false} />
        <div>
          <div style={{ marginTop: "25px", display: "flex" }}>
            <Header as="h2" style={{ fontSize: "3em" }}>
              {program.proName}
            </Header>{" "}
          </div>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <div style={{ margin: "40px" }}>
              {program.proImg ? <Image size="massive" src={require(`./../../public/uploads/${program.proImg}`)} />: 
            <Image size="massive" src={cam}/>}
            </div>
            <div style={{ marginLeft: "50px" }}>
              <label style={{ fontSize: "1.3em" }}>모인금액</label>
              <div style={{ display: "flex", marginBottom: "-55px" }}>
                <p style={{ fontSize: "4em" }}>{program.nowCoin}</p>
                <p style={{ fontSize: "1.3em", marginTop: "27px" }}>코인</p>
              </div>
              <label style={{ fontSize: "1.3em" }}>남은 시간</label>
              <div style={{ display: "flex", marginBottom: "-55px" }}>
                <p style={{ fontSize: "4em" }}>{btDay}</p>
                <p style={{ fontSize: "1.3em", marginTop: "27px" }}>일</p>
              </div>
              <label style={{ fontSize: "1.3em" }}>후원자</label>
              <div style={{ display: "flex", marginBottom: "-55px" }}>
                <p style={{ fontSize: "4em" }}>{program.donateCount}</p>
                <p style={{ fontSize: "1.3em", marginTop: "27px" }}>명</p>
              </div>

              <Link to={`/donacoin/${this.props.match.params.proNum}`}>
                <button class="ui fluid button">후원신청 하기</button>
              </Link>
            </div>
          </div>
          <Cardtab />
        </div>
      </Segment> : null}
      </>
    );
  }
}
export default HomepageLayout;
