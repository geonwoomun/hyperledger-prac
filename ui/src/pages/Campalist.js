//18.기업마이페이지 캠페인 등록하기
import React  from 'react'
import Campalist from '../components/Campalist';
import { Link } from 'react-router-dom';
import {
  Header,
  Segment,
} from 'semantic-ui-react'
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
      <SideContent part ="groupmypage2" info={false}/>
   
     <div style= {{marginTop : "50px"}}>
       <Header as='h2' style={{ fontSize: '3em' }}>캠페인 등록하기</Header>
       <div style={{margin:"90px 0px 0px 20px"}}>
       <div style={{margin:"0px 0px 0px 800px"}}>

       <Link to="/camparegi"><button class="ui tiny button" style={{color: '#FFFFFF', background:'#27AE60'}}>등록하기</button></Link>
       </div>
      <Campalist/>
   </div>
      </div>
    </Segment>
)
export default HomepageLayout
