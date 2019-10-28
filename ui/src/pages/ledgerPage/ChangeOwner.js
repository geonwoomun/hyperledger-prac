import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

const HomepageLayout = () => {
    const [ carno, setCarNo ] = useState('');
    const [ owner, setOwner ] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        axios.put('/api/changeowner',{
            carno,
            owner
        }).then(res => {
            alert('변경되었습니다.');
        })
        .catch(err => {
            console.error(err);
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>CarNo</label><input value = {carno} onChange={e=> setCarNo(e.target.value)}/>
                <label>Owner</label><input value = {owner} onChange={e=> setOwner(e.target.value)}/>
                <button>변경</button>
            </form>
        </div>
    );
};

export default HomepageLayout;