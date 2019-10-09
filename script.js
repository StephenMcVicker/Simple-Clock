setInterval(() => {
  setClock();
}, 1000);


// Get the hands
const hoursHand = document.querySelector('[data-hours-hand]');
const minutesHand = document.querySelector('[data-minutes-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');

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
}

const setRotationOfHand = (element, rotation) => {
  element.style.setProperty('--rot', rotation * 360);
}

// Call setClock now to you don't need to wait the interval after the page loads uo update display
setClock();