// Slideshow
let slideIndex = 0;
showSlides("slides");

let partyStarted = false;

function startParty() {
  if (partyStarted) return;
  partyStarted = true;

  startConfetti();
  startFireworks();
}

function startConfetti() {
   confettiInterval = setInterval(drawConfetti, 20);
}

function startFireworks() {
  fireworkInterval = setInterval(() => {

    const x = Math.random() * fwCanvas.width;
    const y = Math.random() * fwCanvas.height / 2;

    createFirework(x, y);

    // 🎈 Launch 2 balloons with each firework
    createBalloon();
    setTimeout(createBalloon, 300);

  }, 1500);
}



function showSlides(className) {
  let index = 0;
  const slides = document.getElementsByClassName(className);

  function showNextSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    index++;
    if (index > slides.length) index = 1;

    slides[index - 1].style.display = "block";

    setTimeout(showNextSlide, 3000);
  }

  showNextSlide();
}

// Blow Candle
function blowCandle(candle) {
  const flame = candle.querySelector(".flame");
  flame.style.animation = "none";
  flame.style.opacity = "0";

if (document.querySelectorAll(".flame[style*='opacity: 0']").length === 
    document.querySelectorAll(".flame").length) {

  setTimeout(() => {
    alert("Make a wish ❤️");
    startParty();
  }, 500);
}

}


// Party Popper
function partyTime() {

  // Launch balloons
  for (let i = 0; i < 8; i++) {
    setTimeout(createBalloon, i * 300);
  }

  // Confetti explosion
  const colors = ["#ff4d6d", "#ffbe0b", "#3a86ff", "#8338ec", "#06d6a0"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    const x = (Math.random() - 0.5) * 800 + "px";
    const y = (Math.random() - 0.5) * 600 + "px";

    confetti.style.setProperty("--x", x);
    confetti.style.setProperty("--y", y);

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1500);
  }


}

//Balloons

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  const shine = document.createElement("span");
  balloon.appendChild(shine);

  const colors = ["#ff4d6d", "#ffbe0b", "#3a86ff", "#8338ec", "#06d6a0"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.animationDuration = (6 + Math.random() * 4) + "s";

  document.body.appendChild(balloon);

  setTimeout(() => balloon.remove(), 10000);
}

const confettiCanvas = document.getElementById("confetti-canvas");
const confettiCtx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 200; i++) {
  confetti.push({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 200,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 10
  });
}

function drawConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confetti.forEach(c => {
    confettiCtx.beginPath();
    confettiCtx.fillStyle = c.color;
    confettiCtx.ellipse(c.x, c.y, c.r, c.r / 2, c.tilt, 0, Math.PI * 2);
    confettiCtx.fill();
  });

  updateConfetti();
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += Math.cos(c.d) + 2;
    c.x += Math.sin(0.01 * c.d);

    if (c.y > confettiCanvas.height) {
      c.y = -10;
      c.x = Math.random() * confettiCanvas.width;
    }
  });
}



const fwCanvas = document.getElementById("fireworks-canvas");
const fwCtx = fwCanvas.getContext("2d");

fwCanvas.width = window.innerWidth;
fwCanvas.height = window.innerHeight;

function createFirework(x, y) {
  let particles = [];

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: x,
      y: y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 5 + 2,
      radius: 2,
      alpha: 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }

function animate() {
  fwCtx.globalCompositeOperation = "destination-out";
fwCtx.fillStyle = "rgba(0,0,0,0.2)";
fwCtx.fillRect(0, 0, fwCanvas.width, fwCanvas.height);
fwCtx.globalCompositeOperation = "lighter";


  particles.forEach(p => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.02;

    if (p.alpha <= 0) return;

    fwCtx.beginPath();
    fwCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    fwCtx.fillStyle = p.color;
    fwCtx.globalAlpha = p.alpha;
    fwCtx.fill();
  });

  fwCtx.globalAlpha = 1;

  if (particles.some(p => p.alpha > 0)) {
    requestAnimationFrame(animate);
  }
}


  animate();
}


