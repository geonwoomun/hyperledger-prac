//14.개인 후원내역 자세히
import React, { Component } from 'react'
import cam from '../image/cam.PNG';
import History from '../components/History';
import SideContent from './SideContent';

import {
  Button,
  Header,
  Image,
   Segment,
} from 'semantic-ui-react'

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
                 <SideContent part ="mypage" info = {true}/>


   
     <div> 

      <div style= {{marginTop : "25px", display: 'flex'}}>
      <Header as='h2' style={{ fontSize: '3em',color:'#27AE60' }}>기부 프로그램 제목</Header>      </div>
      <div style= {{marginTop : "20px", display: 'flex'}}>
       <div style= {{margin : "40px"}}><Image size='massive' src={cam}/> </div> 
       
        <div style= {{marginLeft : "50px"}}>  
        <div style={{margin:"40px 0px 50px 0px"}}>
        <Button size='huge' style={{color: '#FFFFFF', background:'#1E8157'}}>후원완료</Button></div>
         <label style={{ fontSize: '1.3em' }}>모인금액</label>
          <div style={{display:'flex', marginBottom:'-55px' }}>
           <p style={{ fontSize: '4em'}}>141,441,000</p>  
           <p style={{ fontSize: '1.3em',marginTop:'27px'}}>원</p>
          </div>
          <label style={{ fontSize: '1.3em' }}>후원자</label>

          <div style={{display:'flex', marginBottom:'-55px' }}>
           <p style={{ fontSize: '4em'}}>500</p>  
           <p style={{ fontSize: '1.3em',marginTop:'27px'}}>명</p>
           
          </div>
          <div style={{display:'flex', marginTop:'20px' }}>
           <p style={{ fontSize: '1.5em'}}>10000코인을 후원하셨습니다</p>  
           
           
          </div>
          
        </div>
       </div>
       <History/>
     </div>
    </Segment>

    
)
export default HomepageLayout
