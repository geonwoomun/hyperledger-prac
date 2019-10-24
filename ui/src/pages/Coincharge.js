//23.
//9.캠페인 후원하기
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import SideContent from "./SideContent";
import { getEmail } from './pageFunction';

class HomepageLayout extends Component {
  state = {
    email : '',
    coin : 0
  }
  componentDidMount(){ // 마운트 하고 난후 email 정보를 가져와서 저장.
    let email = getEmail();
    this.setState({
      email
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  plzLogin = () => {
    alert('로그인을 해주세요');
    this.props.history.push('/login');
  }

  render() {
    const { email, coin } = this.state;
    return (
      <>
        {email === null ? this.plzLogin() : // 로그인이 안 돼있으면 plzLogin 실행 아니면 창 보여줌
         <Segment style={{ padding: "0em 15.6em 50em", display: "flex" }} vertical>
         <SideContent part="coincharge" info={false} />
         <div>
           <div style={{ marginTop: "25px", display: "flex" }}>
             <Header as="h2" style={{ fontSize: "3em", color: "#27AE60" }}>
               코인 충전
             </Header>{" "}
           </div>
           <div style={{ marginTop: '90px', marginLeft:'80px', display:'flex', justifyContent:'center', flexDirection: 'column'}}>
             <div>
               <label style={{ fontSize: "1.3em" }}>충전 코인 입력</label>{" "}
             </div>
 
             <hr width='500px' color="#27AE60" />
 
             <div style={{ width:'500px'}}>
               <div style={{display:'flex',justifyContent:'center' }}>
                 <input type="text" style={{width: '100px'}} onChange = {this.onChange} name="coin" value={coin}/>
                 코인 <Icon name="arrow right" style={{ color: "#27AE60", marginLeft:'10px', marginRight:'10px'}} />
                 <div>{coin * 10}원</div>
               </div>
             </div>
 
             <hr width='500px' color="#EAEAEA" />
             <div style={{ display: "flex", justifyContent:'center'}}>
               <Link to={`/coincharge2?coin=${coin}`}>
                 <Button style={{ color: "#FFFFFF", background: "#27AE60" }}>
                   충전하기
                 </Button>
               </Link>
             </div>
           </div>
         </div>
       </Segment>
      }
      </>
    );
  }
}
export default HomepageLayout;
