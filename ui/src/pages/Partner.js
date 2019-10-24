//12.파트너 기업
import React, { Component } from "react";
import Partnerpic from "../components/Partnerpic";
import { Header, Segment } from "semantic-ui-react";
import SideContent from "./SideContent";
import { getGroup } from './pageFunction';
// 마운트가 되고 난후에 모든 그룹을 가져와서 배열로 만들어서 map 함수를 써서 사진들과 정보들이 나오게 한다.
class HomepageLayout extends Component {
  state = {
    group : []
  }
  componentDidMount(){  
    getGroup().then(res => {
      this.setState({
        group : res
      })
    })
  }
  render() {
    const { group } = this.state;
    return (
      <Segment style={{ padding: "0em 15.6em 50em", display: "flex" }} vertical>
        <SideContent part="partner" info={true} />
        <div>
          <div style={{ marginTop: "25px", display: "flex" }}>
            <Header as="h2" style={{ fontSize: "3em" }}>
              단체소개
            </Header>
          </div>
          <div style={{ marginTop: "20px", display: "flex" }}>
            {group.map(value => (
              <div style={{ margin: "50px" }}>
              {" "}
              <Partnerpic group={value} />{" "}
            </div>
            ))}
          </div>
        </div>
      </Segment>
    );
  }
}
export default HomepageLayout;
