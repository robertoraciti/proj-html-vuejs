<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      jumbotrons: [
        {
          path: "../../public/img/home1_slide_one_bg.jpg",
          title: "Avada Classic Shop",
          slogan: "SHOW YOUR PRODUCTS WITH STYLE",
          btn1: "GET AVADA NOW",
        },
        {
          path: "../../public/img/home1_slide_2_bg.jpg",
          title: "Online Store",
          slogan: "SELL YOUR PRODUCTS WITH STYLE",
          btn1: "MEN",
          btn2: "WOMEN",
        },
        {
          path: "../../public/img/home1_slide_three_bg_2.jpg",
          title: "Brand New Arrivals",
          slogan: "NEW COLLECTION FROM NEW YORK",
          btn1: "VIEW ALL",
          btn2: "LOOKBOOK",
        },
      ],
      activeSlide: 0,
    };
  },

  methods: {
    goPrev() {
      if (this.activeSlide > 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.jumbotrons.length - 1;
      }
    },

    goNext() {
      if (this.activeSlide < this.jumbotrons.length - 1) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <section class="jumbotron">
    <img :src="jumbotrons[activeSlide].path" alt="" />

    <div class="content">
      <h1>{{ jumbotrons[activeSlide].title }}</h1>
      <p>{{ jumbotrons[activeSlide].slogan }}</p>
      <button>{{ jumbotrons[activeSlide].btn1 }}</button>
      <button v-show="jumbotrons[activeSlide].btn2" class="ms-4">
        {{ jumbotrons[activeSlide].btn2 }}
      </button>
    </div>
    <div class="go-prev" @click="goPrev()">
      <font-awesome-icon class="icon" icon="fa-solid fa-angle-left" />
    </div>
    <div class="go-next" @click="goNext()">
      <font-awesome-icon class="icon" icon="fa-solid fa-angle-right" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.jumbotron {
  height: 400px;

  object-fit: cover;
  object-position: center;
  position: relative;

  &:hover .icon {
    display: block;
  }
  .go-prev {
    height: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(15%);
    cursor: pointer;
  }
  .go-next {
    height: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(15%);
    cursor: pointer;
  }

  .icon {
    display: none;
    width: 50px;
    font-size: 50px;
    background-color: rgb(255, 255, 255, 0.6);
  }

  img {
    width: 100%;
    position: relative;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-align: center;

    h1 {
      font-size: 4.3rem;
      font-weight: 900;
    }

    p {
      font-size: 1.5rem;
    }

    button {
      border: 1px solid white;
      background-color: rgb(255, 255, 255, 0.3);
      color: white;
      border-radius: 10px;
      padding: 10px 20px;

      &:hover {
        background-color: rgb(255, 255, 255, 0);
      }
    }
  }
}
</style>
