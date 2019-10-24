import React, { Component } from 'react';
import { getWidth, getUserType } from './pageFunction';
import { Link, withRouter } from 'react-router-dom';
import {
    Container,
    Image,
    Menu,
    Responsive,
    Segment,
    Visibility,
  } from 'semantic-ui-react'
import dnlogo from '../image/dnlogo.png';
import HomepageHeading from './HomepageHeading'

class DesktopContainer extends Component {
    state = {
      userType : ''
     }
    // userType이 0 이면 개인 1 이면 그룹
    componentDidMount(){  // 처음 그릴 때 userType을 props로부터 받아서 설정.
      let {userType} = this.props
      this.setState({
        userType 
      })
    }
    componentDidUpdate(prevProps) {  // props의 userType이 변경 되면 그 userType으로 변경
      if(prevProps.userType !== this.props.userType){
        this.setState({
          userType : this.props.userType
        })
      }
    }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    logOut = (e) => {
      e.preventDefault();
      sessionStorage.removeItem('usertoken');
      alert('로그아웃 되었습니다.');
      this.props.history.push(`/`);
  }
    render() {
      const { children,Home} = this.props;
      const { fixed, userType } = this.state;
      let minHeight = ''
      Home === true ? minHeight = 700 : minHeight =100;
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              
              textAlign='center'
              style={{ minHeight: minHeight, padding: 0, marginTop: 0 }}
              vertical
            >
              <Menu style={{color: '#FFFFFF', background:'#27AE60', padding:"7px 0px 15px 0px"}}
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                 <Menu.Item as={Link}to ='' header>
                  <Image size='small' src={dnlogo} style={{ top: '10px', marginRight: '1em' }} />
                  </Menu.Item>
                  <Menu.Item as={Link}to='/donation'>후원하기</Menu.Item>
                  <Menu.Item as={Link}to='/partner'>파트너기업</Menu.Item>
                  
                  <Menu.Item as='a'>기부물품</Menu.Item>
                  <Menu.Item position='right'>
                    {sessionStorage.usertoken === undefined ?
                    <> 
                    <Link to ="/login" style={{ marginRight: '1.5em'}}>Login</Link>
                    <Link to ="/signup">Sign up</Link>
                    </> :
                    userType === 0 ?  // 유저타입이 0이면 즉 개인이면 
                    <>
                   <Link to ="/myinfo" style={{ marginRight: '1.5em'}}>MyPage</Link>
                   <a onClick={this.logOut}>LogOut</a>
                   </>
                   :      // 유저타입이 0이 아니면 즉 1이면, 그룹이면
                   <>
                   <Link to ="/groupintroduction" style={{ marginRight: '1.5em'}}>GroupPage</Link>
                   <a onClick={this.logOut}>LogOut</a>
                   </>
                    }
           
  
                  </Menu.Item>
                </Container>
              </Menu>
              {Home ? <HomepageHeading /> : null}
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
}

export default withRouter(DesktopContainer);