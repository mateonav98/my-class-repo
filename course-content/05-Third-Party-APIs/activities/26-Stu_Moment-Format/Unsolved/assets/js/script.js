// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment()
$("#1a").text(gradDate.format("6/13/22", "MMM Do, YYYY"));

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay=moment("1/1/22")
$("#2a").text(weekDay.format("[1/1/22 was] dddd"));

// TODO: 3. Out of 365, what day of the year is today?
var now=moment();
$("#3a").text(now.format("DDD"));

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time=moment().format("h:mm:ss a zz");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment("4/6/22");
$("#5a").text(unix.format("X"));

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat;
$("#6a").text(unixFormat);

