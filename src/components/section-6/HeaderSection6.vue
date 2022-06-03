<template>
  <h2 v-scroll-reveal.reset="{ delay: 250, scale: 1 }">Our Infrastructure</h2>
</template>

<script>
export default {};
</script>

<style>
h2 {
  margin-bottom: 2rem;
}

@media (max-width: 550px) {
  h2 {
    font-size: 30px;
  }
}
</style>