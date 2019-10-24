import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import cam from '../../image/cam.PNG';
const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item>
      <Item.Image src={cam} />

      <Item.Content>
        <Item.Header as='a'>프로그램 명</Item.Header>
        <Item.Meta>
          <span className='cinema'>2018.12.11</span>
        </Item.Meta>
        <Item.Description><p>단체명</p>
        
        <p><br/>10000코인을 후원하셨습니다.</p>
        <p>모인금액 124,457,869원</p>
  
        
       </Item.Description>
        <Item.Extra>
        <Button style={{color: '#FFFFFF', background:'#27AE60'}} primary floated='right'>
            사용내역
            <Icon name='right chevron' />
          </Button>
          <Label style={{color: '#FFFFFF', background:'#1E8157'}}>후원 완료</Label>
          
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src={cam} />

      <Item.Content>
        <Item.Header as='a'>프로그램 명</Item.Header>
        <Item.Meta>
          <span className='cinema'>2018.04.12</span>
        </Item.Meta>
        <Item.Description><p>단체명</p>
        
        <p><br/>20000코인을 후원하셨습니다.</p>
        <p>모인금액 124,457,869원</p>
  
        
       </Item.Description>
        <Item.Extra>
        <Button style={{color: '#FFFFFF', background:'#27AE60'}} primary floated='right'>
            내역확인  
            <Icon name='right chevron' />
          </Button>
          <Label style={{color: '#FFFFFF', background:'#1E8157'}}>진행중</Label>
          
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
    <Item.Image src={cam} />

      <Item.Content>
        <Item.Header as='a'>Watchmen</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
        <Button style={{color: '#FFFFFF', background:'#27AE60'}} primary floated='right'>
            내역확인  
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleDivided
