<template>
  <div class="service">
    <div class="service-desc">
      <h2 class="service-title">Our services</h2>
      <p class="service-details">
        DAC Automotive Centre offers expert bumper repairs, dent removals, panel
        beating, <br />
        and more, ensuring your vehicle receives top-notch care and restoration.
      </p>
    </div>
    <br />
    <div class="about-us">
      <div class="card" v-for="item in data" :key="item.id">
        <img :src="item.imgUrl" alt="" />
        <div class="card-content">
          <h2 class="card-title">{{ item.title }}</h2>
          <p>{{ item.details.split(" ").slice(0, 22).join(" ") }}...</p>
          <router-link
            :to="{ name: 'CardDetail', params: { id: item.id } }"
            class="button"
          >
            More details <span> > </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { database } from "../data/database";

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

<style scoped>
.service {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 65px;
}
.about-us {
  display: flex;
  flex-wrap: wrap;
}
.service-desc {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}
.service-title {
  padding: 10px 20px;
  font-size: 20px;
  flex: 1;
}
.service-details {
  font-size: 16px;
  flex: 1;
  /* background: #84bd3a; */
  padding: 10px;
  /* transform: translate(20px, -40px); */
}
.card {
  width: 330px;
  height: 410px;
  border-radius: 9px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: whitesmoke;
  margin: 10px auto;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
}

.card img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 0.2s ease-out;
}

.card-title {
  position: absolute;
  inset: auto auto 20px 30px;
  margin: 0;
  transition: inset 0.3s 0.3s ease-out;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
}

.card p,
.card a {
  position: absolute;
  opacity: 0;
  max-width: 85%;
  transition: opacity 0.3s ease-out;
}

.card p {
  inset: auto auto 80px 30px;
}

.card a {
  inset: auto auto 40px 30px;
  color: inherit;
  text-decoration: none;
  background: #84bd3a;
  font-weight: 500;
  color: white;
  padding: 12px 20px;
  transform: translate(0px, 40%);
  border-radius: 2px;
}

.card:hover h2 {
  inset: auto auto 200px 30px;
  transition: inset 0.3s ease-out;
  padding-bottom: 5px;
}

.card:hover p {
  opacity: 1;
  transition: opacity 0.5s 0.1s ease-in;
}

.card:hover a {
  opacity: 1;
  transition: opacity 0.5s 0.1s ease-in;
}

.card:hover img {
  transition: opacity 0.3s ease-in;
  opacity: 0.7;
}
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in;
}

.card:hover::before {
  opacity: 1;
}
@media only screen and (max-width: 580px) {
  .service-details {
    font-size: 13px;
    flex: 1;
    /* background: #84bd3a; */
    padding: 5px;
  }
  .service-title {
    padding: 10px;
    font-size: 15px;
    flex: 1;
  }
}
</style>
