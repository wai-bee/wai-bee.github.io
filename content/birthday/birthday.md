---
title: "🎂 Surprise!! 🎉"
layout: "single"
---
<canvas id="confetti-canvas"></canvas>
<canvas id="fireworks-canvas"></canvas>

<div id="birthday-page">

<!-- Slideshow -->
<div class="slideshow">
  <img class="slides" src="/bday/PIC0.png">
  <img class="slides" src="/bday/PIC1.png">
  <img class="slides" src="/bday/PIC2.png">
  <img class="slides" src="/bday/PIC3.png">
  <img class="slides" src="/bday/PIC4.JPG">
  <img class="slides" src="/bday/PIC5.png">
  <img class="slides" src="/bday/PIC6.png">
  <img class="slides" src="/bday/PIC7.png">
</div>

<h1 class="main-title">❤️ Happy Birthday Lovie ❤️</h1>
<p class="sub-title" id="wish-message">Blow out the candles and make a wish! 🎂</p>



<!-- Cake -->
<div class="cake">
  <img src="/bday/birthdaycake.png" class="cake-img">
  
  <div class="candles">
    <div class="candle" onclick="blowCandle(this)">
      <div class="flame"></div>
    </div>
    <div class="candle" onclick="blowCandle(this)">
      <div class="flame"></div>
    </div>
    <div class="candle" onclick="blowCandle(this)">
      <div class="flame"></div>
    </div>
  </div>
</div>


</div>

<link rel="stylesheet" href="/css/birthday.css">
<script src="/js/birthday.js"></script>
