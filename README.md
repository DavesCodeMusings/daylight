# daylight
Output sunrise, sunset, and total daylight hours in CSV fomat.

## Prerequisite
`npm install suncalc`

Edit daylight.js to set the latitude and longitude for your location.

## Usage
`node daylight.js [start date] [end date]`

## Examples
To output sunrise, sunset, and hours of day light from 365 days ago until today:

`node daylight.js`
  
To output sunrise, sunset, and hours of day light from January 1, 2021 until today:

`node daylight.js 2021-01-01`

To output sunrise, sunset, and hours of day light from October 31, 2020 to November 1, 2021:

`node daylight.js 2020-10-31 2021-11-01`

## Notes
This was originally created for comparison with solar inverter output, but it probably has
additional uses. Output is in CSV format for easy import into a database of LibreOffice
Calc / MS Excel sheet.
