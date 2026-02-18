---
title: "🎂 Surprise Sanchita!! 🎉"
layout: "single"
---
<canvas id="confetti-canvas"></canvas>
<canvas id="fireworks-canvas"></canvas>

<div id="birthday-page">

<!-- Slideshow -->
<div class="slideshow">
  <img class="slides" src="/bday/PIC1.png">
  <img class="slides" src="/bday/PIC2.png">
  <img class="slides" src="/bday/PIC3.png">
  <img class="slides" src="/bday/PIC4.JPG">
</div>

<h1 class="main-title">Happy Birthday My Love ❤️</h1>
<p class="sub-title">Blow out the candles and make a wish!</p>



<!-- Cake -->
<div class="cake">
  <div class="plate"></div>

  <div class="layer layer-bottom"></div>
  <div class="layer layer-middle"></div>
  <div class="layer layer-top"></div>

  <div class="icing"></div>

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
