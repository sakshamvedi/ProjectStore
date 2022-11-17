import React from 'react'
import { useEffect } from 'react'

function Clock() {
 const [SecondDeg , setSecondDeg] = React.useState(0);
 const [HoursDeg , setHoursDeg] = React.useState(0);
 const [MinuteDeg , setMinuteDeg] = React.useState(0);
 const [Min,setMin] = React.useState();
 const [sec,setSec] = React.useState(); 
 const [hrs,setHrs] = React.useState();
 const[greet,setGreet] = React.useState();
 const[alarm,setAlarm] = React.useState(true);
 const[border,setBorder] = React.useState("#0F3460")
  useEffect(()=>{
   showtime()
  },[])

  function showtime()
  {
    var date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hours = date.getHours();
    setSec(sec);
    setMin(min);
    setHrs(hours);
    if(sec==0)
    {
      setAlarm(false)
      setBorder("#E94560")
    }
    else{
        setAlarm(true)
        setBorder("#0F3460")
    }
    if(hours>=0 && hours<=12)
    {
        setGreet("Good Morning ")
    }
    else if(hours>=13 && hours<=16)
    {
        setGreet("Good Afternoon");
    }
    else if(hours>=17 && hours<=20)
    {
        setGreet("Happy Evening")
    }
    else{
   setGreet("Good Night")   
    }
     setSecondDeg(sec*6 );
     setMinuteDeg(min*6);
     setHoursDeg(30*hours + min/2);

    console.log(sec)

  }
  setInterval(showtime , 1000)
   
  return (
    <>
    <div className='container2'>
     




<div className='clock' style={{border:`15px solid ${border}`}}>
    
<div className='circles'></div>

    <div className='seconds' style={{transform:`rotate(${SecondDeg}deg)` }} ></div>
    
    <div className="minute" style={{transform:`rotate(${MinuteDeg}deg)` }} >
  
    </div>
    <div className='hours' style={{transform:`rotate(${HoursDeg}deg)` }} ></div>
    {
  alarm ?
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg> :
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>

}

<p1>{greet}</p1>
 <br></br>
 <p2>{hrs}:{Min}:{sec}</p2>
</div>

    </div>
    </>
  )
}

export default Clock