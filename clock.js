function clock(){
    var data=new Date();
       var hrTime=data.getHours();
       var minTime=data.getMinutes();
       var secTime=data.getSeconds();
    var hrotate=30*hrTime+minTime/2;
    var mrotate=6*minTime;
    var srotate=6*secTime;
    
    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;
  }
  
  
  function makeStars(){
    let num=1000;
  
    let i=0;
    while(i<num){
        var scene=document.querySelector(".scene");
      let star=document.createElement("i");
      let x=Math.floor(Math.random()*window.innerWidth);
      let y=Math.floor(Math.random()*window.innerWidth);
      let duration=Math.random()*10;
      let size=Math.random()*2;
      star.style.left=x+'px';
      star.style.top=y+'px';
      star.style.width=1+size+'px';
      star.style.height=1+size+'px';
      scene.appendChild(star);
      star.style.animationDuration=1+duration+'s';
     
      i++;
    }
  }
  document.addEventListener("DOMContentLoaded",function()
       {makeStars();
    setInterval(clock,1000);
  })
  
  
  