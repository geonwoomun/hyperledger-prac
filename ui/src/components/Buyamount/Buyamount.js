import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: '1개', value: 1 },
  { key: 2, text: '2개', value: 2 },
  { key: 3, text: '3개', value: 3 },
  { key: 3, text: '4개', value: 4 },
  { key: 3, text: '5개', value: 5 },
  

]

const DropdownExampleUncontrolled = () => (
  <Dropdown selection options={options} placeholder='주문 수량' fluid />
)

export default DropdownExampleUncontrolled
