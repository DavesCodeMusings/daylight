#!/usr/bin/env node

// daylight - output sunrise, sunset and hours of daylight in CSV format.
//
// To use:
//   npm install suncalc
//   node daylight.js [start date] [end date]

// Adjust LONGITUDE and LATITUDE below for your geographic location.
// Wikipedia has coordinates for most major cities.
const LONGITUDE = 43.13;
const LATITUDE = 89.33;

// No modifications are need below this line.
const SunCalc = require('suncalc');

// Get optional start/stop dates as command-line parameters.
if (process.argv.length >= 3) {
  if (process.argv[2].match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)) {
    requestedStartDate = process.argv[2];
  }
  else {
    console.error(`Invalid start date format: '${process.argv[2]}'. Use YYYY-MM-DD instead.`);
    process.exit(1);
  }
}
if (process.argv.length == 4) {
  if (process.argv[3].match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)) {
    requestedEndDate = process.argv[3];
  }
  else {
    console.error(`Invalid end date format: '${process.argv[3]}'. Use YYYY-MM-DD instead.`);
    process.exit(1);
  }
}

// Users can give a start date and an end date, a start date, or nothing.
// Default start is 365 days prior to today. Default end is today's date.
if (typeof requestedEndDate !== 'undefined') {
  var endDate = new Date(requestedEndDate);
}
else {
  var endDate = new Date();
}
if (typeof requestedStartDate !== 'undefined') {
  var startDate = new Date(requestedStartDate);
}
else {
  var startDate = new Date();
  startDate.setDate(endDate.getDate() - 365);
}

// Output headings for columns to make database importing easier.
console.log('date,sunrise,sunset,daylight_hours');

// Generate sunrise, sunset, and total daylight hours in CSV format.
for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
  let sunTimes = SunCalc.getTimes(d, LONGITUDE, LATITUDE);
  let date = d.toISOString().split('T')[0];
  let sunrise = sunTimes.sunrise.toISOString().split('T')[1].split('.')[0];
  let sunset = sunTimes.sunset.toISOString().split('T')[1].split('.')[0];
  let daylight_hours = ((sunTimes.sunset - sunTimes.sunrise) / 3600000).toFixed(2);

  console.log(`${date},${sunrise},${sunset},${daylight_hours}`);
}
