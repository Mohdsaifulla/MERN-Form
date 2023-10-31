import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  const [form, setform] = useState([]);
const [data,setData]=useState([])
  const handleSubmit = async(e) => {
    e.preventDefault();
    const fetchData = await fetch("http://localhost:5000/test1", {
      method:"POST",
      body:JSON.stringify(form),
      headers:{
        "Content-Type":"application/json",
      }
    });
    // const data=await fetchData.json()
    // console.log(data)
  };
const getData= async()=>{
const fetching=await fetch("http://localhost:5000/test1",{
  method:"GET",
})
const detail=await fetching.json();
setData(detail)
console.log(detail)
}

useEffect(()=>{
  getData()
},[])
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(data);
  return (
    <div>
      {data.map((item)=>(
        <div>
        <p>{item.name}</p>
        <p>{item.password}</p>

        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={handleChange} name="name" />
        <label>Password</label>
        <input type="password" onChange={handleChange} name="password" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default App;
