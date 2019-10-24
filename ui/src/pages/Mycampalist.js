//13.개인 후원내역
import React, { Component } from 'react'
import Mycampalistco from '../components/Mycampalistco';
import { Link } from 'react-router-dom';
import {
 
  Header,

  Segment,

} from 'semantic-ui-react'

import SideContent from './SideContent';


const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part ="mypage" info = {true}/>
     <div style= {{marginTop : "50px"}}>
       <Header as='h2' style={{ fontSize: '3em', color:'#27AE60' }}>나의 후원내역</Header>
       <div style={{margin:"90px 0px 0px 20px"}}>
       <div style={{margin:"0px 0px 0px 800px"}}>
      
       </div>
      <Link to="/Mydonahistory"><Mycampalistco/></Link>
   </div>
      </div>
    </Segment>


)
export default HomepageLayout
