// Get the current date and time
var currentDate = new Date();

// Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
var dayOfWeek = currentDate.getDay();

// Array to map day of the week index to day names
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current day name using the day of the week index
var dayName = days[dayOfWeek];

// Get the current time in 24-hour format (HH:MM:SS)
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Add leading zero if single digit
hours = (hours < 10 ? "0" : "") + hours;
minutes = (minutes < 10 ? "0" : "") + minutes;
seconds = (seconds < 10 ? "0" : "") + seconds;

// Concatenate date and time information
var dateTimeString = dayName + " " + hours + ":" + minutes + ":" + seconds;

// Display the current day and time
console.log(dateTimeString);
console.log(currentDate);