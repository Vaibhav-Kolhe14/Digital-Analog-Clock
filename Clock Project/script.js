

function updateClockAndColor() {
    updateClock();
    changeColor.style.backgroundColor = getcolor();
  }
  
  function updateClock() {
    const current = new Date();
    const hours = current.getHours() % 12 || 12;
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();
  
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;
  
    rotateLine(document.getElementById("hourLine"), hourAngle, hours);
    rotateLine(document.getElementById("minuteLine"), minuteAngle, minutes);
    rotateLine(document.getElementById("secondLine"), secondAngle, seconds);
  }
  
  function rotateLine(element, angle, value) {
    element.style.transform = `rotate(${angle}deg)`;
  
    const clockNumbers = element.querySelectorAll(".clock_number");
    clockNumbers.forEach(clockNumber => {
      clockNumber.innerHTML = value;
      clockNumber.style.transform = `rotate(${-angle}deg)`;
    });
  }
  
  function getcolor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`;
  }
  
  
  let changeColor = document.querySelector(".container");
  
  
  updateClockAndColor();
  
  setInterval(updateClockAndColor, 1000);
  
