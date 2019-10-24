//11.캠페인 후원하기완료
import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";
import SideContent from "./SideContent";
import { getNumProgram } from './pageFunction';
//9.후원하기-후원안내

class HomepageLayout extends Component {
  state = {
    proName : '',
    coin : 0
  }

  componentDidMount() {
    const { proNum, coin } = this.props.match.params;
    getNumProgram(proNum).then(res => {
      this.setState({
        coin,
        proName : res.proName,
      })
    })
  }
  render(){
    const { coin, proName } = this.state;
    return (
      <Segment style={{ padding: "0em 15.6em 50em", display: "flex" }} vertical>
      <SideContent part="donation" info={false} />
      <div>
        <div style={{ marginTop: "25px" }}>
          <Header as="h2" style={{ fontSize: "3em" }}>
            후원하기
          </Header>{" "}
        </div>
        <div style={{ margin: "90px 0px 0px 200px" }}>
          <div style={{ margin: "0px 0px 0px 150px" }}>
            <p style={{ fontSize: "2.25em", color: "#27AE60" }}>
              <strong>감사합니다</strong>
            </p>
          </div>

          <div style={{ margin: "20px 0px 0px 150px" }}></div>

          <div style={{ margin: "50px 0px 0px 150px" }}>
            <div class="ui medium image">
              <div
                style={{
                  width: "168px",
                  height: "168px",
                  color: "#FFFFFF",
                  background: "#27AE60"
                }}
                class="ui circular inverted segment"
              >
                <div sytle={{ marginTop: "20px" }}>
                  <h1 class="ui inverted header">
                    {coin} 코인
                    <div class="sub header"></div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "2em", color: "#000000", marginLeft: "140px" }}>
            기부되었습니다
          </p>
        </div>
        <div style={{ margin: "0px,0px,0px,900px" }}>
          <div syle={{ dispaly: "flex" }}>
            <i aria-hidden="true" class="green check icon"></i>
            <p style={{ fontSize: "2em" }}>프로그램명 : {proName}</p>
          </div>
        </div>
      </div>
    </Segment>
    )
  }
}
export default HomepageLayout;
