import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useQueryCar = () => {
    const [ cars, setCars ] = useState();
    useEffect(() => {
        axios.get('/api/queryallcars').then(results => {
            results = results.data;
            setCars(results);
        })
    },[])
    return cars;
}
const queryCar = () => {
    const cars = useQueryCar();
    return (
        <div>
            {cars.maps((car) => (
                <div>
                    {car.Key}<br/>
                    {car.Record.colour}<br/>
                    {car.Record.make}<br/>
                    {car.Record.model}<br/>
                    {car.Record.owner}
                </div>
            ))}
        </div>
    );
};

export default queryCar;