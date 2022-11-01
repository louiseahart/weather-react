export function formatTime(givenDate) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = padWithZero(days[givenDate.getDay()]);
  let hours = padWithZero(givenDate.getHours());
  let minutes = padWithZero(givenDate.getMinutes());

  return day + " " + hours + ":" + minutes;
}

export function formatWeekday(givenDate) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemble",
    "October",
    "November",
    "December",
  ];

  let day = padWithZero(days[givenDate.getDay()]);
  let month = months[givenDate.getMonth()];
  let date = givenDate.getDate();

  return day + " " + month + " " + date;
}

function padWithZero(number) {
  return String(number).padStart(2, "0");
}

console.log(formatTime(new Date("2022/06/07")));
console.log(formatTime(new Date()));

// let dateDiv = document.querySelector(".date");
// dateDiv.innerHTML = formatDate(new Date());

// let timeDiv = document.querySelector(".time");
// timeDiv.innerHTML = formatTime(new Date());
