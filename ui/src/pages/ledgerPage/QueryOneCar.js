import React, { useState, useEffect } from "react";
import axios from "axios";

// const InputCar = () => {
//     const [ carNumber , setCarNum ] = useState('');
//     const onSubmit = (e) => {
//        e.preventDefault();
//        car = useQueryCar(carNumber);
//     }
//     return { onChange, onSubmit, car }
// }

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const useSubmit = carNumber => {
  const [car, setCar] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    axios.get(`/api/queryonecar?carno=${carNumber}`).then(results => {
      console.log(results);
      results = results.data;
      setCar(results);
    });
  };
  return { onSubmit, car };
};
const HomepageLayout = () => {
  // let {  onSubmit } = InputCar();
  const carNum = useInput("");
  const { onSubmit, car } = useSubmit(carNum.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...carNum}></input>
        <button type="submit">제출</button>
      </form>
      <table style={{ borderCollapse: "collapse" }} border="1">
        <thead>
          <tr>
            <th>No</th>
            <th>colour</th>
            <th>make</th>
            <th>model</th>
            <th>owner</th>
          </tr>
        </thead>
        {car ? (
          ""
        ) : (
          <tbody>
            <tr>
              <td>{car.Key}</td>
              <td>{car.Record.colour}</td>
              <td>{car.Record.make}</td>
              <td>{car.Record.model}</td>
              <td>{car.Record.owner}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default HomepageLayout;
