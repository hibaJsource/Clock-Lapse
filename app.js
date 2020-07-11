var min=00;
var sec=00;
var milisec=00;

var minHeading=document.getElementById("minutes");
var secHeading=document.getElementById("seconds");
var milisecHeading=document.getElementById("milisec");

var interval;
function timer(){
    milisec++;
    milisecHeading.innerHTML=milisec;
    if (milisec>=100){
        sec++;
        secHeading.innerHTML=sec;
        milisec=00;
    }else if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=00
    }
}

function start(){
    interval=setInterval(timer,10);
    document.getElementById("start").disabled=true;
}
function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled=false;
}
function reset(){
    min="00";
    sec="00";
    milisec="00";
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    milisecHeading.innerHTML=milisec;
    stop();
    document.getElementById("start").disabled=false;
}