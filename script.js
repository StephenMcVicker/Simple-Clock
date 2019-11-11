
// * * * * * * * * * *
// * * Elements * * 
// Get the hands
const hoursHand = document.querySelector('[data-hours-hand]');
const minutesHand = document.querySelector('[data-minutes-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');

// Get the text display for the time and day
const timeText = document.querySelector('.time-text');
const dayText = document.querySelector('.day-text');
// * * * * * * * * * *

// Days of the week/Months of the year (used for text display)
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// * * * * * * * * * *

setInterval(() => {
  setClock();
}, 1000);

// Setting and updaing the clock
const setClock = () => {

  // Get the current date
  const currentDate = new Date();

  // Get the rotation for the hands based on the time
  const secondsRotation = currentDate.getSeconds() / 60;
  const minutesRotation = (secondsRotation + currentDate.getMinutes()) / 60;
  const hoursRotation = (minutesRotation + currentDate.getHours()) / 12;

  // Update the hands
  setRotationOfHand(secondsHand, secondsRotation);
  setRotationOfHand(minutesHand, minutesRotation);
  setRotationOfHand(hoursHand, hoursRotation);

  // Update the text display
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  timeText.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  const date = currentDate.getDate();
  const day = currentDate.getDay();
  const month = currentDate.getMonth();
  dayText.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}


// Set the rotation variable in the CSS correctly
const setRotationOfHand = (element, rotation) => {
  element.style.setProperty('--rot', rotation * 360);
}

// * * * * * * * * * *

// Call setClock now to you don't need to wait the interval after the page loads uo update display
setClock();