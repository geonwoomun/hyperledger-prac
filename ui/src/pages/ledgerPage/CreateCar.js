import React, { useState } from 'react';
import axios from 'axios';

const HomepageLayout = () => {
    const [carno, setCarno] = useState("");
    const [colour, setColour] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [owner, setOwner] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/createcar', {
            carno,
            colour,
            make,
            model,
            owner
        }).then(res => {
            alert('추가됐습니다.');
        })
        .catch(err=> {
            console.error(err);
            
        })
    }
    return (
        <div>
            <form>
                <label>carno</label><input style = {{display: "block"}} value = {carno} onChange={e=> setCarno(e.target.value)}/>
                <label>colour</label><input style = {{display: "block"}} value = {colour} onChange={e=> setColour(e.target.value)}/>
                <label>make</label><input style = {{display: "block"}} value = {make} onChange={e=> setMake(e.target.value)}/>
                <label>model</label><input style = {{display: "block"}} value = {model} onChange={e=> setModel(e.target.value)}/>
                <label>owner</label><input style = {{display: "block"}} value = {owner} onChange={e=> setOwner(e.target.value)}/>
            </form>        
        </div>
    );
};

export default HomepageLayout;
