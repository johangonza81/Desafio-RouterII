import { useState, useEffect } from "react";

const ConsumeApi =() =>{
const [options,setOptions] = useState([])
  
  useEffect(() =>{
 
  fetchData().then (data =>{
    setOptions(data);
  });
},[])



const fetchData = async () => {
  
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
  const data = await response.json();
  return
   data;

<select>
        {options.map(option => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>   

}
}
export default ConsumeApi;
