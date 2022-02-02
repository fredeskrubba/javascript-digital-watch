const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");



function updateClock(){
    let currentDate = new Date();
    if (currentDate.getSeconds() < 10){
        seconds.innerHTML = "0" + currentDate.getSeconds();
    } else {
        seconds.innerHTML = currentDate.getSeconds();
    }
    if (currentDate.getMinutes() < 10){
        minutes.innerHTML = "0" + currentDate.getMinutes();
    } else {
        minutes.innerHTML = currentDate.getMinutes();
    }
    if (currentDate.getHours() < 10){
        hours.innerHTML = "0" + currentDate.getHours();
    } else {
        hours.innerHTML = currentDate.getHours();
    }
    console.log("Hi");
};

window.setInterval(updateClock, 1000);
