import { Link } from 'react-router-dom';

import React from 'react';

const SideContent = ({part, info}) => {
    return (
        <div style= {{margin : "40px 100px 0px -180px"}}>
            {part === 'donation' ?
            <>
            <p as='a'header style={{fontSize:'2em', fontWeight : 'bold'}}>후원하기<br/></p>
            <Link to ="/donation" style={info ? {fontWeight : 'bold', fontSize:'1.28em', color: '#27AE60'} : {fontSize:'1.28em', color: '#000000'}}colorblack>후원안내</Link>     
            <hr style={{marginLeft:'0em'}} width="170"/>
            <Link to ="/donation2" style={info ? { fontSize:'1.28em', color: '#000000'} : {fontWeight : 'bold', fontSize:'1.28em', color: '#27AE60'}}colorblack>캠페인 후원하기</Link>
            <hr style={{marginLeft:'0em'}} width="170"/>
            </>
            :
            part === 'partner' ?
            <>
            <p as='a'header style={{fontSize:'2em'}}><strong>파트너 기업</strong><br/></p>
            <Link to ="/partner" style={{ fontSize:'1.28em', color: '#27AE60', fontWeight:'bold'}}colorblack>단체소개</Link>    
            <hr style={{marginLeft:'0em'}} width="170"/>
            </>
            : 
            part === 'mypage' ?
            <>
            <p as='a'header style={{fontSize:'2em'}}>마이 페이지<br/></p>
            <Link to ="/mycampalist" style={info ? {fontWeight : 'bold', fontSize:'1.28em', color: '#27AE60'} : {fontSize:'1.28em', color: '#000000'}}colorblack>나의 후원 내역</Link> <hr style={{marginLeft:'0em'}} width="170"/>
            <Link to ="/myinfo" style={info ? { fontSize:'1.28em', color: '#000000'} : {fontWeight : 'bold', fontSize:'1.28em', color: '#27AE60'}}colorblack>나의 정보</Link> <hr style={{marginLeft:'0em'}} width="170"/>
            </>
          : 
          part === 'coincharge' ?
          <>
            <p as='a'header style={{fontSize:'2em'}}>코인충전<br/></p>
           <hr style={{marginLeft:'0em'}} width="170"/>
        </>
          :
          <>
          <p as='a'header style={{fontSize:'2em',fontWeight:'bold'}}>그룹 페이지<br/></p>
          <Link to ="/groupintroduction" style={part === 'groupmypage1' ? {fontWeight : 'bold',fontSize:'1.28em', color :'#27AE60' } : {fontSize:'1.28em', color :'#000000' } }colorblack>단체 소개</Link> <hr style={{marginLeft:'0em'}} width="170"/>
          <Link to ="/campalist" style={ part === 'groupmypage2' ? {fontWeight : 'bold',fontSize:'1.28em', color :'#27AE60' } : {fontSize:'1.28em', color :'#000000' }}colorblack>캠페인</Link> <hr style={{marginLeft:'0em'}} width="170"/>
          <Link to ="/buy" style={part === 'groupmypage3' ? {fontWeight : 'bold',fontSize:'1.28em', color :'#27AE60' } : {fontSize:'1.28em', color :'#000000' }}colorblack>기부물품 구매</Link> <hr style={{marginLeft:'0em'}} width="170"/>
          <Link to ="/shoppingbasket" style={part === 'groupmypage4' ? {fontWeight : 'bold',fontSize:'1.28em', color :'#27AE60' } : {fontSize:'1.28em', color :'#000000' }}colorblack>장바구니</Link> <hr style={{marginLeft:'0em'}} width="170"/>
        </>    
          
            }
        </div>  
    );
};

export default SideContent;