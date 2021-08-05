#!/usr/bin/env node

/**
 * Output one year of sunrise, sunset and hours of daylight in CSV format.
 *
 * @author David Horton - https://github.com/DavesCodeMusings
 * @requires suncalc
 *
 * To use:
 *  npm install suncalc
 *  node daylight.js
 */

// Adjust LONGITUDE and LATITUDE below for your geographic location.
// Wikipedia has coordinates for most major cities.
const LONGITUDE = 43.13;
const LATITUDE = 89.33;

// No modifications are need below this line.
const SunCalc = require('suncalc');

/**
 * Output one year of sunrise, sunset times with daylight hours as CSV.
 * Format is: month,date,leapYear,sunrise,sunset,daylight_hours
 * @param {boolean or integer} leapYear - either true/false or 1/0.
 */
function daylightCalendar(leapYear) {
  if (leapYear) {
    var startDate = new Date('2020-01-01');
    var endDate = new Date('2020-12-31');
  }
  else {
    var startDate = new Date('2021-01-01');
    var endDate = new Date('2021-12-31');
  }

  // Generate sunrise, sunset, and total daylight hours in CSV format.
  for (let d = startDate; d < endDate; d.setDate(d.getDate() + 1)) {
    let sunTimes = SunCalc.getTimes(d, LONGITUDE, LATITUDE);
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let sunrise = sunTimes.sunrise.toISOString().split('T')[1].split('.')[0];
    let sunset = sunTimes.sunset.toISOString().split('T')[1].split('.')[0];
    let daylight_hours = ((sunTimes.sunset - sunTimes.sunrise) / 3600000).toFixed(2);

    console.log(`${month},${date},${leapYear},${sunrise},${sunset},${daylight_hours}`);
  }
}

// Output headings for columns to make database importing easier.
console.log('month,date,leapYear,sunrise,sunset,daylight_hours');

// Generate non-leap year and leap year calendars.
daylightCalendar(0);
daylightCalendar(1);
