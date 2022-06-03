<template>
  <nav>
    <!-- Element 1 -->
    <div class="logo">
      <a href="#">
        <div v-if="!mobile">
          <img src="@/assets/img/logotipo.png" />
        </div>
        <div v-else>
          <img src="@/assets/img/logo_mobile.svg" style="width: 70px" />
        </div>
      </a>
    </div>

    <!-- Elemento 2 -->
    <div class="nav__items">
      <ul v-show="!mobile">
        <li><a href="#">HOME</a></li>
        <li><a href="#section1">SERVICES</a></li>
        <li><a href="#ContentSection6">CONTACT</a></li>
      </ul>

      <transition
        name="mobile-nav"
        :class="{ 'animate__animated animate__fadeInDown': mobileNav }"
      >
        <ul
          v-show="mobileNav"
          class="down-nav"
          :class="{ 'animate__animated animate__fadeInDown': mobileNav }"
        >
          <li><a href="#">HOME</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </transition>
    </div>

    <!-- Elemento 3 -->
    <div class="icon" v-show="mobile" @click="toggleMobileNav">
      <i class="bx bx-menu"></i>
    </div>
  </nav>
</template>

<script>
import "@/assets/styles/main.css";

export default {
  name: "navigation-bar",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    window.addEventListener("scroll", this.updateScroll);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 650) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
    },

    updateScroll() {
      this.mobileNav = false;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style>
nav {
  background: var(--dark-bg-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 120px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}

nav img {
  width: 150px;
}

nav .nav__items ul {
  display: flex;
  gap: 25px;
}

nav .nav__items ul li {
  list-style-type: none;
}

nav .nav__items ul li a {
  text-decoration: none;
  color: var(--text-color-hover);
  font-weight: 100;
  transition: 0.5s ease all;
  border-bottom: 1px solid transparent;
}

nav .nav__items ul li a:hover {
  color: var(--text-color);
  border-color: var(--red);
}

.icon i {
  font-size: 40px;
  color: var(--text-color);
}

.down-nav {
  background: var(--red);
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  width: 100%;
  top: 100px;
  padding: 20px;
  z-index: 100;
}

.down-nav li a {
  color: #fff !important;
}
</style>