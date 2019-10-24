//15.나의 정보 
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Segment,
} from 'semantic-ui-react'
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
        <SideContent part ="mypage" info = {false}/>
     <div style= {{marginTop : "50px"}}>
       <Header as='h2' style={{ fontSize: '3em', color:'#27AE60' }}>나의 정보</Header>
 <table>
           <tbody>
               <tr>
       <td><div class="ui segment"style={{marginRight:'50px'}}>
        <p style={{fontSize:'1.5em', textAlign : 'center'}}>보유코인</p>
       <div class="ui clearing divider"></div>


       <div class="ui medium image" style ={{display:'flex', justifyContent: 'center'}}>
         <div style={{width:"168px",height:"168px", background:'#219451'}} class="ui circular inverted segment">
           <h1 class="ui inverted header" style ={{marginTop:'35px'}}>
         500 코인
          </h1>
         </div>
     </div>

     <Link to="/coincharge"><Button size='medium' style={{color: '#FFFFFF', background:'#1E8157',marginLeft:'95px', marginTop: '20px'}}>충전하기</Button></Link>



</div></td>



<td><div class="ui segment">
<p style={{fontSize:'1.5em', textAlign: 'center'}}>총 후원코인</p>
  <div class="ui clearing divider"></div>

  <div class="ui medium image" style ={{display:'flex', justifyContent: 'center'}}>
         <div style={{width:"168px",height:"168px",color: '#FFFFFF', background:' #219451'}} class="ui circular inverted segment">
           <h1 class="ui inverted header" style={{marginTop:'35px'}}>
         850 코인
          <div class="sub header"></div>
          </h1>
         </div>
     </div>
    <Link to="/mycampalist"><Button size='medium' style={{color: '#FFFFFF', background:'#1E8157',marginLeft:'85px', marginTop: '20px'}}>후원 내역 보기</Button></Link>
</div></td>
</tr>
</tbody>
</table>
      </div>
    </Segment>
   
)
export default HomepageLayout
