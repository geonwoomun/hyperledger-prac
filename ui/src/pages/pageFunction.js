import {
    Responsive,
  } from 'semantic-ui-react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

// 페이지에 관련된 모든 함수들을 만들어 놓는 곳

export const login = async (info) => { // 로그인
  return await axios
  .post('/api/user/login',info)
  .then(res => {
    sessionStorage.setItem('usertoken', res.data.token);
    return res.data;
  })
  .catch(err => {
    console.log(err);
  })
}

export const emailCheck = async (email) => { // 이메일 체크, 중복확인.
  return await axios
  .post('/api/user/emailCheck', {email : email})
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  })
}

export const signUp = async (info) => { // 회원 가입
  return await axios
  .post('/api/user/signup',info)
  .then(res=>{
    return res.data;
  })
  .catch(err => 
    console.log(err));
}

export const getUserType = () => { // sessionStrage에서 받은 usertoken에서 userType을 받아서 반환해주는 함수. 0이면 개인 1이면 그룹
  let token = '';
  sessionStorage.usertoken ? token=sessionStorage.usertoken : token = null;
  if(token === null){
    return null;
  }
  const decode = jwt_decode(token);
  const userType = decode.userType;
  return userType;
}

export const getEmail = () => { // 이메일 가져오기
  let token = '';
  sessionStorage.usertoken ? token=sessionStorage.usertoken : token = null;
  if(token === null){
    return null;
  }
  const decode = jwt_decode(token);
  const email = decode.email;
  return email;
}

export const chargeCoin = async (email, chargeCoin) => { // 코인 충전.
  return await axios
  .post('/api/coin/chargeCoins',{
    email,
    chargeCoin
  })
}

export const getCoin = async (email) => { // 코인이 얼마있는지 가져와서 반환해주는 함수
  return await axios
  .get(`/api/coin/getAllCoins/${email}`)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}

export const regProgram = async (proData) => { // 프로그램 등록
  return await axios
  .post(`/api/pro/register`, proData)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}

export const imgUpload = async (formData) => {  // 이미지를 업로드 할 때 쓸거임.
  return await axios
  .post('/api/pro/uploadImg', formData, {
    headers : {
      'Content-Type' : 'multipart/form-data'
    }
  })
}

export const getAllPrograms = async () => { // 모든 프로그램을 가져옴.
  return await axios
  .get(`/api/pro/getAllPrograms`)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  }
  )
}

export const getAllProgramsID = async (userEmail) => { // 아이디를 받아서 그 아이디의 프로그램을 가져옴
  return await axios
  .get(`/api/pro/getAllProgramsID/${userEmail}`)
  .then(res =>{
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}

export const getNumProgram = async (proNum) => { // 해당 num의 프로그램의 정보를 가지고 온다.
  return await axios
  .get(`/api/pro/getNumProgram/${proNum}`)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}

export const modifyInfo = async (email, groupIntro) => { // email과 groupInfo를 받아서 해당 email의 그룹소개를 변경할거임
  return await axios
  .post(`/api/group/modifyInfo`,{
    email,
    groupIntro
  })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}

export const getGroupInfo = async (email) => {  // 그룹의 소개를 가지고 오는 함수.
  return await axios
  .get(`/api/group/getGroupInfo/${email}`)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}

export const getGroup = async () => { // 모든 그룹을 가지고 오는 것.
  return await axios
  .get(`/api/group/getAllGroup`)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}

export const donateCoin = async (proNum, coin) => { // 코인 후원 할 때 사용할 함수.
  return await axios
  .post(`/api/pro/donateCoin`, {
    proNum,
    coin
  })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}