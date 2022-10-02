import "./box.css";
// import React,{useState} from 'react'
function Box() {
  const [data, setData] = useState(null);

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
  }
  return (
    <div className="App">
      <h1> {data} </h1> <input type="text" onChange={getData} />{" "}
    </div>
  );
}
export default Box;
