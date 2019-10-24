//14. 밑에 컴포넌트 
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='스토리' active={activeItem === '스토리'} onClick={this.handleItemClick} />
          <Menu.Item
            name='후원금 사용내역'
            active={activeItem === '후원금 사용내역'}
            onClick={this.handleItemClick}
          />
         
      
        </Menu>

        
      </div>
    )
  }
}