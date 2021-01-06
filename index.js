const hour = document.getElementById("hour");  
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(clock, 1000)

function clock(){

    let date = new Date();
    let h = date.getHours() / 12;
    let m = date.getMinutes() / 60;
    let s = date.getSeconds() / 60;
    
    hour.style.transform = "rotate(" + (h * 360) + "deg)";
    min.style.transform = "rotate(" + (m * 360) + "deg)";
    sec.style.transform = "rotate(" + (s * 360) + "deg)";
}

clock() 

