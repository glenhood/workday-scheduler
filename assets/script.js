var today = moment();
var getHour = today.hours();
console.log(getHour)
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log("this should be todays date")
var saveButton = $(".saveBtn");

function cssUpdate() {
    $(".time-block").each(function(){
        var divId = $(this).attr("id")
        if (divId < getHour) {
            $(this).addClass("past")
    
        }
        else if (divId == getHour) {
            $(this).removeClass("past future")
            $(this).addClass("present")

        }else{ 
            $(this).removeClass("past present")
            $(this).addClass("future")
        }
    })
}
cssUpdate();

$(saveButton).on("click", function() {
    var textValue = $(this).siblings(".textValue").val()
    var parentDivKey = $(this).parent().attr("id")

    window.localStorage.setItem(parentDivKey, textValue)
})

$("#0 .textValue").val(window.localStorage.getItem("0"))
$("#1 .textValue").val(window.localStorage.getItem("0"))
$("#2 .textValue").val(window.localStorage.getItem("0"))
$("#3 .textValue").val(window.localStorage.getItem("0"))
$("#4 .textValue").val(window.localStorage.getItem("0"))
$("#5 .textValue").val(window.localStorage.getItem("0"))
$("#6 .textValue").val(window.localStorage.getItem("0"))
$("#7 .textValue").val(window.localStorage.getItem("0"))
$("#8 .textValue").val(window.localStorage.getItem("0"))
$("#9 .textValue").val(window.localStorage.getItem("0"))
$("#10 .textValue").val(window.localStorage.getItem("0"))
$("#11 .textValue").val(window.localStorage.getItem("0"))
$("#12 .textValue").val(window.localStorage.getItem("0"))
$("#13 .textValue").val(window.localStorage.getItem("0"))
$("#14 .textValue").val(window.localStorage.getItem("0"))
$("#15 .textValue").val(window.localStorage.getItem("0"))
$("#16 .textValue").val(window.localStorage.getItem("0"))
$("#17 .textValue").val(window.localStorage.getItem("0"))
$("#18 .textValue").val(window.localStorage.getItem("0"))
$("#19 .textValue").val(window.localStorage.getItem("0"))
$("#20 .textValue").val(window.localStorage.getItem("0"))
$("#21 .textValue").val(window.localStorage.getItem("0"))
$("#22 .textValue").val(window.localStorage.getItem("0"))
$("#23 .textValue").val(window.localStorage.getItem("0"))

// ``md
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```