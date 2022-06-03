<template>
  <div class="ContentSection3" v-scroll-reveal.reset="{ delay: 250, scale: 1 }">
    <div class="contentContainer">
      <div class="contentContainer__box">
        <img src="@/assets/img/rd-icon1 1.png" alt="" />
        <h3>Schedule a Call</h3>
        <p>Set up an initial call with our expertsto discuss your needs.</p>
      </div>
      <div class="contentContainer__box">
        <img src="@/assets/img/rd-icon2 1.png" alt="" />
        <h3>Choose Your Team</h3>
        <p>
          Screen and interview the best-fit remote developers from our talent
          pool.
        </p>
      </div>
      <div class="contentContainer__box">
        <img src="@/assets/img/rd-icon3 1.png" alt="" />
        <h3>Hire and Get Started</h3>
        <p>Onboard your team and get started with your project.</p>
      </div>
    </div>
    <a href="#" class="btn__talk"
      >BOOK A CALL
      <i class="bx bx-chevron-right"></i>
    </a>
    <p class="box__meet">
      <a href="#ContentSection6"
        >Or, Use this form to tell us about your needs.</a
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ContentSection3 {
  text-align: center;
}

.ContentSection3 .btn__talk {
  margin-top: 100px;
  background: var(--red);
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 15px;
  transition: 0.3s all ease-in-out;
  font-weight: bold;
}

.ContentSection3 .box__meet {
  width: 250px;
  font-size: 14px;
  color: var(--text-color);
  text-decoration: underline;
  cursor: pointer;
  margin: auto;
  margin-top: 25px;
}

.ContentSection3 .box__meet a {
  color: var(--text-color);
}
</style>