<template>
  <div
    class="section5Container"
    v-scroll-reveal.reset="{ delay: 250, scale: 1 }"
  >
    <h2>Our Clients</h2>
    <div class="carousel">
      <div class="inner" ref="inner">
        <div class="card" v-for="card in cards" :key="card">
          <img :src="card" alt="" />
          <!-- {{ card }} -->
        </div>
      </div>
    </div>
    <button @click="prev" class="prev">
      <i class="bx bx-chevron-left"></i>
    </button>
    <button @click="next" class="next">
      <i class="bx bx-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // cards: [1, 2, 3, 4, 5, 6, 7],
      cards: [
        require("@/assets/img/Group 7.png"),
        require("@/assets/img/Group9 .png"),
        require("@/assets/img/group10.png"),
        require("@/assets/img/group12.png"),
      ],
      innerStyle: {},
      step: "",
    };
  },
  mounted() {
    this.setStep();
    console.log(this.cards);
  },

  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },

    next() {
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
      });
      console.log(this.cards);
    },

    prev() {
      this.moveRight();
      this.beforeTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
      });
      console.log(this.cards);
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };

      this.$refs.inner.addEventListener("transitionend", listener);
    },

    beforeTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };

      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      const inner = document.querySelector(".inner");
      inner.style.transition = "none";
      inner.style.transform = "translateX(0)";
    },

    moveLeft() {
      const inner = document.querySelector(".inner");
      console.log(this.step);
      inner.style.transform = `translateX(-${this.step})`;
      inner.style.transition = "transform 0.2s";
    },

    moveRight() {
      const inner = document.querySelector(".inner");
      console.log(this.step);
      inner.style.transform = `translateX(+${this.step})`;
      inner.style.transition = "transform 0.2s";
    },
  },
};
</script>

<style>
.section5Container {
  width: 75%;
  margin: auto;
  margin-top: 8rem;
  margin-bottom: 10rem;
  position: relative;
}

.section5Container h2 {
  margin-top: 6rem;
}

.carousel {
  overflow: hidden;
}

.inner {
  white-space: nowrap;
  transition: transform 0.2s;
}

.card {
  width: 25%;
  /* width: 40px; */
  margin-right: 10px;
  display: inline-flex;
  height: 40px;
  color: white;
  align-items: center;
  justify-content: center;
}

.next,
.prev {
  margin-right: 5px;
  margin-top: 10px;
  width: 50px;
  cursor: pointer;
}

.next {
  background: none;
  top: 72%;
  position: absolute;
  right: -60px;
  font-size: 25px;
  border: none;
  color: var(--text-color);
}

.prev {
  background: none;
  top: 72%;
  position: absolute;
  left: -25px;
  font-size: 25px;
  border: none;
  color: var(--text-color);
}

@media (max-width: 750px) {
  .section5Container {
    width: 50%;
  }

  .card {
    width: 50%;
  }

  .next {
    top: 82%;
  }
  .prev {
    top: 82%;
  }
}

@media (max-width: 550px) {
  .section5Container {
    width: 45%;
  }

  .card {
    width: 100%;
  }

  .next {
    top: 80%;
  }
  .prev {
    top: 80%;
  }
}

@media (max-width: 450px) {
  .section5Container {
    width: 45%;
  }

  .card {
    width: 100%;
  }

  .next {
    top: 75%;
    right: -35px;
  }
  .prev {
    top: 75%;
    left: -35px;
  }
}
</style>