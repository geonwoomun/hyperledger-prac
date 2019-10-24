//19.캠페인등록
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import SideContent from "./SideContent";
import { getEmail, regProgram, imgUpload } from "./pageFunction";

class HomepageLayout extends Component {
  state = { // 대표 이미지도 설정하게 해야함.
    proName : '',
    proDesc : '',
    proImg : '',
    proImgName : '',
    targetCoin : 0,
    targetDate : ''
  }
  
  handleFileInput = (e) => {
    const userEmail = getEmail();
    const { proName } = this.state;
    const imgType = e.target.files[0].type.split('/')[1];
    this.setState({
      proImg : e.target.files[0],
      proImgName : userEmail+`_${proName}` + `_mainImg.${imgType}`
    })
  }

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onSubmit = (e) => {
    const { proName, proDesc, targetCoin, targetDate, proImg, proImgName } = this.state;
    const formData = new FormData();
    formData.append('file', proImg);
    formData.append('fileName', proImgName);
    const userEmail = getEmail();
    const proData = {
      proName,
      proDesc,
      targetCoin,
      targetDate,
      userEmail,
      proImgName
    }
    imgUpload(formData);
    regProgram(proData);
  }
  render() {
    const { proName, proDesc, targetCoin, targetDate } = this.state
    return (
      <Segment style={{ padding: "0em 15.6em 50em", display: "flex" }} vertical>
        <SideContent part="groupmypage2" />

        <div style={{ marginTop: "50px" }}>
          <Header as="h2" style={{ fontSize: "3em" }}>
            단체 소개
          </Header>
          <div style={{ margin: "90px 0px 0px 20px" }}>
            <div>
              <label style={{ fontSize: "1.3em" }}>프로젝트 개요</label>{" "}
            </div>

            <hr size="10" color="#27AE60" />
  
            <div style={{ dispaly: "flex" }}>
              <div style={{ marginLeft: "40px" }}>프로젝트 제목</div>
              <div style={{ margin: "-20px 500px 0px 300px" }}>
                <input type="text" name = "proName" value={proName} onChange={this.onChange}/>
              </div>{" "}
            </div>
            <hr size="1.5" color="#EAEAEA" />
            <div style={{ dispaly: "flex" }}>
              <div style={{ marginLeft: "40px" }}>프로젝트 요약</div>
              <div style={{ margin: "-20px 500px 0px 300px" }}>
                <input type="text"  name = "proDesc" value={proDesc} onChange={this.onChange} />
              </div>{" "}
            </div>
            <hr size="1.5" color="#EAEAEA" />
            <div style={{ dispaly: "flex" }}>
              <div style={{ margin: "12px 0px 0px 40px" }}>
                대표 이미지 업로드
              </div>
              <div style={{ margin: "-22px 500px 0px 300px" }}>
                <input className="ui mini button" type="file" onChange={this.handleFileInput} /> {/*파일 부분은 아직 안 넘어가게 했음. */}
              </div>{" "}
            </div>

            <hr size="1.5" color="#EAEAEA" />
            <div style={{ dispaly: "flex" }}>
              <div style={{ marginLeft: "40px" }}>목표코인</div>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "-20px 0px 0px 300px" }}>
                  {" "}
                  <input type="text"   name = "targetCoin" value={targetCoin} onChange={this.onChange}/>
                </div>
                <div style={{ margin: "-18px 0px 0px 10px" }}>코인</div>
              </div>
            </div>
            <hr size="1.5" color="#EAEAEA" />

            <div style={{ dispaly: "flex" }}>
              <div style={{ marginLeft: "40px" }}>마감일</div>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "-20px 0px 0px 300px" }}>
                  {" "}
                  <input type="date"  name = "targetDate" value={targetDate} onChange={this.onChange} />
                </div>
              </div>
            </div>

            <hr size="1.5" color="#EAEAEA" />
            <div style={{ display: "flex", margin: "50px 0px 0px 250px" }}>
              <Link to="/camparegidone">
                <Button style={{ color: "#FFFFFF", background: "#27AE60" }} type="submit" 
                onClick = {this.onSubmit}>
                  다음 단계
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}
export default HomepageLayout;
