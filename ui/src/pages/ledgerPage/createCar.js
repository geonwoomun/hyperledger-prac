import React, { useState } from 'react';

const HomepageLayout = () => {
    const [carno, setCarno] = useState("");
    const [colour, setColour] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [owner, setOwner] = useState("");
    return (
        <div>
            <form>
                carno<input style = {{display: "block"}} value = {carno} onChange={e=> setCarno(e.target.value)}/>
                colour<input style = {{display: "block"}} value = {colour} onChange={e=> setColour(e.target.value)}/>
                make<input style = {{display: "block"}} value = {make} onChange={e=> setMake(e.target.value)}/>
                model<input style = {{display: "block"}} value = {model} onChange={e=> setModel(e.target.value)}/>
                owner<input style = {{display: "block"}} value = {owner} onChange={e=> setOwner(e.target.value)}/>
            </form>        
        </div>
    );
};

export default HomepageLayout;