//7.후원하기-후원안내 
import React from 'react'
import { Link } from 'react-router-dom';
import {
  Header,
  Segment,
} from 'semantic-ui-react';
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part ="donation" info = {true}/>

     <div style= {{marginTop : "25px"}}>
       <Header as='h2' style={{ fontSize: '3em' }}>후원안내</Header>
        <p style={{ fontSize: '2.0em',marginTop : "10px"  }}>따뜻하고 아름다운 세상 <br/>
        당신의 작은 나눔으로 시작됩니다 <br/></p>
        <p style={{ fontSize: '1em' }}>
        다양한 후원종류로 망설이셨나요?<br/>
       원하는 후원을 바로 찾아 후원할 수 있도록 모든 후원종류를<br/>
        한 곳에 모아두었습니다.</p>
      <Link to ="/donation2">
        <button 
          class="ui icon right labeled button" 
          style={{marginTop:'1em'}}>
          <i aria-hidden="true" class="right arrow icon"></i>
           후원 신청하러 가기
        </button>
      </Link>
      </div>
    </Segment>
)
export default HomepageLayout
