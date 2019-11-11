import React, { useState, useEffect } from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import cam from '../../image/cam.PNG';
import { getEmail } from '../../pages/pageFunction';
import axios from 'axios';
const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = () => {
  const [ donalist, setDonalist ] = useState("");
  const email = getEmail();
  useEffect(() => {
    axios.get(`/api/user/mydonalist/${email}`).then(results => {
      setDonalist(results.data);
    })
  },[])
  return (
    <Item.Group divided>

    {donalist === "" ? "" : donalist.map(dona => {
      return (
        <Item>
      {dona.proImg ?   <Item.Image src={require(`./../../../public/uploads/${dona.proImg}`)} /> :   <Item.Image src={cam} />}
      <Item.Content>
        <Item.Header as='a'>{dona.proName}</Item.Header>
        <Item.Meta>
          <span className='cinema'>마감 날짜 {dona.targetDate}</span>
        </Item.Meta>
        <Item.Description>

        <p><br/>총 {dona.donacoin}코인을 후원하셨습니다.</p>
        <p>목표금액 {dona.targetCoin}원</p>
        <p>모인금액 {dona.nowCoin}원</p>
  
        
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
      )
    })}

  </Item.Group>
  )
}


export default ItemExampleDivided
