let second = document.querySelector(".second");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
function runClock(){
    let date = new Date();
    let hours = date.getHours();
    if(hours > 12){
        hours = hours - 12;
    };
    let minute = date.getMinutes();
    let second = date.getSeconds();

    runClockNiddle(hours, minute,second);
}
setInterval("runClock()", 1000)

function runClockNiddle(hours,minutes,seconds){
    let runSecond = (seconds * 6);
    second.style.cssText += `transform: rotate(${runSecond}deg)`;

    let runHour = (hours * 30);
    hour.style.cssText += `transform: rotate(${runHour}deg)`;

    let runMinute = minutes * 60;
    minute.style.cssText += `transform: rotate(${runMinute}deg)`
}
ok.addEventListener("click", () =>{
    window.open("./https/www.facebook.com")
})