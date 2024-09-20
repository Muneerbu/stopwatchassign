

// var hour=0;
// var min=0;
// var sec=0;
// var msec=0;

// var HourHeading=document.getElementById('hour');
// var MinHeading=document.getElementById('min');
// var SecHeading=document.getElementById('sec');
// var MsecHeading=document.getElementById('msec');
 

// var start= document.getElementById('start');
// var pause = document.getElementById('pause');
// var reset = document.getElementById('reset');

// var interval;


// function StartTimer(){
//     msec++
//    MsecHeading.innerHTML=msec;
//    if(msec>=100){
//      sec++;
//      SecHeading.innerHTML=sec;
//      msec=0;       
//    } 
//    else if (sec>=60){
//     min++;
//     MinHeading.innerHTML=min;
//     sec=0;
//    }
//    else if(min>=60){s
//     hour++;
//     HourHeading.innerHTML=hour;
//     min=0;
//    }
// }


// function Start(){
//  interval=setInterval(StartTimer,10);
//  start.disabled=true;
//  pause.disabled=false;
//  reset.disabled=false;   
// }


// function Pause(){
//  clearInterval(interval);
//   pause.disabled=true;
//   start.disabled=false;
//   reset.disabled=false; 
// }

// function ResetButton(){
//     hour=0;
//     min=0;
//     sec=0;
//     msec=0;
//     HourHeading.innerHTML=hour;
//     MinHeading.innerHTML=min;
//     SecHeading.innerHTML=sec;
//     MsecHeading.innerHTML=msec;
//     reset.disabled=true;
//     pause.disable=false;
//     pause();   
// }

var hour=0;
var min=0;
var sec=0;
var msec=0;

var HourHeading= document.getElementById('hour');
var MinHeading= document.getElementById('min');
var SecHeading= document.getElementById('sec');
var MsecHeading= document.getElementById('msec');

var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');

var interval;


function StartTimer(){
     msec++
     MsecHeading.innerHTML=msec;
     if(msec>=100){
       sec++;
       SecHeading.innerHTML=sec;
       msec=0;     
     }
     else if(sec>=60){
      min++;
      MinHeading.innerHTML=min;
      sec=0;
     }
     else if(min>=60){
      hour++;
      HourHeading.innerHTML=hour;
      min=0;
     }

}


function Start(){
 interval=setInterval(StartTimer,10) 
 start.disabled = true;
 pause.disabled = false;
 reset.disabled = false;
}

function Pause(){
  clearInterval(interval);
  pause.disabled = true;
  start.disabled = false;
  reset.disabled = false; 
}

function ResetButton(){
 hour=0;
 min=0;
 sec=0;
 msec=0;
 
 HourHeading.innerHTML=hour;
 MinHeading.innerHTML=min;
 SecHeading.innerHTML=sec;
 MsecHeading.innerHTML=msec;
 reset.disabled= true;
 pause.disabled= false;
 pause();
}