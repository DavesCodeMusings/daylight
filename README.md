# daylight
Generate one year of sunrise, sunset, and total daylight hours as well as one leap year. Originally created for
comparison with solar inverter output, but probably has additional uses. Output is in CSV format for easy import
into a database of LibreOffice Calc / MS Excel sheet.

Times are in Universal Time (GMT) regardless of your local settings.

## Prerequisite
`npm install suncalc`

Edit daylight.js to set the latitude and longitude for your location.

## Usage
`node daylight.js`

## Example Output
month,date,leapYear,sunrise,sunset,daylight_hours
1,1,0,01:35:41,10:38:55,9.05
1,2,0,01:35:44,10:39:46,9.07
1,3,0,01:35:45,10:40:40,9.08
1,4,0,01:35:44,10:41:35,9.10
1,5,0,01:35:40,10:42:32,9.11
1,6,0,01:35:33,10:43:31,9.13
1,7,0,01:35:25,10:44:31,9.15
1,8,0,01:35:13,10:45:33,9.17
1,9,0,01:35:00,10:46:36,9.19
1,10,0,01:34:44,10:47:41,9.22
1,11,0,01:34:26,10:48:47,9.24
1,12,0,01:34:05,10:49:54,9.26
1,13,0,01:33:42,10:51:03,9.29
1,14,0,01:33:17,10:52:13,9.32
1,15,0,01:32:49,10:53:23,9.34
...
