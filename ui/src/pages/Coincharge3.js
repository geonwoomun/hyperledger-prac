//23.
//9.캠페인 후원하기
import React, { Component } from "react";
import querystring from "query-string";
import { Header, Segment } from "semantic-ui-react";
import SideContent from "./SideContent";
import { getCoin, getEmail } from './pageFunction';

// 충전되고 난 후 충전 코인과 현재 나의 코인을 보여주는 화면

class HomepageLayout extends Component{
  state = {
    email : '', // 자신의 email
    chargeCoin : 0, // 충전한 코인
    nowCoin : 0, // 현재 코인
  }
  
  async componentDidMount(){  // 마운트 하고 난후 state 값들을 바꾼다.
    const { location } = this.props;
    const query = querystring.parse(location.search);
    const chargeCoin = query.coin;
    const email = getEmail();
    await this.setState({
      chargeCoin,
      email
    })
    getCoin(this.state.email).then(res => { // 나의 현재 코인을 받아와서 state에 저장.
      this.setState({
        nowCoin : res.coin
      })
    })
  }
  render(){
    const { nowCoin, chargeCoin } = this.state;
  
    return (
      <Segment style={{ padding: "0em 15.6em 50em", display: "flex" }} vertical>
        <SideContent part="coincharge" info={false} />

        <div>
          <div style={{ marginTop: "25px", display: "flex" }}>
            <Header as="h2" style={{ fontSize: "3em", color: "#27AE60" }}>
              코인 충전
            </Header>{" "}
          </div>
          <div style={{ margin: "50px 0px 2px 200px" }}>
            <p
              style={{
                fontSize: "2.3em",
                color: "27AE60",
                margin: "70px 0px 50px 100px"
              }}
            >
              <strong>{chargeCoin}코인 충전이 완료되었습니다!</strong>
            </p>

            <div style={{ marginLeft: "250px" }}>
              <div class="ui medium image">
                <div
                  style={{
                    width: "168px",
                    height: "168px",
                    color: "#FFFFFF",
                    background: "#219451"
                  }}
                  class="ui circular inverted segment"
                >
                  <div sytle={{ marginTop: "20px" }}>
                    <h1 class="ui inverted header">
                      {nowCoin}코인
                      <div class="sub header">나의 코인</div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}

export default HomepageLayout;
