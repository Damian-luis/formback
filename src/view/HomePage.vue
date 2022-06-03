<template>
  <div>
    <Header />
    <img class="gradient-1" src="@/assets/img/Gradient01.svg" alt="" />
    <Section1 />
    <Section2 />
    <img class="gradient-2" src="@/assets/img/Gradient02.svg" alt="" />
    <Section3 />
    <img class="gradient-3" src="@/assets/img/Gradient03.svg" alt="" />

    <Section4 />
    <Section5 />
    <Section6 />
    <img class="gradient-4" src="@/assets/img/Gradient 4.svg" alt="" />

    <Section7 />
    <Section8 />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header/Header.vue";
import Section1 from "../components/section-1/Section1.vue";
import Section2 from "../components/section-2/Section2.vue";
import Section3 from "../components/section-3/Section3.vue";
import Section4 from "../components/section-4/Section4.vue";
import Section5 from "../components/section-5/Section5.vue";
import Section6 from "../components/section-6/Section6.vue";
import Section7 from "../components/section-7/Section7.vue";
import Section8 from "../components/section-8/Section8.vue";
import Footer from "../components/footer/Footer.vue";
import "../assets/styles/main.css";

export default {
  components: {
    Header,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Footer,
  },
};
</script>

<style scoped>
div .gradient-1 {
  position: absolute;
  left: -60px;
  top: 0px;
  /* height: 920px; */
  width: 70%;
  z-index: -100;
}

div .gradient-2 {
  position: absolute;
  right: 0;
  top: 1250px;
  /* height: 920px; */
  width: 70%;
  z-index: -100;
}

div .gradient-3 {
  position: absolute;
  top: 3100px;
  left: 0;
  width: 70%;
  z-index: -100;
}

div .gradient-4 {
  position: absolute;
  top: 5000px;
  right: 0;
  width: 98%;
  z-index: -100;
}
</style>