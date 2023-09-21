<script>
import jumbotron from "./_jumbotron.vue";
import featuredSect from "./_featuredsect.vue";

export default {
  data() {
    return {
      cards: [
        {
          path: "public/img/black_elegant_leather_jacket.jpg",
          title: "Black Leather Jacket",
          description: "Men,Jackets,Jeans",
          oldPrice: "$235",
          currentPrice: "$230",
          type: "Men",
          active: true,
          bestseller: true,
          newArrivals: true,
        },
        {
          path: "public/img/black_leather_suit.jpg",
          title: "Black Leather Suit",
          description: "Jackets,Men",
          currentPrice: "$176",
          type: "Men",
          active: true,
          bestseller: true,
          newArrivals: true,
        },
        {
          path: "public/img/blue_jacket_and_white_stripe_tee.jpg",
          title: "Blue Jacket & Stripe Tee",
          description: "Jackets,Men,Suits",
          currentPrice: "$580",
          type: "Men",
          active: true,
        },
        {
          path: "public/img/modern_black_leather_suit.jpg",
          title: "Modern Black Leather Suit",
          description: "Jackets,Men",
          currentPrice: "$96",
          type: "Men",
          active: true,
        },
        {
          path: "public/img/spring_printed_dress.jpg",
          title: "Spring Printed Dress",
          description: "Dress,Jeans",
          currentPrice: "$47",
          type: "Women",
          active: false,
          bestseller: true,
          newArrivals: true,
        },
        {
          path: "public/img/modern_love_tee.jpg",
          title: "Modern Love Tee",
          description: "T-shirts, Women",
          currentPrice: "$68",
          type: "Women",
          active: false,
          bestseller: true,
          newArrivals: true,
        },
        {
          path: "public/img/black_leather_jacket.jpg",
          title: "Black Jacket",
          description: "Jackets,Women",
          currentPrice: "$125",
          type: "Women",
          active: false,
          bestseller: true,
          newArrivals: true,
        },
        {
          path: "public/img/hipster_black_top.jpg",
          title: "Hipster Black Top",
          description: "T-Shirts,Women",
          currentPrice: "$57",
          type: "Women",
          active: false,
          bestseller: true,
          newArrivals: true,
        },
        {
          path: "public/img/casual_leather_belts.jpg",
          title: "Casual Leather Belts",
          description: "Accessories, Men",
          currentPrice: "$65",
          type: "Accessories",
          active: false,
        },
        {
          path: "public/img/leather_gloves.jpg",
          title: "Leather Gloves",
          description: "Accessories,Gloves,Men,Women",
          currentPrice: "$45",
          type: "Accessories",
          active: false,
        },
        {
          path: "public/img/modern_leather_boots.jpg",
          title: "Modern Leather Boots",
          description: "Accessories,Men,Miscellaneous,Shoes",
          oldPrice: "$50",
          currentPrice: "$30",
          type: "Accessories",
          active: false,
        },
        {
          path: "public/img/brown_dress_shoes.jpg",
          title: "Brown Dress Boots",
          description: "Accessories,Miscellaneous,Shoes, Women",
          oldPrice: "$46",
          currentPrice: "$36",
          type: "Accessories",
          active: false,
        },
      ],
      testimonials: [
        {
          image: "../../public/img/man_testimonial.png",
          message:
            "Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum.",
          name: "Darìo Pineda",
        },
        {
          image: "../../public/img/woman_testimonial.png",
          message:
            "Proin blandit metus vel magna dignissim varius. Morbi enim lorem, sollicitudin vitae ante nec, rutrum venenatis neque. In mi augue, iaculis nec dui ac, condimentum consequat velit. Ut et metus justo.",
          name: "Lisa Smith",
        },
      ],

      articles: [
        {
          image: "../../public/img/post_img_12-700x441.jpg",
          title: "Aenean lobortis sapien enim viverra",
          info: "September 9th, 2015|0 Comments",
          description:
            "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,",
        },
        {
          image: "../../public/img/post_img_11-700x441.jpg",
          title: "Duis ac massa semper maximus",
          info: "September 9th, 2015|0 Comments",
          description:
            "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,",
        },
        {
          image: "../../public/img/post_img_10-700x441.jpg",
          title: "Aenean lobortis sapien enim viverra",
          info: "September 9th, 2015|0 Comments",
          description:
            "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,",
        },
      ],

      logos: [
        "../../public/img/b_logotype_1.png",
        "../../public/img/b_logotype_2.png",
        "../../public/img/b_logotype_3.png",
        "../../public/img/b_logotype_4.png",
        "../../public/img/b_logotype_5.png",
        "../../public/img/b_logotype_6.png",
        "../../public/img/b_logotype_7.png",
      ],
      activeTestimonial: 0,
    };
  },

  methods: {
    goFirst() {
      if (this.activeTestimonial > 0) {
        this.activeTestimonial--;
      } else {
        this.activeTestimonial = this.testimonials.length - 1;
      }
    },

    goSecond() {
      if (this.activeTestimonial < this.testimonials.length - 1) {
        this.activeTestimonial++;
      } else {
        this.activeTestimonial = 0;
      }
    },

    changeTestimonial(index) {
      this.activeTestimonial = index;
    },

    setAutoplay() {
      if (!this.autoplay) {
        this.autoplay = setInterval(() => {
          this.goSecond();
        }, 3000);
      }
    },
  },

  components: {
    jumbotron,
    featuredSect,
  },

  created() {
    this.setAutoplay();
  },
};
</script>

<template>
  <jumbotron />
  <featuredSect />
  <!-- SEZIONE DELLE COLLEZIONI -->
  <section class="collection">
    <div class="winter">
      <div class="content">
        <h2>Winter Collection</h2>
        <p>STYLISH AND WARM</p>
        <button>VIEW MORE</button>
      </div>
    </div>
    <div class="spring">
      <div class="content">
        <h2>Spring Collection</h2>
        <p>BRIGHT AND COLORFUL</p>
        <button>VIEW MORE</button>
      </div>
    </div>
    <div class="autumn">
      <div class="content">
        <h2>Autumn Collection</h2>
        <p>RICH AND COMFORTABLE</p>
        <button>VIEW MORE</button>
      </div>
    </div>
  </section>
  <!-- SEZIONE PIU VENDUTI -->
  <section class="best-seller">
    <div class="title container">
      <div></div>
      <h2>Best Seller</h2>
      <div></div>
    </div>
    <p class="text-center text-secondary mt-2">
      Must have products from our top sellers
    </p>
    <div class="carousel container">
      <div class="cards-container">
        <div
          v-for="(card, index) in cards"
          v-show="card.bestseller"
          class="card-el"
        >
          <img :src="card.path" alt="" srcset="" />
        </div>
        <div class="go-prev">
          <font-awesome-icon class="icon" icon="fa-solid fa-angle-left" />
        </div>
        <div class="go-next">
          <font-awesome-icon class="icon" icon="fa-solid fa-angle-right" />
        </div>
      </div>
    </div>
  </section>
  <!-- SEZIONE PROMOZIONI -->
  <section class="promo">
    <div class="container cards-container">
      <div class="left-card">
        <div class="content w-75 m-auto">
          <h2>70% Off</h2>
          <p class="w-75">
            Vivamus tempor leo lacus, feugiat ut magna aliquam erat.
          </p>
          <button>VIEW MORE</button>
        </div>
      </div>
      <div class="right-card">
        <div class="content w-75 m-auto">
          <h2>Free Shipping</h2>
          <p class="w-75">
            Vivamus tempor leo lacus, feugiat ut magna aliquam erat.
          </p>
          <button>VIEW MORE</button>
        </div>
      </div>
    </div>
  </section>
  <!-- SEZIONE NUOVI ARRIVI -->
  <section class="new-arrivals">
    <div class="title container">
      <div></div>
      <h2>New Arrivals</h2>
      <div></div>
    </div>
    <p class="text-center text-secondary mt-2">
      Brand new products from top designers
    </p>
    <div class="carousel">
      <div class="cards-container">
        <div
          v-for="(card, index) in cards"
          v-show="card.newArrivals"
          class="card-el"
        >
          <img :src="card.path" alt="" srcset="" />
        </div>
        <div class="go-prev">
          <font-awesome-icon class="icon" icon="fa-solid fa-angle-left" />
        </div>
        <div class="go-next">
          <font-awesome-icon class="icon" icon="fa-solid fa-angle-right" />
        </div>
      </div>
    </div>
  </section>
  <!-- SEZIONE DELLE TESTIMONIANZE -->
  <section class="testimonials">
    <div class="content">
      <img
        :src="testimonials[activeTestimonial].image"
        alt=""
        srcset=""
        width="100"
      />
      <p class="message">{{ testimonials[activeTestimonial].message }}</p>
      <p>
        <span>{{ testimonials[activeTestimonial].name }}</span
        >, Theme Fusion
      </p>
      <div class="icons">
        <font-awesome-icon
          v-for="(testimonial, index) in testimonials"
          class="icon"
          :class="index == activeTestimonial ? 'active' : ''"
          @click="changeTestimonial(index)"
          icon="fa-regular fa-circle"
        />
      </div>
    </div>
  </section>
  <!-- SEZIONE BLOG -->
  <section class="blog">
    <div class="title container">
      <div></div>
      <h2>From Our Blog</h2>
      <div></div>
    </div>
    <p class="text-center text-secondary mt-2">The latest Classic Shop news</p>
    <div class="articles container">
      <div class="card" v-for="article in articles">
        <img :src="article.image" alt="" srcset="" />
        <p class="title-card">{{ article.title }}</p>
        <small>{{ article.info }}</small>
        <p class="description">{{ article.description }}</p>
      </div>
    </div>
  </section>
  <hr />
  <!-- SEZIONE SOMMARIO -->
  <section class="summary container">
    <div class="cards-container">
      <div class="card">
        <div class="title-card mb-3">F E A T U R E D</div>
        <div class="products">
          <p>Black Jacket <span class="price">$125</span></p>
          <img src="public/img/black_leather_jacket.jpg" alt="" srcset="" />
        </div>
        <hr />
        <div class="products">
          <div class="info-product">
            <p>Black Leather Jacket</p>
            <font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon class="icon" icon="fa-solid fa-star" />
            <div class="prices d-flex">
              <p class="price text-decoration-line-through me-1">$235</p>
              <span class="price text-decoration-underline">$200</span>
            </div>
          </div>
          <img
            src="public/img/black_elegant_leather_jacket.jpg"
            alt=""
            srcset=""
          />
        </div>
        <hr />
        <div class="products">
          <p>Hipster Black Top <span class="price">$57</span></p>
          <img src="public/img/hipster_black_top.jpg" alt="" srcset="" />
        </div>
        <hr />
      </div>
      <div class="card">
        <div class="title-card mb-3">O N S A L E</div>
        <div class="products">
          <div class="info-product">
            <p>Black Leather Jacket</p>
            <font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon class="icon" icon="fa-solid fa-star" />
            <div class="prices d-flex">
              <p class="price text-decoration-line-through me-1">$235</p>
              <span class="price text-decoration-underline">$200</span>
            </div>
          </div>
          <img
            src="public/img/black_elegant_leather_jacket.jpg"
            alt=""
            srcset=""
          />
        </div>
        <hr />
        <div class="products">
          <div class="info-product">
            <p>
              Blue Leather Jacket
              <span class="price text-decoration-line-through">$80</span>
            </p>
            <p class="price text-decoration-underline mt-2">$60</p>
          </div>
          <img src="public/img/blue_leather_jacket.jpg" alt="" srcset="" />
        </div>
        <hr />
        <div class="products">
          <div class="info-product">
            <p>
              Modern Leather Boots
              <span class="price text-decoration-line-through">$50</span>
            </p>
            <p class="price text-decoration-underline mt-2">30</p>
          </div>
          <img src="public/img/modern_leather_boots.jpg" alt="" srcset="" />
        </div>
        <hr />
      </div>
      <div class="card">
        <div class="title-card mb-3">T O P R A T E D</div>
        <div class="products">
          <div class="info-product">
            <p>Leather Gloves</p>
            <font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon class="icon" icon="fa-solid fa-star" />
            <div class="prices d-flex">
              <p class="price mt-1">$45</p>
            </div>
          </div>
          <img src="public/img/leather_gloves.jpg" alt="" srcset="" />
        </div>
        <hr />
        <div class="products">
          <div class="info-product">
            <p>Black Leather Jacket</p>
            <font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon class="icon" icon="fa-solid fa-star" />
            <div class="prices d-flex">
              <p class="price text-decoration-line-through me-1">$235</p>
              <span class="price text-decoration-underline">$200</span>
            </div>
          </div>
          <img
            src="public/img/black_elegant_leather_jacket.jpg"
            alt=""
            srcset=""
          />
        </div>
        <hr />
        <div class="products">
          <div class="info-product">
            <p>Spring Printed Dress</p>
            <font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon class="icon" icon="fa-solid fa-star" />
            <div class="prices d-flex">
              <p class="price mt-1">$47</p>
            </div>
          </div>
          <img src="public/img/spring_printed_dress.jpg" alt="" srcset="" />
        </div>
        <hr />
      </div>
      <div class="card">
        <div class="title-card mb-3">L A T E S T R E V I E W S</div>
        <div class="products">
          <div class="info-product">
            <p>Black Leather Jacket</p>
            <font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon class="icon" icon="fa-solid fa-star" />
            <div class="prices d-flex">
              <p class="mt-1">By Admin</p>
            </div>
          </div>
          <img
            src="public/img/black_elegant_leather_jacket.jpg"
            alt=""
            srcset=""
          />
        </div>
        <hr />
        <div class="products">
          <div class="info-product">
            <p>Leather Gloves</p>
            <font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon class="icon" icon="fa-solid fa-star" />
            <p class="mt-1">By Beardman</p>
          </div>
          <img src="public/img/leather_gloves.jpg" alt="" srcset="" />
        </div>
        <hr />
        <div class="products">
          <div class="info-product">
            <p>Spring Printed Dress</p>
            <font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon
              class="icon"
              icon="fa-solid fa-star"
            /><font-awesome-icon class="icon" icon="fa-solid fa-star" />
            <p class="mt-1">By Admin</p>
          </div>
          <img src="public/img/spring_printed_dress.jpg" alt="" srcset="" />
        </div>
        <hr />
      </div>
    </div>
  </section>
  <section class="brand-logos">
    <h5 class="title">BRAND LOGOS</h5>
    <div class="container">
      <ul>
        <li v-for="logo in logos">
          <img :src="logo" alt="" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.collection {
  display: flex;
  margin-bottom: 100px;
  div {
    width: calc(100% / 3);
    height: 500px;
  }
  .winter {
    background-image: url(../../public/img/winter_collection_bg.jpg);
    background-size: cover;
  }
  .spring {
    background-image: url(../../public/img/spring_collection_bg.jpg);
    background-size: cover;
  }
  .autumn {
    background-image: url(../../public/img/autumn_collection_bg.jpg);
    background-size: cover;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    color: white;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      padding-bottom: 10px;
    }

    button {
      border: 1px solid white;
      background-color: rgb(255, 255, 255, 0.3);
      color: white;
      border-radius: 20px;
      padding: 10px 20px;
      margin-bottom: 30px;
      transition: 0.5s;

      &:hover {
        background-color: rgb(255, 255, 255, 0);
      }
    }
  }
}

.best-seller {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      height: 1px;
      width: 20px;
      background-color: lightgray;
      flex-grow: 1;
    }
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0 40px;
    }
  }

  .carousel {
    width: 1200px;
    position: relative;
    overflow: hidden;

    .cards-container {
      display: flex;
      width: 1450px;
      .card-el {
        width: 235px;
        height: 305px;
        border: none;

        img {
          width: 100%;
        }
      }

      .go-prev {
        background-color: #c2c2c2;
        color: black;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        &:active .cards-container {
          transform: translateX(200px);
        }

        .icon {
          font-size: 30px;
        }
      }
      .go-next {
        color: black;
        background-color: #c2c2c2;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;

        .icon {
          font-size: 30px;
        }
      }
    }
  }
}

.promo {
  height: 500px;
  background-image: url(../../public/img/bkgd_confetti-compressor.jpg);
  background-size: cover;
  background-position: center;

  .cards-container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .left-card {
    height: 400px;
    width: 600px;
    background-image: url(../../public/img/promo_box_1_bg.jpg);
    background-size: cover;
    background-position: center;
  }
  .right-card {
    height: 400px;
    width: 600px;
    background-image: url(../../public/img/promo_box_2_bg.jpg);
    background-size: cover;
    background-position: center;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: white;

    h2 {
      font-size: 3rem;
    }

    button {
      border: 1px solid white;
      background-color: rgb(255, 255, 255, 0.3);
      color: white;
      border-radius: 20px;
      padding: 10px 20px;
      margin-bottom: 30px;
      transition: 0.5s;

      &:hover {
        background-color: rgb(255, 255, 255, 0);
      }
    }
  }
}

.new-arrivals {
  display: flex;
  flex-direction: column;
  margin: 120px 0;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      height: 1px;
      width: 20px;
      background-color: lightgray;
      flex-grow: 1;
    }
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0 40px;
    }
  }
  .carousel {
    width: 1400px;
    position: relative;
    overflow: hidden;

    .cards-container {
      display: flex;
      width: 2200px;
      .card-el {
        width: 285px;
        height: 370px;
        // border: none;

        img {
          width: 100%;
        }
      }

      .go-prev {
        background-color: #c2c2c2;
        color: black;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        &:active .cards-container {
          transform: translateX(200px);
        }

        .icon {
          font-size: 30px;
        }
      }
      .go-next {
        color: black;
        background-color: #c2c2c2;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;

        .icon {
          font-size: 30px;
        }
      }
    }
  }
}

.testimonials {
  height: 500px;
  background-image: url(../../public/img/testimonials_home_1_bg.jpg);
  background-size: cover;
  background-position: center;

  .content {
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-bottom: 30px;
    }
    span {
      font-weight: bold;
    }

    p {
      width: 900px;
      text-align: center;
    }

    .message {
      font-style: italic;
    }

    .icon {
      margin-right: 5px;
      cursor: pointer;
    }

    .active {
      background-color: white;
      border-radius: 50%;
    }
  }
}

.blog {
  display: flex;
  flex-direction: column;
  margin: 120px 0;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      height: 1px;
      width: 20px;
      background-color: lightgray;
      flex-grow: 1;
    }
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0 40px;
    }
  }

  .articles {
    display: flex;
    gap: 50px;
    margin-top: 60px;

    .card {
      width: calc(100% / 3);
      border: none;

      // img {
      //   transition: 1s;
      //   width: 100%;
      // }

      .title-card {
        margin: 5px 0 0 0;
        font-weight: bold;
      }

      small {
        margin-bottom: 10px;
        font-size: 0.7rem;
      }

      .description {
        font-size: 0.9rem;
        color: rgb(105, 105, 105);
      }
    }
  }
}

.summary {
  margin-top: 80px;
  margin-bottom: 80px;

  .cards-container {
    display: flex;
    gap: 40px;
  }

  .card {
    width: calc(100% / 4);
    border: none;

    .products {
      display: flex;
      justify-content: space-between;

      p {
        margin: 0;
      }

      img {
        width: 50px;
      }

      .icon {
        color: #427ed1;
      }

      .price {
        font-weight: bold;
        margin: 0;
      }
    }
  }
}

.brand-logos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  height: 350px;

  .title {
    margin-bottom: 50px;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
}
</style>
