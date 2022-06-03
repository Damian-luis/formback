<template>
  <div>
    <div class="contentContainer headline">
      <div
        class="contentContainer__box"
        v-scroll-reveal.reset="{ delay: 250, scale: 1 }"
      >
        <img src="@/assets/img/icon2.png" alt="" />
        <h3>Software Development</h3>
        <p>
          We are an award-winning offshore web development company specializing
          in creating custom, scalable and secure software for various
          industries. With expertise in UI/UX, Mobile, SaaS, Web & Cloud, we are
          your One-Stop Solution For All Your Software Design, Development, And
          Support Requirements.
        </p>
      </div>
      <div
        class="contentContainer__box"
        v-scroll-reveal.reset="{ delay: 250, scale: 1 }"
      >
        <img src="@/assets/img/Icon (1).png" alt="" />
        <h3>Staff Augmentation</h3>
        <p>
          Looking for software engineers with a specific skill set to fill
          talent gaps? Our IT staff augmentation company can help you strike a
          perfect balance between project progress and cost-effectiveness. Build
          your team up and down with ease based on the current development
          needs.
        </p>
      </div>
      <div
        class="contentContainer__box"
        v-scroll-reveal.reset="{ delay: 250, scale: 1 }"
      >
        <img src="@/assets/img/Icon.png" alt="" />
        <h3>Mobile App Development</h3>
        <p>
          Our developers build native or hybrid apps for iOS and Android using
          the latest tech stack. We have expertise in fintech, edtech,
          healthcare, streaming industries, and more. Hire developers with
          expertise in iOS, Android, Xamarin, Apache Cordova, PWA, React Native,
          Flutter, Ionic, and more.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style>
.contentContainer {
  width: 81%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.contentContainer__box {
  width: 295px;
  background: rgba(255, 255, 255, 0.37);
  margin: 72px 20px;
  padding: 20px;
  border-radius: 31px;
  text-align: center;
  border: 1px solid #ffff;
}

.contentContainer__box h3 {
  color: var(--text-color);
  text-align: center;
  font-size: 28px;
}

.contentContainer__box p {
  text-align: center;
  margin-top: 15px;
  color: #ffffff;
  opacity: 0.7;
}
</style>