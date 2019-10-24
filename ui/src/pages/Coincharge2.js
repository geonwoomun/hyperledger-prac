//24.
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Segment,
  
} from 'semantic-ui-react'
import SideContent from './SideContent';
import querystring from 'query-string'; // 쿼리 스트링을 쉽게 객체로 바꿔주는 모듈
import { chargeCoin, getEmail } from './pageFunction'; 

// 충전 그 다음 카드번호를 치는 화면 

const HomepageLayout = ({ location}) => {
    const query = querystring.parse(location.search);
    const onClick = () => {
        const email = getEmail();
        chargeCoin(email, query.coin)
    }
    return (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part ="coincharge" info={false}/>
          <div> 
    
          <div style= {{marginTop : "25px", display: 'flex'}}>
          <Header as='h2' style={{ fontSize: '3em',color:'#27AE60' }}>코인 충전</Header>      </div>
          <div style={{margin:"90px 0px 0px 20px"}}>
          <div><label style={{ fontSize: '1.3em'}}>정보입력</label> </div>
          
          <hr size="10" color="#27AE60"/>
     
          <div style={{dispaly:'flex'}}>
          <div style={{marginLeft:"40px"}}>카드 소유자 이름</div>
         <div style={{margin:"-20px 500px 0px 300px"}}><input type="text"/></div> </div>
          
         <hr size="1.5" color="#EAEAEA"/>
          <div style={{dispaly:'flex'}}>
          <div style={{marginLeft:"40px"}}>카드번호</div>
         <div style={{display:'flex'}}>
      <div style={{margin:"-20px 0px 0px 300px"}}> <input type="text"/></div>
      </div>
          </div>
    
          <hr size="1.5" color="#EAEAEA"/>
          <div style={{dispaly:'flex'}}>
          <div style={{marginLeft:"40px"}}>유효기간</div>
         <div style={{display:'flex'}}>
      <div style={{margin:"-20px 0px 0px 300px"}}> <input type="text"/></div>
      </div>
          </div>
    
          <hr size="1.5" color="#EAEAEA"/>
          <div style={{dispaly:'flex'}}>
          <div style={{marginLeft:"40px"}}>cvc번호</div>
         <div style={{display:'flex'}}>
      <div style={{margin:"-20px 0px 0px 300px"}}> <input type="text"/></div>
      </div>
          </div>
    
    
          <hr size="1.5" color="#EAEAEA"/>
          <div style={{display:'flex',margin:"50px 0px 0px 250px"}}>
          <Link to={`/coincharge3?coin=${query.coin}`}><Button style={{color: '#FFFFFF', background:'#27AE60'}} onClick ={onClick}>확인</Button></Link>
       </div>
       
          </div>
         </div>
        </Segment>
    
    )
}
   
export default HomepageLayout