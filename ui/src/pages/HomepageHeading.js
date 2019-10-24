import React from 'react';
import {
    Button,
    Container,
    Header,
    Icon,
    Image
  } from 'semantic-ui-react';
import donation from '../image/donationbig.png';

const HomepageHeading = ({ mobile }) => (
    <Container text>
  
  
  
     <Header as='h1' header>
      <Image src={donation} style={{height:'100%',width:'100%',resizeMode:'cover'}} />
      </Header>
  
      <Header
        as='h2'
        content='OO이를 지켜주세요'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
          color: '#5A9367',    
        }}
      />
      <Button primary size='huge'
      style={{ color: '#FFFFFF',
      background:'#27AE60'}}>
        자세히 보기
        <Icon name='right arrow' />
      </Button>
    </Container>
  )

export default HomepageHeading;