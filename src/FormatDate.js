import React from "react";

export function formatDate(givenDate) {
  // let days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday"
  // ];
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

  //let day = days[givenDate.getDay()];
  let month = months[givenDate.getMonth()];
  let date = givenDate.getDate();
  let year = givenDate.getFullYear();
  //let hours = givenDate.getHours();
  //let minutes = givenDate.getMinutes();

  return month + " " + date + ", " + year;
}

console.log(formatDate(new Date("2022/06/07")));
console.log(formatDate(new Date()));
