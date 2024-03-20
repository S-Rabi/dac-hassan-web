<script setup></script>

<template>
  <div class="slider">
    <div class="slide-track">
      <img src="../assets/honda.svg" class="slide" />
      <img src="../assets/Infinit.svg" class="slide" />
      <img src="../assets/audi.svg" class="slide" />
      <img src="../assets/benz.svg" class="slide" />
      <img src="../assets/bmw.svg" class="slide" />
      <img src="../assets/byton.svg" class="slide" />
      <img src="../assets/kia.svg" class="slide" />
      <img src="../assets/ford.svg" class="slide" />
      <img src="../assets/suzuki.svg" class="slide" />
      <img src="../assets/opel.svg" class="slide" />
      <img src="../assets/jeep.svg" class="slide" />
      <img src="../assets/hyundai.svg" class="slide" />
      <img src="../assets/lamborghini.svg" class="slide" />
      <img src="../assets/lexus.svg" class="slide" />
      <img src="../assets/mazda.svg" class="slide" />
      <img src="../assets/nissan.svg" class="slide" />
      <img src="../assets/Isuzu.svg" class="slide" />
      <img src="../assets/ferrari.svg" class="slide" />
      <img src="../assets/toyota.svg" class="slide" />
      <img src="../assets/volvo.svg" class="slide" />
      <img src="../assets/tesla.svg" class="slide" />
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 100%;
  height: 100px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: rgb(240, 237, 235);
  background: linear-gradient(
    90deg,
    rgba(240, 237, 235, 1) 21%,
    rgba(255, 255, 255, 1) 70%
  );
}

.slide-track {
  width: calc(150px * 20);
  display: flex;
  animation: scroll 300s linear infinite;
  justify-content: space-between;
}

.slide {
  width: 100px;
  display: grid;
  place-items: center;
  transition: 0.5s;
}

@keyframes scroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(calc(-150px * 10));
  }
}
</style>
