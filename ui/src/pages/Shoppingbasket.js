//21.장바구니
import React, { Component } from "react";
import vacc2 from "../image/vacc2.png";
import water from "../image/water.png";
import { Link } from "react-router-dom";
import { Header, Segment, Button } from "semantic-ui-react";
import SideContent from "./SideContent";

const HomepageLayout = () => (
  <Segment style={{ padding: "0em 15.6em 50em", display: "flex" }} vertical>
    <SideContent part ="groupmypage4"/>
    
    <div style={{ marginTop: "50px" }}>
      <Header as="h2" style={{ fontSize: "3em" }}>
        장바구니
      </Header>



      <div style={{ marginTop: "50px" }}>
        <div class="ui items">
          <div class="item">
            <div class="ui small image">
              <img src={vacc2} />
            </div>
            <div class="content">
              <a class="header">독감백신</a>
              <div class="meta">가격: 1코인</div>
              <div class="description"></div>
              <div class="extra">Additional Details</div>
            </div>
          </div>
          <div class="item">
            <div class="ui small image">
              <img src={water} />
            </div>
            <div class="content">
              <a class="header">제주 삼다수 2Lx6입/1BOX</a>
              <div class="meta">가격: 6코인</div>
              <div class="description">
                <img
                  src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                  class="ui image"
                />
              </div>
              <div class="extra">Additional Details</div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/buydone"><Button size='medium' style={{color: '#FFFFFF', background:'#1E8157',marginLeft:'700px'}}>구매하기</Button></Link>

    </div>
  </Segment>
);
export default HomepageLayout;
