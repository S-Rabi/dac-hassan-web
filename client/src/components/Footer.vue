<script setup>
import { onMounted, ref } from "vue";
import { database } from "../data/database";

const PHONENUMBER = "0387538380";
const email = "dac.au@yahoo.com";
const locationName = "Dandenong Automotive Centre";

const phoneLink = `tel:${PHONENUMBER}`;
const emailLink = `mailto:${email}`;
const googleMapsLink =
  "https://www.google.com/maps/place/Dandenong+Automotive+Centre/@-37.9869987,145.1999741,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad614755f8a6a7d:0xb6e05a2026615f1e!8m2!3d-37.987003!4d145.202549!16s%2Fg%2F11bwymdk2w?entry=ttu";

const data = ref([]);
const fetchData = () => {
  try {
    data.value = database;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};
onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="footer-wrapper">
    <div class="contact">
      <div class="c-info">
        <a :href="phoneLink">
          <i class="fa-solid fa-phone"></i> {{ PHONENUMBER }}</a
        >
      </div>
      <div class="c-info">
        <a :href="emailLink"
          ><i class="fa-solid fa-envelope"></i> {{ email }}</a
        >
      </div>
      <div class="c-info">
        <a :href="googleMapsLink" target="_blank"
          ><i class="fa-solid fa-location-dot"></i> {{ locationName }}</a
        >
      </div>
    </div>
    <div class="footer">
      <div class="top">
        <div class="text">
          <h3>DAC</h3>
          <p>
            DAC offers expert bumper repairs, dent removals, panel beating, and
            more, ensuring your vehicle receives top-notch care and restoration.
          </p>
        </div>
        <div class="text">
          <h3>Our Services</h3>
          <div class="map-title" v-for="sec in data" :key="sec.id">
            <p>{{ sec.title }}</p>
          </div>
        </div>
        <div class="text">
          <h3>Services Hours</h3>
          <p>Monday – Friday: 8 am – 5 pm</p>
          <p>Saturday-Sunday: BY APPOINTMENT</p>
        </div>
      </div>

      <div class="wrapper">
        <div class="bottom">
          <p class="text text-footer">Copyright © 2024 All rights reserved.</p>
          <div class="text social">
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  font-size: 14px;
  color: white;
  background: #153447;
}
.top {
  margin: 0 auto;
  padding: 20px 10px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  gap: 20px;
  font-weight: 300;
  box-shadow: rgba(36, 169, 140, 0.06) 0px 2px 4px 0px inset;
}
.top h3 {
  margin: 7px 0;
}
.wrapper {
  width: 100%;
  /* background: linear-gradient(90deg, #ffffff, #ece9e6); */
  background: rgb(240, 237, 235);
  background: linear-gradient(
    90deg,
    rgba(240, 237, 235, 1) 21%,
    rgba(255, 255, 255, 1) 70%
  );
}
.bottom {
  margin: 0 auto;
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  color: #153447;
  max-width: 1280px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
}

.text {
  flex-grow: 1;
  flex-basis: 250px;
}
.social {
  display: flex;
  justify-content: space-around;
  max-width: 110px;
  cursor: pointer;
}

a i {
  transition: all 0.2s linear;
  color: #153447;
}

a:hover i {
  transform: scale(1.5);
}
.fa-instagram:hover {
  color: #f56040;
}
.fa-twitter:hover {
  color: #00acee;
}
.fa-facebook-f:hover {
  color: rgb(8, 102, 255);
}
.fa-tiktok:hover {
  color: #040000;
}
/* contact */
.contact {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 4px;
  max-width: 1280px;
  margin: 20px auto;
  margin-bottom: 0;
  transform: translate(0, 20px);
}
.c-info {
  display: flex;
  flex-grow: 1;
  flex-basis: 400px;
  align-items: center;
  padding: 40px 20px;
  background: #84bd3a;
  color: white;
}
.c-info a {
  color: white;
  text-decoration: none;
}
.c-info i {
  color: white;
  margin-right: 5px;
}
.c-info a:hover i {
  transform: scale(1);
}
@media only screen and (max-width: 768px) {
  .c-info {
    gap: 10px;
    padding: 28px 15px;
  }
  .text {
    font-size: 14px;
  }
}
@media only screen and (max-width: 580px) {
  .text {
    font-size: 13px;
  }
}
@media only screen and (max-width: 380px) {
  .text {
    font-size: 12px;
  }
  .text-footer {
    text-align: center;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
}
</style>
