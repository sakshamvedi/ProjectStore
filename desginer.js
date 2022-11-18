import React from 'react'

function Desgine() {
    const[value , setValue] = React.useState("");
    const[value1 , setValue1] = React.useState("");
    const [text  , setText] = React.useState("https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwzfHx0cmFpbnxlbnwwfHx8fDE2Njg1Mzc1MDc&ixlib=rb-4.0.3&q=80&w=1080");
 function test(e)
 { 
    setValue(e.target.value);
    console.log(value)
  document.documentElement.style.setProperty('--blur' , value+"px");
 }

function test2(e)
{
    setValue1(e.target.value);
  document.documentElement.style.setProperty('--spacing' , value1+"px");

}
function test3(e)
{
    document.documentElement.style.setProperty('--base' , e.target.value);
}
function test4(e)
{
    document.documentElement.style.setProperty('--radius' , e.target.value+"px");
}

  return (
    <>
    <div className="mains">
        <h1>Welcome to Desginer </h1>
        
    </div><hr></hr>
    <div className="mains">
    <label> Image Link :</label>
        <input onChange={(e)=>setText(e.target.value)}></input>
    </div>
  
    <div className="mains">
      
        <label> Blur :   </label>
    <input type={"range"} min = {"-1"} max = {"100"} onChange = {test} ></input>
    <label> Spacing :   </label>
    <input type={"range"} min = {"0"} max = {"100"} onChange = {test2} ></input>
    <label>Border :   </label>
    <input type={"range"} min = {"0"} max = {"100"} onChange = {test4} ></input>
    <label> Color : </label>
    <input type={"color"}  onChange = {test3} />
    </div>
    <hr></hr>

    <div className="mains">
        <img src={text} alt="" />
    </div>
    
    </>
  )
}

export default Desgine
