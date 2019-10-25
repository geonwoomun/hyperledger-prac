import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useQueryCar = initialValue => {
    const [ cars, setCars ] = useState(initialValue);
    useEffect(() => {
        axios.get('/api/queryallcars').then(results => {
            results = results.data;
            setCars(results);
        })
    },[])
    return cars;
}
const HomepageLayout = () => {
    const cars = useQueryCar([]);
    return (
           <div>
            <table style = {{borderCollapse:"collapse"}} border="1">
                <thead>
                    <tr><th>No</th><th>colour</th><th>make</th><th>model</th><th>owner</th></tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr>
                            <td>{car.Key}</td>
                            <td>{car.Record.colour}</td>
                            <td>{car.Record.make}</td>
                            <td>{car.Record.model}</td>
                            <td>{car.Record.owner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomepageLayout;
