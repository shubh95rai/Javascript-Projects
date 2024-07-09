const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const countdown = document.querySelectorAll(".countdown");
const deadline = document.querySelector(".deadline");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 18, 0, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends on ${day}, ${date} ${month} ${year} ${hour}:0${minute}pm`;

const futureTime = futureDate.getTime();

function remainingTime() {
  const currentTime = new Date().getTime();

  // remaining time
  const t = futureTime - currentTime;

  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }

  countdown.forEach((item, index) => {
    item.textContent = format(values[index]);
  });

  if (t < 0) {
    deadline.innerHTML = `<h1 class="text-lg font-semibold tracking-wider">Giveaway is over!</h1>`;
  }
}

remainingTime();
let timer = setInterval(remainingTime, 1000);
