const day = document.getElementById("day")
const weekday = document.getElementById("weekday")
const month = document.getElementById("month")
const year = document.getElementById("year")
const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June ', 'July', 'August', 'September', 'October', 'November', 'December' ]
const weekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday ', 'Saturday']
const currentTime = new Date();
console.log(currentTime);

day.innerHTML = (currentTime.getDate() <10 ? "0" : "") + currentTime.getDate();
weekday.innerHTML = weekArr[currentTime.getDay()];
month.innerHTML = monthsArr[currentTime.getMonth()];
year.innerHTML = currentTime.getFullYear();