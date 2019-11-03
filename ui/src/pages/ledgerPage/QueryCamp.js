import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useQueryCar = initialValue => {
    const [ camps , setCamps ] = useState(initialValue);
    useEffect(() => {
        axios.get('/api/querycamp').then(results => {
            results = results.data;
            setCamps(results);
        })
    },[])
    return camps;
}
const HomepageLayout = () => {
    const camps = useQueryCar([]);
    return (
           <div>
            <table style = {{borderCollapse:"collapse"}} border="1">
                <thead>
                    <tr><th>No</th><th>campname</th><th>orgname</th><th>target</th></tr>
                </thead>
                <tbody>
                    {camps.map((camp) => (
                        <tr>
                            <td>{camp.Key}</td>
                            <td>{camp.Record.campname}</td>
                            <td>{camp.Record.orgname}</td>
                            <td>{camp.Record.target}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HomepageLayout;
