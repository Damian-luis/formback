<template>
  <div class="ContentSection8">
    <div class="contentContainerSection8">
      <div class="contentContainer8__box">
        <i class="bx bxs-map" style="color: #ff304a"></i>
        <p>
          SANTIAGO, CHILE
          <br />
          Av. Irarrázaval 3661,Of. 201 Ñuñoa, ZIP 7550000
          <br />
          +56 2 2247-2156
        </p>
      </div>
      <div class="contentContainer8__box">
        <i class="bx bxs-map" style="color: #ffcc01"></i>
        <p>
          FRISCO, USA
          <br />
          10601 Clarence Dr STE 250, Frisco, Texas, 75033
          <br />
          (945) 424-1743
        </p>
      </div>
      <div class="contentContainer8__box">
        <i class="bx bxs-map" style="color: #2babf0"></i>
        <p>
          CÓRDOBA, ARGENTINA
          <br />
          HUMBERTO PRIMO 630
          <br />
          CÓRDOBA CAPITAL X5000
          <br />
          +54 (351) 811-2258
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ContentSection8 {
  text-align: center;
  margin: 10rem 1rem;
}

.contentContainerSection8 {
  border-style: solid;
  display: flex;
  border: 3px solid #fff;
  border-radius: 10px;
  flex-wrap: wrap;
  width: 81%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.contentContainer8__box {
  padding: 4rem 2rem;
  flex: 1 1 30%;
  display: flex;
  font-size: 20px;
  color: #fff;
}

.contentContainer8__box p {
  text-align: left;
  margin-left: 10px;
  text-transform: uppercase;
}

.contentContainer8__box i:first-child {
  color: red;
}

@media (max-width: 650px) {
  .contentContainer8__box {
    font-size: 15px;
  }
}
</style>