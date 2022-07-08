
var todaysDate = moment().format("dddd, MMM Do YYYY")

$("#currentDay").html(todaysDate)

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");
        var userText = $(this).siblings(".description").val()
 
        localStorage.setItem(time, userText);
        console.log(this);
    })

    function realTimeEvents() {
        var currentTime = moment().hour();
        $(".time-blank").each(function () {
            var blankTime = parseInt($(this).attr("class").split("hour")[1]);
            if (blankTime < currentTime) {
                $(this).removeClass("time-blank")
                $(this).addClass("past")
            }
            else if (blankTime === currentTime) {
                $(this).removeClass("time-blank")
                $(this).addClass("present")
            }
            else {
                $(this).removeClass("time-blank")
                $(this).addClass("future")
            }
        })
    }
    $("#9AM .description").val(localStorage.getItem("9AM"))
    $("#10AM .description").val(localStorage.getItem("10AM"))
    $("#11AM .description").val(localStorage.getItem("11AM"))
    $("#12PM .description").val(localStorage.getItem("12PM"))
    $("#1PM .description").val(localStorage.getItem("1PM"))
    $("#2PM .description").val(localStorage.getItem("2PM"))
    $("#3PM .description").val(localStorage.getItem("3PM"))
    $("#4PM .description").val(localStorage.getItem("4PM"))
    $("#5PM .description").val(localStorage.getItem("5PM"))
    realTimeEvents()
})