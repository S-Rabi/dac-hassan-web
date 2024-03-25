<script setup>
import { ref, watch } from "vue";
import WhatsAppIcon from "./WhatsAppIcon.vue";

const isOpen = ref(false);
const menuOpen = ref(false);
const isMobile = ref(window.innerWidth <= 580);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  menuOpen.value = !menuOpen.value;
};
const closeMenu = () => {
  isOpen.value = false;
  menuOpen.value = false;
};
watch(() => {
  isMobile.value = window.innerWidth <= 580;
});

window.addEventListener("resize", () => {
  isMobile.value = window.innerWidth <= 580;
});
</script>
<template>
  <div class="navbar-wrapper">
    <div class="container">
      <div class="navbar">
        <router-link to="/" class="logo">
          <img src="../assets/dac-logo.jpg" alt="" />
        </router-link>
        <div class="nav-link" v-show="!isMobile || (!menuOpen && !isMobile)">
          <router-link to="/" class="navlink">Home</router-link>
          <router-link to="/service" class="navlink">Service</router-link>
          <router-link to="/aboutUs" class="navlink">About Us</router-link>
          <router-link to="/contact" class="navlink">Contact</router-link>
        </div>
        <div
          class="menu-icon"
          @click="toggleMenu"
          :class="{ open: isOpen }"
          v-show="isMobile"
        >
          <div class="line-menu half start"></div>
          <div class="line-menu"></div>
          <div class="line-menu half end"></div>
        </div>
      </div>
      <div class="dropdown" :class="{ 'dropdown-after': menuOpen && isMobile }">
        <router-link to="/" @click="closeMenu"> Home</router-link>
        <router-link to="/service" @click="closeMenu">Service</router-link>
        <router-link to="/aboutUs" @click="closeMenu">About Us</router-link>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
      </div>
    </div>
    <router-view></router-view>
    <WhatsAppIcon />
  </div>
</template>

<style scoped>
.container {
  background: #153447;
  color: white;
}

.navbar {
  padding: 0px 15px;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
}
.logo {
  text-decoration: none;
  color: white;
  height: 100%;
  width: 100px;
}
.logo img {
  height: 100%;
  width: 100%;
}
.nav-link {
  display: flex;
  gap: 15px;
  font-weight: 600;
  align-items: center;
}
.navlink {
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  position: relative;
  transition: 0.2s;
}
.navlink::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  width: 0;
  transition: 0.2s;
}
.navlink:focus::after {
  background-color: white;
  width: 100%;
}

.menu-icon {
  width: 32px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
}

.menu-icon.open {
  transform: rotate(-45deg);
}

.line-menu {
  background-color: white;
  border-radius: 4px;
  width: 100%;
  height: 3px;
}

.line-menu.half {
  width: 50%;
}

.line-menu.start {
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
}

.menu-icon.open .line-menu.start {
  transform: rotate(-90deg) translateX(3px);
}

.line-menu.end {
  align-self: flex-end;
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: left;
}

.menu-icon.open .line-menu.end {
  transform: rotate(-90deg) translateX(-3px);
}
.dropdown {
  height: 0px;
  transition: height 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  /* background: #0d2a3c; */
  width: 100%;
  position: absolute;
  text-decoration: none;
  z-index: 9;
  background: rgb(240, 237, 235);
  background: linear-gradient(
    90deg,
    rgba(240, 237, 235, 1) 21%,
    rgba(255, 255, 255, 1) 70%
  );
}

.dropdown-after {
  height: calc(229px - 10px);
  transition: height 0.3s ease;
  border-bottom: 1px solid #ece9e6;
}
.dropdown a {
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  padding: 15px 20px;
  color: #153447;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  transition: 0.3s linear;
  font-weight: 500;
}

.dropdown a:hover {
  background-color: #84bd3a;
  color: white;
}
.dropdown a.router-link-active {
  border-bottom: none;
  margin-bottom: 0;
}
@media only screen and (max-width: 868px) {
  .logo img {
    width: 95px;
  }
}
@media only screen and (max-width: 768px) {
  .logo img {
    width: 90px;
  }
}
@media only screen and (max-width: 580px) {
  .navbar {
    height: 8vh;
  }
  .logo img {
    width: 85px;
  }
}
@media only screen and (max-width: 480px) {
  .logo img {
    width: 80px;
  }
}
</style>
