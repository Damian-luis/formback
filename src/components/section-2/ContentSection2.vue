<template>
  <div class="section2Wrapper" v-scroll-reveal.reset="{ delay: 250, scale: 1 }">
    <div class="contentSeccion2">
      <div class="box">
        <img src="@/assets/img/PHP.png" alt="" />
        <p>
          Hire developers deep expertise in LAMP, Laravel, Symfony, CodeIgniter,
          Yii, Zend, WordPress. Drupal or Magento.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/PYTHON.png" alt="" />
        <p>
          Get expertise in Core Python, Django, Flask, Microservices, Redis,
          AWS, Google Cloud, GraphQL, Hadoop, Hive and more.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/nodejs.png" alt="" />
        <p>
          Node.js is a go-to choice for developers looking to build real-time,
          scalable apps and collaborative tools.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/NET.png" alt="" />
        <p>
          From mobile and web apps, desktop apps to microservices running on the
          cloud, .NET provides a solution for all.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/Group 162493.png" alt="" />
        <p>
          Java is one of the most popular and influential languages. It is
          considered the most secure and reliable due to its 25 yrs old history.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/RAILS.png" alt="" />
        <p>
          Ruby on Rails is especially relevant for startups building MVP because
          of its clear syntax and code reusing.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/REACT.png" alt="" />
        <p>
          React makes it painless to build interactive UIs, simple views, and
          component-based structures.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/ANGULAR.png" alt="" />
        <p>
          Angular is best for creating dynamic Single Page Applications (SPAs) -
          both on the web and mobile.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/vue-js-1.png" alt="" />
        <p>
          Vue is a go-to choice for developing next-genapps that are small in
          size and yet robust.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/DEVOPS.png" alt="" />
        <p>
          Get expertise in Docker, Kubernetes, AWS, Azure, GCP, GitLab CI/CD,
          Jenkinsand more.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/Group 162494.png" alt="" />
        <p>
          Manual and automation software testing services, including functional
          testing, security testing, server-side testing, etc
        </p>
      </div>
      <div class="box">
        <img src="@/assets/img/coding.png" alt="" />
        <p>
          Hire developers with expertise in iOS, Android,Xamarin, Apache
          Cordova, PWA, React Native,Flutter, Ionic, and more.
        </p>
      </div>
    </div>
    <a href="#" class="btn__talk"
      >SCHEDULE TIME TO TALK
      <i class="bx bx-chevron-right"></i>
    </a>
    <p class="box__meet">
      <a href="#ContentSection6">
        Or, Use this form to share your requirements. Get guaranteed response
        within 8 Hrs.
      </a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contentSeccion2 {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  width: 85%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 45px;
}

.section2Wrapper {
  text-align: center;
}

.section2Wrapper .btn__talk {
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

.section2Wrapper .btn__talk:hover {
  box-shadow: var(--box-shadow);
}

.section2Wrapper .box__meet {
  width: 250px;
  font-size: 14px;
  color: var(--text-color);
  text-decoration: underline;
  cursor: pointer;
  margin: auto;
  margin-top: 25px;
}

.section2Wrapper .box__meet a {
  color: var(--text-color);
}

.box {
  padding: 1rem;
  display: flex;
  margin: auto;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1 1 450px;
  gap: 25px;
}

.box p {
  color: var(--text-color);
  flex: 1 1 50%;
  text-align: left;
}

.box img {
  border-style: solid;
  color: #fff;
  border: 1px solid #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 130px;
  height: 130px;
  object-fit: contain;
}

@media (max-width: 500px) {
  .box p {
    text-align: center;
  }
}
</style>