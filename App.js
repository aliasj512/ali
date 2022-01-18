import React, { useEffect, useState } from "react";
import axios from 'axios'
import './App.css';

function App() {
  const[findzip,getzip ] = useState("")
  const [data,setdata]=useState([])
let jsonData=[];

  function handle (e) {
    e.preventDefault()
    axios.get("http://ctp-zip-api.herokuapp.com/city/" + findzip.toUpperCase()).then((pos) => {
      setdata(pos.data)
    console.log(pos.data)

 })
}


const Change = (e) => {
  e.preventDefault();
  getzip((e.target.value).toUpperCase())
console.log((e.target.value).toUpperCase())


}
function display() {
  if (jsonData) {
   console.log(jsonData)
  
 }
  }
  
  function noZip(){
  console.log("noZip")
  }
  


  useEffect(() => {
    handle ()
   
   }, [])

  return (
    <div className="App">
      <h1>ZIP CODES</h1>
      <p> Enter the zip to access the city locations </p>
      <form onSubmit={handle}>
  <label>
    Zip :
    <input type="text" name="name" onChange={Change} />
  </label>
  <input type="submit" value="Submit" />
</form>
<div>

{jsonData ? display() : noZip() }
</div>


      {data.map((element) => {
        return(
        
        <ul className=" container">

        <li className="info" >Zipcode:{element}</li>
        
        </ul>
        
      );
      })}

     
    </div>
  );
}

export default App;
