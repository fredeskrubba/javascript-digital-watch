const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");
const amOrPm = document.querySelector("h2");

// Define current time and set the html to it so the clock doesn't start at 00:00:00
currentDate = new Date();
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
if (currentDate.getHours() >= 12){
    amOrPm.innerHTML = "PM";
}

// Function that updates the clock in real time
function updateClock(){
    currentDate = new Date();
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
    if (currentDate.getHours() >= 12){
        amOrPm.innerHTML = "PM";
    }
};

// call the function every second
window.setInterval(updateClock, 1000);