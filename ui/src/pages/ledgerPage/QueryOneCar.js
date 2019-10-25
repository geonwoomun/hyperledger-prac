import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useQueryCar = carNumber => {
    const [ car, setCar ] = useState("");
    useEffect(() => {
        axios.get(`/api/queryonecar?carno=${carNumber}`).then(results => {
            results = results.data;
            setCar(results);
        })
    },[])
    return car;
}

const InputCar = () => {
    const [ carNumber , setCarNum ] = useState('');
    let car = ''
    const onChange = (e) => {
        setCarNum(e.target.value);
    }
    const onSubmit = () => {
       car = useQueryCar(carNumber)
    }
    return { onChange, onSubmit, car}
}
const HomepageLayout = () => {
    let { onChange, onSubmit, car } = InputCar();
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange}></input>
                <button type="submit">제출</button>
            </form>   
            <table style = {{borderCollapse:"collapse"}} border="1">
                <thead>
                    <tr><th>No</th><th>colour</th><th>make</th><th>model</th><th>owner</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{car.Key}</td>
                        <td>{car.Record.colour}</td>
                        <td>{car.Record.make}</td>
                        <td>{car.Record.model}</td>
                        <td>{car.Record.owner}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default HomepageLayout;
