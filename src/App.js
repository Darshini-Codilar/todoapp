import React ,{useState}from "react";
import Todoform from './todo/Todoform';

function App() {
   
const themeChange = () =>{
  var img1=document.getElementById('image');
  
  
  if (img1.src.match("images/icon-moon.svg")  ) {
    img1.src = "images/icon-sun.svg";
    document.body.style.backgroundColor= '#25273c';
    document.body.style.color= 'white';
    document.body.style.transition='600ms';
    document.body.querySelector('.results').style.boxShadow = "0 35px 50px rgb(0 0 0 / 50%)";
    document.body.querySelector('.results').style.backgroundColor="#25273c";
    document.body.querySelector('.container').style.backgroundImage="url('/images/bg-desktop-dark.jpg')"
    document.querySelector('.buttons').style.backgroundColor="#25273c";
    document.querySelector('input').style.backgroundColor="#25273c";
    document.querySelector('input').style.color="white";
    


}
else {
    img1.src = "images/icon-moon.svg";
    document.body.style.color= 'black';
    document.body.style.transition='600ms';
    document.body.style.backgroundColor='white';
    document.body.querySelector('.container').style.transition='2000ms';
    document.body.querySelector('.container').style.backgroundImage="url('/images/bg-desktop-light.jpg')"
    document.body.querySelector('.results').style.boxShadow = "0 35px 50px rgb(194 195 214 / 50%)";
    document.body.querySelector('.results').style.backgroundColor="white";
    document.querySelector('input').style.color="black";
    
    document.querySelector('.buttons').style.backgroundColor="white";
    document.querySelector('input').style.backgroundColor="white";

    
}

}
  return (
    <>
    <div className="App" >
     
      <Todoform themeChange={themeChange}/>
    </div>
    </>
  );
}

export default App;
