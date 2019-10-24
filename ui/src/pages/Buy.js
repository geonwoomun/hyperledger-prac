//20.기부물품구매 22
import React from 'react'
import vacc2 from '../image/vacc2.png';
import water from '../image/water.png';
import led from '../image/led.png';

import Buyamount from '../components/Buyamount';

import { Link } from 'react-router-dom';
import {
  Header,
  Segment,
} from 'semantic-ui-react'
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part ="groupmypage3"/>
    <Header as='h2' style={{ fontSize: '3em' }}>기부물품 구매</Header>
     <div style= {{margin : "50px 0px 0px 0px", display: 'flex' }} vertical >
     <Header as='h2' style={{ fontSize: '3em' }}></Header></div>
      
     <div style={{display:'flex', margin:'150px 200px 0px 0px'}}>
      <div>
        <div class="ui card">
         <div class="image"><img src={water}/></div>
         <div class="content">
        <div class="header">제주 삼다수 2Lx6입/1BOX</div>
         <div class="meta"> </div>
         <div class="description">
        가격: 6코인
       </div>
        </div>
         <div class="extra content">
             <a>
              <Buyamount/>
          <div style={{marginTop:'5px'}}>
        <Link to="/shoppingbasket"><button class="ui fluid button" style={{color: '#FFFFFF', background:'#27AE60'}}>장바구니에 담기</button></Link>
        </div>
          </a>
         </div>
          </div>
     </div>   
     <div style={{marginLeft:"40px"}}>
        <div class="ui card">
        
         <div class="image"><img src={vacc2}/></div>
         <div class="content">
        <div class="header">독감백신</div>
         <div class="meta"> </div>
         <div class="description">
        가격: 1코인
       </div>
        </div>
         <div class="extra content">
             <a>
              <Buyamount/>
          <div style={{marginTop:'5px'}}>
        <Link to="/shoppingbasket"><button class="ui fluid button" style={{color: '#FFFFFF', background:'#27AE60'}}>장바구니에 담기</button></Link>
        </div>
          </a>
         </div>
          </div>
     </div>

     <div style={{marginLeft:"40px"}}>
        <div class="ui card">
        
         <div class="image"><img src={led}/></div>
         <div class="content">
        <div class="header">태양열 랜턴</div>
         <div class="meta"> </div>
         <div class="description">
        가격: 6코인
       </div>
        </div>
         <div class="extra content">
             <a>
              <Buyamount/>
          <div style={{marginTop:'5px'}}>
        <Link to="/shoppingbasket"><button class="ui fluid button" style={{color: '#FFFFFF', background:'#27AE60'}}>장바구니에 담기</button></Link>
        </div>
          </a>
         </div>
          </div>
     </div>
</div>
    </Segment>
)
export default HomepageLayout
