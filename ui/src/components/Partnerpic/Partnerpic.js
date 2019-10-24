import React from 'react'
import { Image } from 'semantic-ui-react'
// props로 그룹 정보를 받아 사진과 단체명, 전화번호, 단체소개가 나오게 해야함.
const ImageExampleCircular = ({group}) => (
  <div style = {{textAlign:"center"}}>
    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />
      <br/>
      단체명 : {group.name}<br/>
      전화번호 : {group.phoneNumber}<br/>
      단체소개 : {group.groupIntro}
  </div>
  
  
)

export default ImageExampleCircular