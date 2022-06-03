<template>
  <div class="containerSecction7" id="containerSecction7">
    <div class="col-1">
      <h2 class="col-1__title">We’d Love To Hear From You</h2>
      <p class="col-1__content">
        Get Custom Solutions, Recommendations, Resumes, or, Estimates.
        Confidentiality & Same Day Response Guaranteed!
      </p>
      <hr />
      <div class="containerSecction7__info">
        <p>What’s next?</p>
        <p>One of our Account Managers will contact you shortly</p>
      </div>
      <div class="secction7__img">
        <img src="@/assets/img/imagenVendedor2.png" alt="" />
        <img src="@/assets/img/imagenVendedor.png" alt="" />
      </div>
    </div>
    <div class="col-2">
      <form method="post" action="http://localhost:8081/enviar">
        
        
        <input type="text" placeholder="Your name*" name="name"/>
        <input type="email" placeholder="Work email*" name="email"/>
        <input type="number" placeholder="Mobile number*" name="number"/>
        <input type="text" placeholder="Company*" name="company"/>
        <textarea placeholder="Your Message/Requirements" name="message"></textarea>

        <div class="moreInfo">
          <p>
            Attach files Select files from your
            <span style="color: #ff304a; border-bottom: 1px solid #ff304a"
              >Computer</span
            >
            or
            <span style="color: #2babf0; border-bottom: 1px solid #2babf0"
              >Google Docs</span
            >
            or
            <span style="color: #ffcc01; border-bottom: 1px solid #ffcc01"
              >Dropbox URLs</span
            >
          </p>
        </div>
        <input type="submit" value="ENQUIRE NOW "/>
      </form>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.containerSecction7 {
  width: 75%;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  box-shadow: var(--box-shadow);
}

.containerSecction7 .col-1 {
  flex: 1 1 50%;
  font-size: 30px;
  background: rgb(27, 30, 40);
  background: linear-gradient(
    180deg,
    rgba(27, 30, 40, 1) 0%,
    rgba(43, 171, 240, 1) 80%
  );
  padding: 2.5rem 0;
}

.containerSecction7 .col-1 .col-1__title {
  font-size: 40px;
  text-align: left;
  margin: 35px;
  width: 80%;
}

.col-1 .col-1__content {
  font-size: 20px;
  color: var(--text-color);
  margin: 35px;
  width: 80%;
}

.col-1 .containerSecction7__info {
  width: 55%;
  margin: 35px 0px;
}

.col-1 .containerSecction7__info p:first-child {
  font-size: 20px;
  margin: 35px;
  font-weight: bold;
  color: var(--text-color);
}

.col-1 .containerSecction7__info p:last-child {
  font-size: 15px;
  margin: 35px;
  margin-top: -30px;
  color: var(--text-color);
}

/* .col-1 img {
  width: 35%;
  position: relative;
  left: 26px;
} */

.col-1 hr {
  margin: 35px;
}

.containerSecction7 .col-2 {
  flex: 1 1 50%;
  background: #fff;
}

.col-2 form {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.col-2 form textarea {
  border: none;
  outline: none;
  margin: 20px 0px;
  border-bottom: 1px solid #d0d0d0;
  padding: 5px 5px;
  color: #686868;
}

.col-2 form input {
  margin: 5px 5px;
  border: none;
  border-bottom: 1px solid #d0d0d0;
  outline: none;
  padding: 20px 5px;
  color: #686868;
}

.col-2 form input::placeholder {
  color: #b9b9b9;
}

.col-2 form textarea::placeholder {
  color: #b9b9b9;
}

.col-2 .moreInfo {
  margin-top: 20px;
  width: 70%;
}

.col-2 a {
  margin-top: 35px;
  background: var(--red);
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 15px;
  transition: 0.3s all ease-in-out;
  font-weight: bold;
}

.col-2 span {
  cursor: pointer;
}

.col-2 a:hover {
  box-shadow: var(--box-shadow);
}

.secction7__img img {
  width: 20%;
  position: relative;
  left: 25px;
  margin: 5px 5px;
}
</style>