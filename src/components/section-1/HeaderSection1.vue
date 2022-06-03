<template>
  <div class="section1" id="section1">
    <h2 class="section1__title" v-scroll-reveal.reset>Our Services</h2>
    <p class="section1__description" v-scroll-reveal.reset="{ delay: 250 }">
      WebLeads helps you adapt your company's business processes so that you can
      focus on what really matters to you. you can focus on what really matters
      to you, thus facilitating the achievement of your goals, adding value to
      your customers, and increasing the productivity of your resources.
    </p>
  </div>
</template>

<script>
import "@/assets/styles/main.css";

export default {};
</script>

<style scoped>
.section1 {
  width: 82%;
  margin: auto;
  margin-top: 36px;
}

.section1__title {
  font-size: 60px;
  color: var(--text-color);
  font-weight: bold;
  text-align: center;
}

.section1__description {
  margin-top: 33px;
  text-align: center;
  font-size: 24px;
  color: var(--text-color);
}
@media (max-width: 450px) {
  .section1__title {
    font-size: 30px;
  }

  .section1__description {
    font-size: 20px;
  }
}
</style>