import React, { Component } from 'react';
import { getWidth } from './pageFunction';
import { Link } from 'react-router-dom';
import {
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar
  } from 'semantic-ui-react';
  import HomepageHeading from './HomepageHeading';

class MobileContainer extends Component {
  state = { }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children, Home} = this.props
    const { sidebarOpened} = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a' >후원하기</Menu.Item>
          <Menu.Item as='a'>파트너 기업</Menu.Item>
          
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                <Link to ="/login" style={{ marginRight: '1.5em'}}>Login</Link>

                  <Link to ="/signup">Sign up</Link>
                </Menu.Item>
              </Menu>
            </Container>
            {Home ? <HomepageHeading mobile /> : null}
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
    }
}

export default MobileContainer;