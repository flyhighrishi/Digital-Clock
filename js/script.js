const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date=new Date();
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
console.log(date);
console.log("Hr="+hr+" Min="+min+" Sec="+sec);


let hrposition=hr*360/12+(min*(360/60)/60);
let minposition=(min*360/60)+(sec*(360/60)/60);
let secposition=sec*360/60;
console.log(date);
function runtheclock(){
    hrposition=hrposition+(3/360);
    minposition=minposition+(1/10);
    secposition=secposition+6;
    HOURHAND.style.transform = "rotate(" + hrposition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minposition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secposition + "deg)";
};

var interval = setInterval(runtheclock,1000);