<script setup>
import Service from "./Service.vue";
import AboutUs from "./AboutUs.vue";
import Slider from "./Slider.vue";
import Contact from "./Contact.vue";
</script>

<template>
  <div class="home-wrapper">
    <div class="home-container">
      <div class="home-desc">
        <h1 class="title waviy">
          <span style="--i: 1">D</span>
          <span style="--i: 2">a</span>
          <span style="--i: 3">n</span>
          <span style="--i: 4">d</span>
          <span style="--i: 5">e</span>
          <span style="--i: 6">n</span>
          <span style="--i: 7">o</span>
          <span style="--i: 8">n</span>
          <span style="--i: 9">g</span> Automotive Centre
        </h1>
        <p class="text-desc">
          DAC Automotive Centre offers expert bumper repairs, dent removals,
          panel beating, <br />
          and more, ensuring your vehicle receives top-notch care and
          restoration.
        </p>
        <router-link to="/contact"> <button>Contact Us</button> </router-link>
      </div>
    </div>
    <Slider />
    <Service />
    <AboutUs />
    <Contact />
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  height: 81vh;
  width: 100%;
  margin: 0 auto;
  background-image: url(../assets/ser.jpg);
  position: relative;
}

.home-desc {
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding-left: 10%;
  gap: 20px;
}

button {
  background: #84bd3a;
  color: white;
  border: none;
  outline: none;
  padding: 14px 20px;
  width: 125px;
  border-radius: 2px;
  transition: all 0.2s ease-out;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
button:hover {
  color: #153447;
  background: #fff;
  font-weight: 600;
}
/* animation */
.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  color: #fff;
  animation: flip 2s infinite;
  animation-delay: calc(0.2s * var(--i));
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}
@media only screen and (max-width: 580px) {
  .title {
    font-size: 24px;
  }
  .text-desc {
    font-size: 14px;
  }
  button {
    padding: 11px 15px;
    width: 110px;
    font-size: 13px;
  }
}
</style>
