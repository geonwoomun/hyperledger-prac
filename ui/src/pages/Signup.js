//2.3.회원가입
import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";
import { signUp, emailCheck } from './pageFunction';

class HomepageLayout extends Component {
  state = {
    email : '',
    PASSWORD :'',
    name : '',
    phoneNumber : '',
    birth : '',
    check : false,
    emailCheck : false,
    userType : false
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { PASSWORD, name, phoneNumber, birth, email ,check, emailCheck, userType} = this.state;
    if(check === false){
      alert('약관 동의를 해주세요.');
    }
    else if(emailCheck === false ){
      alert('이메일 중복 확인을 해주세요');
    }
    else{
      const info = {
        email,
        PASSWORD,
        name,
        phoneNumber,
        birth,
        userType
      };
      signUp(info).then(res => {
        if(res){
          this.props.history.push(`/login`);
        }
      })
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onHandleCheck = (e) => {
    this.setState({
      check : !this.state.check
    })
  }
  onHandleUserType = (e) => {
    this.setState({
      userType : !this.state.userType
    })
  }
  onClick = () => {
    const { email } = this.state;
    console.log(email);
    if(email === ''){
      alert('이메일을 입력해주세요');
    }
    else {
      emailCheck(email).then(res=> {
        if( res === '중복') {
          this.setState({
            emailCheck : false
          })
          alert('이미 가입된 이메일 입니다.');
        }
        else {
          this.setState({
            emailCheck : true
          })
          alert('사용 가능한 아이디입니다.');
        }
      });
    }
  }

  render() {
    return (
      <Segment style={{ padding: "0em 15.6em 30em", display: "flex" }} vertical>
        <div style={{ margin: "25px 0px 0px 0px" }}>
          <Header as="h2" style={{ fontSize: "3em" ,color:"#27AE60" }}>
            회원가입
          </Header>
              <div style={{ margin: "0px 300px 0px 0px" }}>
          <div style={{ marginTop: "40px", marginLeft: "300px" }}>
            <form className="ui form" onSubmit = {this.onSubmit}>
              <div className="fields">
                <div className="field">
                  <label>이메일</label>
                  <div style={{ display: "flex" }}></div>
                  <div className="ui input"style={{width:"350px"}}>
                    <input type="email" placeholder="이메일" name="email" onChange = {this.onChange} />
                  </div>
                </div>
                <div className="field">
                  <button className="ui button" type ="button" style={{ marginTop: "23.5px" }} onClick={this.onClick}>
                    중복확인
                  </button>
                </div>
              </div>
              <div className="field">
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호" name ="PASSWORD" onChange = {this.onChange} />
              </div>
              <div className="field">
                <label>성명</label>
                <input placeholder="이름" name = "name" onChange = {this.onChange}/>
              </div>
              <div className="field">
                <label>휴대폰 번호</label>
                <input placeholder="휴대폰 번호" name = "phoneNumber" onChange = {this.onChange}/>
              </div>
              <div className="field">
                <label>생년월일</label>
                <input placeholder="6자리입력"  type = "date" name ="birth" onChange = {this.onChange} />
              </div>
              <div className="field">
                <label>그룹 회원이신가요?</label>
                <input type = "checkbox" name ="userType" onChange = {this.onHandleUserType} />
              </div>
              <div className="field">
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    name = "check"
                    onChange={this.onHandleCheck}
                  />
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
              <button type="submit" className="ui button">
                Submit
              </button>
            </form>
          </div>
        </div>
        </div>
      </Segment>
    );
  }
}
export default HomepageLayout;
