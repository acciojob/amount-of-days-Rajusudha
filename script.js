//your JS code here. If required.
function daysOfAYear(year) {
  if (isLeapYear(year)) {
    return 366;
  } else {
    return 365;
  }
}

// Helper function to check if a year is a leap year
function isLeapYear(year) {
  // Leap years are divisible by 4, but not divisible by 100 unless they are also divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Examples
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366
