//prepares the document and css
$().ready(function () {
    var currentDay = moment().format("ddd, MMMM Do YYYY");
    var currentTime = moment().format("h:mm:ss a");
    $("#currentDay").append(currentDay);
    $("#currentTime").append(currentTime);

    //loads from local storage for each hour
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    //when clicked, saves what is typed in textarea
    $(".saveBtn").on("click", function () {
        //gets value and id of textarea & time
        var scheduleText = $(this).siblings(".description").val();
        var scheduleTime = $(this).parent().attr("id");

        localStorage.setItem(scheduleTime, scheduleText);
    })

    //track real time vs scheudle time
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
})

