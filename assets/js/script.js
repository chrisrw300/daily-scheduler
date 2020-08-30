var currentDay = moment().format("ddd, MMMM Do YYYY");
var currentTime = moment().format("h:mm:ss a");
$("#currentDay").append(currentDay);
$("#currentTime").append(currentTime);


function timeTracker() {
    //get current number of hours.
    var realTime = moment().hour();

    //splits time blocks to 
    $(".time-block").each(function () {
        var scheduleHour = parseInt($(this).attr("id").split("hour-")[1]);

        //if block of time is less than the current hour, change class to past
        if (scheduleHour < realTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        //if block of time equals the current hour, change class to present
        else if (scheduleHour === realTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        //if block of time more than the current hour, change class to past
        else if (scheduleHour > realTime) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
timeTracker();