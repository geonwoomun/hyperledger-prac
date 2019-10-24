//1.홈화면
import React from 'react'
import {
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "투명한 기부 플랫폼"
            </Header>
            <p style={{ fontSize: '1.33em' }}>블록체인 기술을 적용하여 기부금 사용 내역이
             분산원장에 공유되어 기부금이 투명하게 관리된다. 또한 플랫폼 관리자가 존재하는 기존의
             기부플랫폼과 달리 관리자가 없이 스마트 컨트랙트를 통해 기부 플랫폼을 관리한다. 기부 시스템의
             신뢰성 증가뿐만 아니라 청렴한 기부 문화도 주도할 수 있는 블록체인 기반의 기부 플랫폼이다. </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> 
)
export default HomepageLayout
