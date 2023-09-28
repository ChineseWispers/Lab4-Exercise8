// 1 
let myBirthday = new Date("1990-01-12");
let now = new Date();

diffTotalDays = (now - myBirthday)/(1000 * 60 * 60 * 24);

console.log("1. Number of days between my birth date and now: " + Math.floor(diffTotalDays));

// 2 =================================================

diffYears = Math.floor(diffTotalDays/365);

let diffMonths = now.getMonth() - myBirthday.getMonth();
diffMonths > 0 ? {} : diffMonths += 12;

let diffDays = now.getDate() - myBirthday.getDate();
diffDays > 0 ? {} : diffDays += 31;

console.log(`2. Time between my birth date and now: ${diffYears} years, ${diffMonths} months and ${diffDays} days`);

// 3 =================================================

function returnCloserDate(date1, date2) {
  return Math.abs(date1 - now) > Math.abs(date2 - now) ? date2 : date1;
}

let date1 = new Date("2000-01-01");
let date2 = new Date("2030-01-01");

console.log(`3. Date closer to now is: ${returnCloserDate(date1, date2)}`);

// 4 =================================================

function returnDateOrder(date1, date2) {
  return date1 > date2 ? `4. ${date1} is after ${date2}` : `4. ${date1} is before ${date2}`;
}

console.log(returnDateOrder(date1, date2));

// 5 =================================================

londonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});

console.log(`5. Current time in London is: ${londonTime}`);