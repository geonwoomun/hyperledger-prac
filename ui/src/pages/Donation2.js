//8.캠페인 후원하기
import React, { Component } from 'react'
import Donamenu from '../components/Donamenu';
import { Link } from 'react-router-dom';
import {
  Header,
  Segment
} from 'semantic-ui-react';
import SideContent from './SideContent';
import { getAllPrograms } from './pageFunction';
//9.후원하기-후원안내 

class HomepageLayout extends Component {
  state = {
    programs : []
  }
  componentDidMount() {
    getAllPrograms().then(res =>{
      this.setState({
        programs : res
      })
    })
  }
  render(){
    const { programs } = this.state;
    return (
      <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
      <SideContent part ="donation" info={false}/>

      <div> 

      <div style= {{marginTop : "25px", display: 'flex'}}>
      <Header as='h2' style={{ fontSize: '3em' }}>캠페인 후원하기</Header>      </div>
      <div style= {{marginTop : "20px", display: 'flex'}}>
        {programs.map(program => (
          <div style= {{margin : "10px"}}> 
            <Link to={`/donacard/${program.proNum}`}><Donamenu program = {program}/></Link>
          </div>
        ))}
      </div>
      </div>
    </Segment>
    )
  }
}

export default HomepageLayout;