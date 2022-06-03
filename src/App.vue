<template>
  <div>
    <nav>
      <div class="logo">
        <router-link class="nav__item" to="/">
          <img src="@/assets/img/logotipo.png" />
        </router-link>
      </div>
      <router-link class="nav__item" to="/">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import HomePage from "./view/HomePage.vue";
// import Footer from "@/components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    // HomePage,
    // Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
#app {
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav__item {
  color: white;
  text-decoration: none;
}
</style>


