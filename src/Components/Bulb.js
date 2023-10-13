import React from 'react'

const Bulb = () => {

 const toogleImage = ()=>{
    var image = document.getElementById("myImage");
    
    if(image.src.match("bulboff")){
        image.src = "pic_bulbon.gif"
    }
    else{
        image.src = "pic_bulboff.gif"
    }
 }


  return (
    <div>
      <img id = "myImage" onClick={toogleImage} src='/pic_bulboff.gif' alt='bulbImage'/>
    </div>
  )
}

export default Bulb
