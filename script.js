const startTarget = new Date("Feb 20, 2026 08:00:00").getTime();
const endTarget = new Date("Mar 1, 2026 12:00:00").getTime();

const timerElement = document.getElementById("timer");
const labelElement = document.getElementById("countdown-label");

const updateTimer = setInterval(function() {
  const now = new Date().getTime();
  let target, message;

  if (now < startTarget) {
    target = startTarget;
    message = "Soutěž začíná za:";
  } else if (now < endTarget) {
    target = endTarget;
    message = "Soutěž končí za:";
  } else {
    clearInterval(updateTimer);
    labelElement.innerHTML = "Soutěž již skončila.";
    timerElement.innerHTML = "";
    return;
  }

  const distance = target - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  labelElement.innerHTML = message;
  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);