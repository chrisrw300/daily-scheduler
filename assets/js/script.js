var scheduleItems = {};

//moment.js date/time
var m = moment().format("dddd, MMMM do YYYY, h:mm:ss a");
$("#currentDay").append(m);

//edit the block
$(".desription").on("click", "textarea", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("textarea")
        .val(text);

    $(this).replaceWith(textInput);
    
    textInput.trigger("focus");
});

