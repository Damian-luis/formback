<template>
  <div>
    <div class="container" v-scroll-reveal="{ delay: 250 }">
      <div class="box-1">
        <span>#WeAreWebLeads</span>
        <h1 :class="{ mobileTitle: mobile }">
          Software Development Outsourcing Services
        </h1>
        <p class="box__description">
          Hire In-Demand Skills, On-Demand TM Web. Software, Mobile,DevOps and
          BlockChain.
        </p>
        <a href="#" class="btn__talk"
          >SCHEDULE TIME TO TALK
          <i class="bx bx-chevron-right"></i>
        </a>
        <p class="box__meet">
          <a href="#ContentSection6">
            Or, Use this form to share your requirements. Get guaranteed
            response within 8 Hrs.
          </a>
        </p>
      </div>
      <div v-if="!mobile" class="box-2 animate__animated animate__zoomInRight">
        <img src="@/assets/img/ilustracion_1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero-area",
  data() {
    return {
      mobile: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    console.log(this.mobile);
  },
  methods: {
    checkScreen() {
      console.log(this.mobile);
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 650) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
        return;
      }
    },
  },
};
</script>

<style>
.container {
  position: relative;
  display: flex;
  padding: 2rem;
}

.box-1 {
  width: 60%;
  top: 40px;
  left: 55px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.box-1 > * {
  margin: 15px 20px;
}

.box-1 span {
  font-size: 20px;
  color: var(--text-color);
  font-weight: normal;
}

h1 {
  font-size: 75px;
  color: var(--text-color);
  font-weight: bold;
  line-height: 1;
}

.box-1 .box__description {
  font-size: 22px;
  color: var(--text-color);
}

.box-1 .btn__talk {
  background: var(--red);
  border-radius: 10px;
  padding: 15px 20px;
  width: 328px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 20px;
  transition: 0.3s all ease-in-out;
}

.box-1 .btn__talk:hover {
  box-shadow: var(--box-shadow);
}

.box-1 a {
  text-decoration: none;
  color: var(--text-color);
}

.box-1 .box__meet {
  width: 322px;
  font-size: 14px;
  color: var(--text-color);
  text-decoration: underline;
  cursor: pointer;
}

.box-2 img {
  width: 100%;
}

/* .box-2 .test__container img {
  object-fit: contain;
} */

.mobileTitle {
  font-size: 40px;
}

@media (max-width: 600px) {
  .box-1 {
    left: 0px;
    width: 100%;
  }

  .mobileTitle {
    font-size: 35px;
  }

  .box-1 .box__description {
    font-size: 14px;
  }

  .box-1 .btn__talk {
    width: 65%;
    font-size: 10px;
    padding: 15px 5px;
  }

  .box-1 .box__meet {
    font-size: 12px;
    width: 100%;
  }
}
</style>