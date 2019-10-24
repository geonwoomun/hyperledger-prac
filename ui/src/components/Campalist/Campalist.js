import React, { Component } from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import { getEmail, getAllProgramsID } from "../../pages/pageFunction";


class ItemExampleDivided extends Component {
  state = {
    program : []
  }
  componentDidMount(){
    const userEmail = getEmail();
    getAllProgramsID(userEmail).then(res =>{
      this.setState({
        program : res
      })
    })
  }
  render() {
    const { program } = this.state;
    return (
      <>
      <h3>등록한 캠페인</h3>
      <Item.Group divided>
        {program ?
          program.map(pro => (  // 사진이 나오게 해야함!
            <Item>
            {pro.proImg ? <Item.Image src={require(`./../../../public/uploads/${pro.proImg}`)} /> : null}
            <Item.Content>
              <Item.Header as="a">{pro.proName}</Item.Header>
              <Item.Meta>
                <span className="cinema">마감기한 : {pro.targetDate}</span>
              </Item.Meta>
              <Item.Description>
                <p>단체명</p>
  
                <p>
                  <br />
                  {pro.proDesc}
                </p>
                <p>목표금액 : {pro.targetCoin}코인</p>
                <p>모인금액 : {pro.nowCoin}코인</p>
              </Item.Description>
              <Item.Extra>
                <Button
                  style={{ color: "#FFFFFF", background: "#27AE60" }}
                  primary
                  floated="right"
                >
                  기부하기
                  <Icon name="right chevron" />
                </Button>
                <Label>진행중</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
          )) : null}
        
        {/* <Item>
          <Item.Image src={cam} />

          <Item.Content>
            <Item.Header as="a">12 Years a Slave</Item.Header>
            <Item.Meta>
              <span className="cinema">2018.12.11</span>
            </Item.Meta>
            <Item.Description>
              <p>단체명</p>

              <p>
                <br />
                기부하세요요오오오ㅗㅇ오오오오
              </p>
              <p>모인금액 124,457,869원</p>
            </Item.Description>
            <Item.Extra>
              <Button
                style={{ color: "#FFFFFF", background: "#27AE60" }}
                primary
                floated="right"
              >
                기부하기
                <Icon name="right chevron" />
              </Button>
              <Label>진행중</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src={cam} />

          <Item.Content>
            <Item.Header as="a">Watchmen</Item.Header>
            <Item.Meta>
              <span className="cinema">IFC</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Button primary floated="right">
                기부하기
                <Icon name="right chevron" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item> */}
      </Item.Group>
      </>
    );
  }
}

export default ItemExampleDivided;
