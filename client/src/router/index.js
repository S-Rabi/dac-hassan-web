import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";
import AboutUs from "../components/AboutUs.vue";
import Service from "../components/Service.vue";
import CardDetail from "../components/CardDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/aboutUs", component: AboutUs },
  { path: "/service", component: Service },
  {
    path: "/card/:id",
    name: "CardDetail",
    component: CardDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
