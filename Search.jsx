import React, { useEffect, useState } from 'react'
import axios from "axios";
function Search() {
    const[citydata,setData] = useState("");
    const[searchvalue ,setSearchvalue] = useState("");
    const[recommend , setRecommed] = useState([]);
     async function call()
    {
        const datafile=   await axios("https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json");
        setData(datafile.data);
          console.log(citydata)
         
    }

    function searchfun(e)
    {
    setSearchvalue(e.target.value);
    filtervalue(e.target.value);
      
    }

    function filtervalue(item){


        
        const arr = citydata.filter(place =>{
            const regex = new RegExp(item , 'gi');
             return place.name.match(regex) || place.state.match(regex);

        })
        setRecommed(arr);
    }
   
function search()
{
    console.log(citydata[0].name)
}

    useEffect(()=>{
        call()
    },[])

  return (
   <>
  <div className='searchcontainer'>
<input placeholder='Search any City Here'   onChange={searchfun}  /><button onClick={search}>Search</button>
</div>
<br></br>
<ul>
{
     recommend.map((data)=>{
         return(
            <>
            <li>{data.name}  ( {data.state} )</li>
            <br></br>
            </>
         )
         
     })
}
</ul>
 
   </>
  )
}

export default Search
