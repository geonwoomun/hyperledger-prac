//19.캠페인등록 
import React from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Segment,
} from 'semantic-ui-react';
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part ="groupmypage2"/>
   
     <div style= {{marginTop : "50px"}}>
       <Header as='h2' style={{ fontSize: '3em' }}>캠페인 등록이 완료 되었습니다.</Header>
       
      <div style={{display:'flex',margin:"50px 0px 0px 250px"}}>
      
      <Link to="/"><Button style={{color: '#FFFFFF', background:'#27AE60'}}>홈</Button></Link>
      <Link to="/groupintroduction"><Button style={{color: '#FFFFFF', background:'#27AE60'}}>그룹페이지</Button></Link>
   </div>
   </div>
    </Segment>
)
export default HomepageLayout
