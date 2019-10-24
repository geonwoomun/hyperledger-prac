import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import cam from "../../image/cam.PNG";

class CardExampleCard extends Component {
  state = {
    program : []
  }
  componentDidMount() {
    this.setState({
      program : this.props.program
    })
  }
  render() {
    const { program } = this.state;
    return (
      <Card>
        {program.proImg ? <Image src={require(`./../../../public/uploads/${program.proImg}`)} wrapped ui={false} /> :
      <Image src={cam} wrapped ui={false} />}
        <Card.Content>
          <Card.Header>{program.proName}</Card.Header>
          <Card.Meta>
            <span className="date">마감기한 : {program.targetDate}</span>
          </Card.Meta>
          <Card.Description>
            {program.proDesc} 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {program.donateCount}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default CardExampleCard;
