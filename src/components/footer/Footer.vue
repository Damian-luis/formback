<template>
  <footer>
    <div class="footer__box_1">
      <p>© 2022 WebLeads. All rights reserved</p>
      <div class="footer__items">
        <a href="https://www.instagram.com/webleadsok/" target="_blank">
          <i class="bx bxl-instagram"></i>
        </a>
        <a href="https://www.facebook.com/webleadsok" target="_blank">
          <i class="bx bxl-facebook"></i>
        </a>
        <a href="https://ar.linkedin.com/company/webleadsok" target="_blank">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/webleads-software" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
      </div>
    </div>
    <div class="footer__box_2">
      <a href=""> Terms & Conditions</a>
      <small style="color: white">|</small>
      <router-link to="/privacy-policy"> Privacy Policy</router-link>
    </div>
    <router-view />
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  padding: 2rem;
  display: flex;
  background: #0b0d17;
  justify-content: space-around;
}

.footer__box_1 {
  display: flex;
  color: var(--text-color);
  flex-wrap: wrap;
  align-items: center;
}

.footer__box_1 p {
  margin-right: 25px;
}

.footer__box_1 a {
  margin: 0 5px;
  color: var(--text-color);
}

.footer__box_2 {
  text-align: left;
}

.footer__box_2 a {
  color: var(--text-color);
  margin: 0 5px;
  text-decoration: none;
}

@media (max-width: 650px) {
  .footer__items {
    margin-top: 15px;
  }
}
</style>