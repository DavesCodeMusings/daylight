# daylight
Output sunrise, sunset, and total daylight hours in CSV fomat.

## Prerequisite
`npm install suncalc`

Edit daylight.js to set the latitude and longitude for your location.

## Usage
`node daylight.js [start date] [end date]`

## Examples
`node daylight.js`

  Output sunrise, sunset, and hours of day light from 365 days ago until today.
  
`node daylight.js 2021-01-01`

  Output sunrise, sunset, and hours of day light from January 1, 2021 until today.

`node daylight.js 2020-10-31 2021-11-01`

  Output sunrise, sunset, and hours of day light from October 31, 2020 to November 1, 2021.
  
## Notes
This was originally created for comparison with solar inverter output, but it probably has additional uses.
