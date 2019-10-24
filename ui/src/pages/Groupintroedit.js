//16.기업마이페이지 단체소개
import React, { Component } from "react";
import Edit from "../components/Edit";

import { withRouter } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import SideContent from "./SideContent";
import { getEmail, modifyInfo } from './pageFunction';

class HomepageLayout extends Component {
  state = {
    groupIntro : ''
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { groupIntro } = this.state;
    const email = getEmail();
    modifyInfo(email, groupIntro).then(res => {
      this.props.history.push('/groupintroduction')
      alert('변경 완료 되었습니다.')
    })
  }
  render() {
    const { groupIntro } = this.state;
    return (
      <Segment style={{ padding: "0em 15.6em 50em", display: "flex" }} vertical>
        <SideContent part="groupmypage1" />

        <div style={{ marginTop: "50px" }}>
          <Header as="h2" style={{ fontSize: "3em" }}>
            단체 소개
          </Header>
          <Edit />
          <span>
            <form class="ui form"  onSubmit={this.onSubmit}>
              <textarea placeholder="Tell us more" rows="20" onChange = {this.onChange} 
              name="groupIntro" value = {groupIntro}></textarea>
                <Button
                  style={{
                    color: "#FFFFFF",
                    background: "#27AE60",
                    marginTop: "20px"
                  }}
                  type="submit"
                >
                  수정
                </Button>
            </form>
          </span>
        </div>
      </Segment>
    );
  }
}

export default withRouter(HomepageLayout);
