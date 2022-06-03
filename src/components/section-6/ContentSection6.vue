<template>
  <div class="contentSection6">
    <div class="boxSection6">
      <img src="@/assets/img/Rectangle 9574.png" alt="" />
      <h3 class="boxSection6__title">Central Office in Argentina & Chile</h3>
    </div>
    <div class="boxSection6">
      <img src="@/assets/img/Rectangle 9575.png" alt="" />
      <h3 class="boxSection6__title">Headquarters in USA</h3>
    </div>
    <div class="boxSection6">
      <img src="@/assets/img/Rectangle 9576.png" alt="" />
      <h3 class="boxSection6__title" id="ContentSection6">
        Remote Operation in different places of the world
      </h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contentSection6 {
  width: 81%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.boxSection6 {
  text-align: center;
  margin: 20px 0;
  flex: 1 1 20%;
}

.boxSection6 .boxSection6__title {
  font-size: 25px;
  color: var(--text-color);
  margin: auto;
}

.boxSection6 img {
  min-width: 30%;
  margin-bottom: 2rem;
}

@media (max-width: 1300px) {
  .boxSection6 .boxSection6__title {
    max-width: 342px;
  }
}

@media (max-width: 550px) {
  .boxSection6 img {
    width: 180px;
  }
}
</style>