const addZero = (number) => {
    if (number < 10) {
      return number = "0" + number
    }
    return number;
  }
  
function updateClock() {
    const digitalClock = document.getElementById('clock');
    const now = new Date();
    const hours = addZero(now.getHours()); // 12-hour format
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());
    const clock = `${hours}:${minutes}:${seconds}`;
    digitalClock.innerHTML = clock;

}

setInterval(updateClock, 1000);
updateClock();
