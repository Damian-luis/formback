<template>
  <h2 v-scroll-reveal.reset="{ delay: 250 }">
    Build Your Dedicated Team With Our Top Tech Skills
  </h2>
</template>

<script>
import "@/assets/styles/main.css";

export default {};
</script>

<style>
h2 {
  font-size: 60px;
  color: var(--text-color);
  width: 60%;
  text-align: center;
  margin: auto;
  margin-top: 60px;
}

@media (max-width: 450px) {
  h2 {
    font-size: 30px;
  }
}
</style>