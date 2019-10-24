//4.로그인 페이지
import React, {Component} from 'react';
import Login2 from '../components/Login';
import {
  Segment
} from 'semantic-ui-react'
class Login extends Component {
  render() {
    return(
      <Segment style={{ padding: '6em 15.6em 20em', display: 'flex', justifyContent: 'center', marginTop:'30px' }} vertical >
            <Login2 setUserType = {this.props.setUserType}/>
            </Segment>
    )
  }
};

export default Login;
