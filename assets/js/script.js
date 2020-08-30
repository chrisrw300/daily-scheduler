var currentDay = moment().format("ddd, MMMM Do YYYY");
var currentTime = moment().format("h:mm:ss a");
$("#currentDay").append(currentDay);
$("#currentTime").append(currentTime);
