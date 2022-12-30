var timeDisplayEl = $('#currentDay')
// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);

function pastPresentFuture() {
  // Get the current hour
  const currentHour = new Date().getHours();
  // Get all of the time-block div
  const timeBlocks = document.querySelectorAll('.time-block');
  // Loop through the time-block div
  timeBlocks.forEach(timeBlock => {
    // Get the hour indicated in the id attribute
    const idHour = parseInt(timeBlock.id.split('-')[1]);
    // Compare the id hour to the current hour
    if (idHour < currentHour) {
      // If the id hour is less than the current hour, add the "past" class
      timeBlock.classList.add('past');
    } else if (idHour === currentHour) {
      // If the id hour is equal to the current hour, add the "present" class
      timeBlock.classList.add('present');
    } else {
      // If the id hour is greater than the current hour, add the "future" class
      timeBlock.classList.add('future');
    }
  });
}
window.onload = function() {
  pastPresentFuture();
};

//Save data to local storage
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time,value);
});

// Get item from local storage if any
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));
