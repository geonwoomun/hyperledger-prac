import React, { Component } from 'react'

import { Link, withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { login } from '../../pages/pageFunction';

class Login extends Component {
  state = {
    email: '',
    PASSWORD : ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const info = {
      email : this.state.email,
      PASSWORD : this.state.PASSWORD
    }
    login(info).then(res => {
      if(res){
        this.props.setUserType();
        this.props.history.push('/');
      }
    })

  }

  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450, width: 500 }}>
            <Header as='h2' style={{color:"#27AE60"}} textAlign='center'>
             로그인
            </Header>
            <Form size='large' onSubmit = {this.onSubmit}>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.onChange} name = "email"/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.onChange}
                  name = "PASSWORD"
                />
​
                <Button color='black' fluid size='large' style={{color:"#FFFFFF", background:"#27AE60"}}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
            후원자가 되어 아이들을 도와주세요!<br />
              <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default withRouter(Login);
