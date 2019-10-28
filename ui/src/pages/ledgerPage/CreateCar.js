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
                carno<input value = {carno} onChange={e=> setCarno(e.target.value)}/>
                colour<input value = {colour} onChange={e=> setColour(e.target.value)}/>
                make<input value = {make} onChange={e=> setMake(e.target.value)}/>
                model<input value = {model} onChange={e=> setModel(e.target.value)}/>
                owner<input value = {owner} onChange={e=> setOwner(e.target.value)}/>
            </form>        
        </div>
    );
};

export default HomepageLayout;
