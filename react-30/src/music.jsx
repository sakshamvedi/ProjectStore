import React, { lazy, useEffect } from 'react'
import { useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './App.css'
function Music() {
const [inputstate,setinputstate] = React.useState(true);
const [playicon,setplayicon] = React.useState("play.png");
const [playicon1,setplayicon1] = React.useState("play.png");
const [playicon2,setplayicon2] = React.useState("play.png");
const [playicon3,setplayicon3] = React.useState("play.png");
const [playicon4,setplayicon4] = React.useState("play.png");
const [playicon5,setplayicon5] = React.useState("play.png");
const [playicon6,setplayicon6] = React.useState("play.png");
const[music,setmusic] = React.useState("");
const [emoji , setimoji] = React.useState("😀");
const [clas , setclas] = React.useState("upper");
const[playson,setplaysong] = React.useState(false);
const playbtn = useRef();
const playbtn1 = useRef();
const playbtn2 = useRef();
const playbtn3 = useRef();
const playbtn4 = useRef();
const playbtn5 = useRef();
const playbtn6 = useRef();
function inputbox(){
    console.log("clicked")
  setinputstate(!inputstate);
  console.log(inputstate);
}


function happy()
{
  setimoji("😀")
  setclas("upper")
  
}
function angry()
{
  setimoji("😤")
  setclas("angrymood")
}
function sad()
{
  setimoji("😔")
  setclas("sadmod")
}


  


 function playsong(data)
{
    setplaysong(!playson);
    setmusic(data);

}


useEffect(()=>{

  switch (music) {
    case "q":
      if(playson == true)
{
  playbtn.current.play()
  setplayicon("pause.png");
}
else{
  playbtn.current.pause()
  setplayicon("play.png")

}
break;


case "w" :
  if(playson == true)
  {
    playbtn1.current.play()
    setplayicon1("pause.png");
  }
  else{
    playbtn1.current.pause()
    setplayicon1("play.png")
  
  }
      break;


      case "r" :
        if(playson == true)
        {
          playbtn2.current.play()
          setplayicon2("pause.png");
        }
        else{
          playbtn2.current.pause()
          setplayicon2("play.png")
        
        }
      
      
            break;    
            
            
            case "s" :
              if(playson == true)
              {
                playbtn3.current.play()
                setplayicon3("pause.png");
              }
              else{
                playbtn3.current.pause()
                setplayicon3("play.png")
              
              }
            
            
                  break;   
                  case "t" :
                    if(playson == true)
                    {
                      playbtn4.current.play()
                      setplayicon4("pause.png");
                    }
                    else{
                      playbtn4.current.pause()
                      setplayicon4("play.png")
                    
                    }
                  
                  
                        break;    
                        case "y" :
                          if(playson == true)
                          {
                            playbtn5.current.play()
                            setplayicon5("pause.png");
                          }
                          else{
                            playbtn5.current.pause()
                            setplayicon5("play.png")
                          
                          }
                        
                        
                              break;
                              case "u" :
                          if(playson == true)
                          {
                            playbtn6.current.play()
                            setplayicon6("pause.png");
                          }
                          else{
                            playbtn6.current.pause()
                            setplayicon6("play.png")
                          
                          }
                        
                        
                              break;
                          
                   
  
    default:
      break;
  }


},[playson])


function pausesong(event)
{
  console.log(event.key)
 
  if(event.key == " ")
  {
  playbtn.current.pause()
  setplayicon("play.png");
  }
}
window.addEventListener('keydown' , pausesong)



  return (
    <>
<audio src='rain.wav' ref={playbtn}></audio>
<audio src='birds.wav' ref={playbtn1}></audio>
<audio src='rainbirds.wav' ref={playbtn2}></audio>
<audio src='thunder.wav' ref={playbtn3}></audio>
<audio src='sandy.mp3' ref={playbtn4}></audio>
<audio src='drip.mp3' ref={playbtn5}></audio>
<audio src='foosteps.mp3' ref={playbtn6}></audio>
<div className={clas}>
<div className='mood'>
  
       <h1>{emoji}</h1> 
    </div>
    <div className='profile'>
    <img src='https://yt3.ggpht.com/ytc/AMLnZu9ayg1_3q9yhKVXukT9juYONVJJCpmUXlepP2MCzQ=s900-c-k-c0x00ffffff-no-rj' className='avatar'></img>
    <br></br>
    
    <h1>Happy Night's</h1>
    <p1 className = "neonText">Vishu</p1>
    </div>
   
  
<img src='mount.jpg' className='img'></img></div>


<div className='centertext'>
<h1 onClick={inputbox}> {emoji} How are you feeling ? <select> <option onClick={happy}>😀</option>
<option onClick={angry}><h1>😤</h1></option>
<option onClick={sad}>😢</option>

</select> </h1>
</div>

<div className='bodyhead'> <p1>Nature's Pick </p1></div>
<div className="container">
<div className='cards'>
  <img src='https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw0fHxyYWlufGVufDB8fHx8MTY2ODQ5OTI5Ng&ixlib=rb-4.0.3&q=80&w=1080'></img>
<div className='compo'>
<p1><bold>Soothing Rains</bold></p1>
  <br></br>
  <div className='playbtn' onClick={()=>playsong("q")} >
    <img src={playicon}></img>
  </div>

</div>
</div>
<div className='cards'>
  <img src='https://images.unsplash.com/photo-1548509925-0e7aa59c6bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw2fHxiaXJkc3xlbnwwfHx8fDE2Njg1MDc4MDY&ixlib=rb-4.0.3&q=80&w=1080'></img>
<div className='compo'>
<p1><bold>Chirping Birds</bold></p1>
  <br></br>
  <div className='playbtn' onClick={()=>playsong("w")}>
    <img src={playicon1} ></img>
  </div>

</div>

</div>
<div className='cards'>
  <img src='https://images.unsplash.com/photo-1528402520525-05f8b9608a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw2fHxyYWlueXxlbnwwfHx8fDE2Njg1MzQxNTA&ixlib=rb-4.0.3&q=80&w=1080'></img>
<div className='compo'>
<p1><bold>Rainy Chirps</bold></p1>
  <br></br>
  <div className='playbtn' onClick={()=>playsong("r")}>
    <img src={playicon2} ></img>
  </div>

</div>

</div>


<div className='cards'>
  <img src='https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwxfHx0aHVuZGVyc3Rvcm18ZW58MHx8fHwxNjY4NTM0NTE0&ixlib=rb-4.0.3&q=80&w=1080'></img>
<div className='compo'>
<p1><bold>ThunderStorm</bold></p1>
  <br></br>
  <div className='playbtn' onClick={()=>playsong("s")}>
    <img src={playicon3} ></img>
  </div>

</div>

</div>


<div className='cards'>
  <img src='https://images.unsplash.com/photo-1610307775401-b6de856aecdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw3fHxiZWFjaCUyMHdhdmVzfGVufDB8fHx8MTY2ODUzNDg4Ng&ixlib=rb-4.0.3&q=80&w=1080'></img>
<div className='compo'>
<p1><bold>Sweet Waves</bold></p1>
  <br></br>
  <div className='playbtn' onClick={()=>playsong("t")}>
    <img src={playicon4} ></img>
  </div>

</div>


</div>

<div className='cards'>
  <img src='https://images.unsplash.com/photo-1495774539583-885e02cca8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw3fHxkcmlwaW5nJTIwd2F0ZXJ8ZW58MHx8fHwxNjY4NTM1ODI4&ixlib=rb-4.0.3&q=80&w=1080'></img>
<div className='compo'>
<p1><bold>Water Droplets</bold></p1>
  <br></br>
  <div className='playbtn' onClick={()=>playsong("y")}>
    <img src={playicon5} ></img>
  </div>

</div>


</div>

<div className='cards'>
  <img src='https://images.unsplash.com/photo-1512172661749-6c4abdd99338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw3fHxmb290JTIwaW4lMjB3YXRlcnxlbnwwfHx8fDE2Njg1MzY0MDY&ixlib=rb-4.0.3&q=80&w=1080'></img>
<div className='compo'>
<p1><bold>Footsteps in Water</bold></p1>
  <br></br>
  <div className='playbtn' onClick={()=>playsong("u")}>
    <img src={playicon6} ></img>
  </div>

</div>


</div>



</div>

<div className='bodyhead'> <p1>Feel The Vibes </p1></div>

<div className="container">
<div className='cards'>
  <img src='https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwzfHx0cmFpbnxlbnwwfHx8fDE2Njg1Mzc1MDc&ixlib=rb-4.0.3&q=80&w=1080'></img>
<div className='compo'>
<p1><bold>Gentle Train</bold></p1>
  <br></br>
  <div className='playbtn' onClick={()=>playsong("u")}>
    <img src={playicon6} ></img>
  </div>

</div>


</div>
</div>


    </>
  )
}

export default Music