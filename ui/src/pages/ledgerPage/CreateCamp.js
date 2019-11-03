import React, { useState } from 'react';
import axios from 'axios';

const HomepageLayout = () => {
    const [campno, setCampno] = useState("");
    const [campname, setcampname] = useState("");
    const [orgname, setOrgname] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/createcamp', {
            campno,
            campname,
            orgname
        }).then(res => {
            alert('추가됐습니다.');
        })
        .catch(err=> {
            console.error(err);
            
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>campno</label><input style = {{display: "block"}} value = {campno} onChange={e=> setCampno(e.target.value)}/>
                <label>campname</label><input style = {{display: "block"}} value = {campname} onChange={e=> setcampname(e.target.value)}/>
                <label>orgname</label><input style = {{display: "block"}} value = {orgname} onChange={e=> setOrgname(e.target.value)}/>
                <button>생성</button>
            </form>        
        </div>
    );
};

export default HomepageLayout;
