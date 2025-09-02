const clock = document.getElementById("countdown-clock");

const countDownDate = new Date("2025-10-01T05:01:00.000Z").getTime();

let countdownTimer = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = padNum(Math.floor(distance % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24)));
  let hours = padNum(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  let minutes = padNum(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  let seconds = padNum(Math.floor((distance % (1000 * 60)) / 1000));

  clock.innerText = `${days}:${hours}:${minutes}:${seconds}`;

  if (distance < 0) {
    clearInterval(countdownTimer);
    clock.innerText = "Registation will begin shortly";
  }
}, 1000);

function padNum(n) {
    return (n < 10) ? ("0" + n) : n;
}

