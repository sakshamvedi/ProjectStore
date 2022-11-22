import React from 'react'

function Panel() {


const [state,setState] = React.useState("panel panel2");

const [state1,setState1] = React.useState("panel panel1");

const [state2,setState2] = React.useState("panel panel3");

const [state3,setState3] = React.useState("panel panel4");
    function animate(data)
    {
         switch (data) {
            case 2:
                setState("panel panel2 outercontainer open")
                break;
                case 1:
                setState1("panel panel1 outercontainer open")
                break;
         
                case 3:
                setState2("panel panel3 outercontainer open")
                break;
         
                case 4:
                setState3("panel panel4 outercontainer open")
                break;
         
         
            default:
                break;
         }
    }


  return (
    <>
    <div className='panels'>
    <div className= {state} onMouseOver={()=>animate(2)} onMouseOut={()=>setState("panel panel2")} >
    <p>Hii </p>
    <p>Mr. Monkey  </p>
    <p> Cunning and Fast Hire for better Engagements</p>
    </div>
    <div className= {state1} onMouseOver={()=>animate(1)} onMouseLeave={()=>setState1("panel panel1")} ><p>Hii </p>
    <p>Mr. cheetah Oliver </p>
    <p> Cunning and Fast Hire for better Engagements</p></div>
    <div className= {state2} onMouseOver={()=>animate(3)} onMouseLeave={()=>setState2("panel panel3")}  ><p>Hii </p>
    <p>Mr. Lion  Singh </p>
    <p> Cunning and Fast Hire for better Engagements</p></div>
    <div className= {state3} onMouseOver={()=>animate(4)} onMouseLeave={()=>setState3("panel panel4")}  ><p>Hii </p>
    <p>Mr. Bear Grylls </p>
    <p> Cunning and Fast Hire for better Engagements</p></div>
    </div>
    </>
  )
}

export default Panel








CSS PART (AS IT IS VERY IMPORTANT ) 
.panels{
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: fit-content;
}

.panel{
  height: 500px;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  color: white;
  transition: transform 0.5s;
  text-shadow: -2px 2px 1px black;
  flex: 1;
}

.image{
  height: 100%;
 padding-top: -700px;
  width: 100%;

}



.panel1{
   transition: 1.5s;
   background-size: cover;
  background-position: center;
    background-repeat: no-repeat;
  
   background-image: url("https://images.unsplash.com/photo-1624958319297-d1aa3a41378e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw3fHxjaGVldGFofGVufDB8fHx8MTY2OTA4NTExOQ&ixlib=rb-4.0.3&q=80&w=1080");
}
.panel2{
  background-size: cover;
  background-position: center;
    background-repeat: no-repeat;
  background-image: url("https://images.unsplash.com/photo-1615038552039-e1b271f14ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw0fHxtb25rZXl8ZW58MHx8fHwxNjY5MDg0MTE3&ixlib=rb-4.0.3&q=80&w=1080");
}
.panel3{
  background-size: cover;
  background-position: center;
    background-repeat: no-repeat;
  background-image: url("https://images.unsplash.com/photo-1543682704-15adeb008ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw4fHxsaW9ufGVufDB8fHx8MTY2OTA4NDE0OA&ixlib=rb-4.0.3&q=80&w=1080");
}
.panel4{
  background-size: cover;
  background-position: center;
    background-repeat: no-repeat;
  background-image: url("https://images.unsplash.com/photo-1595173425119-1c54835c1874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw3fHxiZWFyfGVufDB8fHx8MTY2OTA4NDA5NQ&ixlib=rb-4.0.3&q=80&w=1080");
}

.panel p{
  
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 600;
  font-size: 20px;

}

.panel > *:first-child{
  transform: translateY(-500%);
  transition: 0.5s;
  
}
.panel.outercontainer > *:first-child{
  transform: translateY(-100%);
  transition: 0.5s;
}
.panel.outercontainer > *:last-child{
  transform: translateY(-50%);
  transition: 0.5s;
}
.panel >*:last-child{
  transform: translateY(400%);
  transition: 1.5s;
}

.panel.open{
   flex: 3;
  transition: 1.5s;
  transition-property: unset;
}
