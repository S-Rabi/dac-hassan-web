<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { database } from "../data/database";

const route = useRoute();
const id = ref(route.params.id);
const card = ref(null);

const updateCardDetails = () => {
  card.value = database.find((item) => item.id === parseInt(id.value));
};

updateCardDetails();

const cardTitles = computed(() => {
  return database.map((item) => item.title);
});

watch(
  () => route.params.id,
  () => {
    id.value = route.params.id;
    updateCardDetails();
  }
);
</script>

<template>
  <div class="card-details">
    <div class="sidebar">
      <h2>Our Services</h2>
      <div class="services" v-for="title in cardTitles" :key="title">
        <router-link
          :to="{
            name: 'CardDetail',
            params: { id: database.find((item) => item.title === title).id },
          }"
          ><h3 class="s-title">{{ title }}</h3>
        </router-link>
      </div>
    </div>
    <div class="c-details">
      <div class="c-text" v-if="card">
        <h2>{{ card.title }}</h2>
        <p>{{ card.details }}</p>
        <img :src="card.imgUrl" :alt="card.title" class="card-img" />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-details {
  height: 70vh;
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
}
.card-details h2 {
  margin: 20px 15px;
}
.sidebar {
  width: 35%;
  height: 100%;
  padding: 10px 0px;
  background: linear-gradient(
    90deg,
    rgba(240, 237, 235, 1) 21%,
    rgba(255, 255, 255, 1) 70%
  );
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.services {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 1px 2px 0px;
}
.services a {
  text-decoration: none;
  color: #153447;
}

.s-title {
  width: 100%;
  transition: 0.3s linear;
  padding: 15px;
  cursor: pointer;
  font-size: 16px;
}
.s-title:hover {
  background-color: #84bd3a;
  color: white;
}

.c-details {
  width: 65%;
}
.c-text {
  padding: 20px;
}
.c-text p {
  margin: 20px 0;
  font-size: 14px;
}
.card-img {
  width: 99%;
  height: 350px;
  max-height: fit-content;
  overflow: hidden;
}
@media only screen and (max-width: 860px) {
  .c-text p {
    margin: 15px 0;
  }
  .card-img {
    height: 250px;
  }
}
@media only screen and (max-width: 680px) {
  .card-details {
    height: fit-content;
  }
  .card-details h2 {
    margin: 12px;
    font-size: 17px;
  }
  .sidebar {
    width: 40%;
    padding: 0;
    padding-top: 10px;
  }
  .s-title {
    font-size: 14px;
    padding: 10px;
  }
  .c-text {
    padding: 10px;
  }
  .c-text p {
    margin: 10px 0;
    font-size: 13px;
  }
  .c-details {
    width: 60%;
  }
  .card-img {
    height: 200px;
  }
}
@media only screen and (max-width: 580px) {
  .card-details h2 {
    margin: 10px;
    font-size: 16px;
  }
  .sidebar {
    width: 40%;
  }
  .s-title {
    font-size: 13px;
    padding: 9px;
  }
  .c-text {
    padding: 10px;
  }
  .c-text p {
    margin: 10px 0;
    font-size: 12px;
  }
  .c-details {
    width: 60%;
  }

  .card-img {
    height: 200px;
  }
}
</style>
