let year = parseInt(prompt('Input the year to check'))
let isLeapYear = false

if (year % 100 == 0 && year % 400 == 0) {
    alert(year + ' is a leap year')
} else if (year % 100 != 0 && year % 4 == 0) {
    alert(year + ' is a leap year')
} else alert(year + ' is NOT a leap year')
