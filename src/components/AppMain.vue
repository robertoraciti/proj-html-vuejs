<script>
import jumbotron from "./_jumbotron.vue";
import featuredSect from "./_featuredsect.vue";

export default {
  data() {
    return {
      cards: [
        {
          path: "public/img/black_elegant_leather_jacket-200x260.jpg",
          title: "Black Leather Jacket",
          description: "Men,Jackets,Jeans",
          oldPrice: "$235",
          currentPrice: "$230",
          type: "Men",
          active: true,
          bestseller: true,
        },
        {
          path: "public/img/black_leather_suit-200x260.jpg",
          title: "Black Leather Suit",
          description: "Jackets,Men",
          currentPrice: "$176",
          type: "Men",
          active: true,
          bestseller: true,
        },
        {
          path: "public/img/blue_jacket_and_white_stripe_tee-200x260.jpg",
          title: "Blue Jacket & Stripe Tee",
          description: "Jackets,Men,Suits",
          currentPrice: "$580",
          type: "Men",
          active: true,
        },
        {
          path: "public/img/modern_black_leather_suit-200x260.jpg",
          title: "Modern Black Leather Suit",
          description: "Jackets,Men",
          currentPrice: "$96",
          type: "Men",
          active: true,
        },
        {
          path: "public/img/spring_printed_dress-200x260.jpg",
          title: "Spring Printed Dress",
          description: "Dress,Jeans",
          currentPrice: "$47",
          type: "Women",
          active: false,
          bestseller: true,
        },
        {
          path: "public/img/modern_love_tee-200x260.jpg",
          title: "Modern Love Tee",
          description: "T-shirts, Women",
          currentPrice: "$68",
          type: "Women",
          active: false,
          bestseller: true,
        },
        {
          path: "public/img/black_leather_jacket-200x260.jpg",
          title: "Black Jacket",
          description: "Jackets,Women",
          currentPrice: "$125",
          type: "Women",
          active: false,
          bestseller: true,
        },
        {
          path: "public/img/hipster_black_top-200x260.jpg",
          title: "Hipster Black Top",
          description: "T-Shirts,Women",
          currentPrice: "$57",
          type: "Women",
          active: false,
          bestseller: true,
        },
        {
          path: "public/img/casual_leather_belts-200x260.jpg",
          title: "Casual Leather Belts",
          description: "Accessories, Men",
          currentPrice: "$65",
          type: "Accessories",
          active: false,
        },
        {
          path: "public/img/leather_gloves-200x260.jpg",
          title: "Leather Gloves",
          description: "Accessories,Gloves,Men,Women",
          currentPrice: "$45",
          type: "Accessories",
          active: false,
        },
        {
          path: "public/img/modern_leather_boots-200x260.jpg",
          title: "Modern Leather Boots",
          description: "Accessories,Men,Miscellaneous,Shoes",
          oldPrice: "$50",
          currentPrice: "$30",
          type: "Accessories",
          active: false,
        },
        {
          path: "public/img/brown_dress_shoes-200x260.jpg",
          title: "Brown Dress Boots",
          description: "Accessories,Miscellaneous,Shoes, Women",
          oldPrice: "$46",
          currentPrice: "$36",
          type: "Accessories",
          active: false,
        },
      ],

      hiddenImg: 0,
    };
  },
  components: {
    jumbotron,
    featuredSect,
  },
};
</script>

<template>
  <jumbotron />
  <featuredSect />
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
  <section class="best-seller">
    <div class="title">
      <hr />
      <h2>Best Seller</h2>
      <hr />
    </div>
    <p class="text-center text-secondary mt-2">
      Must have products from our top sellers
    </p>
    <div class="carousel container">
      <div v-for="(card, index) in cards" v-show="card.bestseller" class="card">
        <img :src="card.path" alt="" srcset="" />
      </div>
    </div>
  </section>
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
  <section class="new-arrivals">
    <div class="title">
      <hr />
      <h2>New Arrivals</h2>
      <hr />
    </div>
    <p class="text-center text-secondary mt-2">
      Brand new products from top designers
    </p>
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

    button {
      border: 1px solid white;
      background-color: rgb(255, 255, 255, 0.3);
      color: white;
      border-radius: 20px;
      padding: 10px 20px;
      margin-bottom: 30px;

      &:hover {
        background-color: rgb(255, 255, 255, 0);
      }
    }
  }
}

.best-seller {
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;

  .title {
    display: flex;
    justify-content: center;
    hr {
      width: 25%;
    }
    h2 {
      font-size: 2rem;
      margin: 0 40px;
    }
  }

  .carousel {
    display: flex;
    .card {
      width: calc(100% / 5);
      border: none;
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
    hr {
      width: 25%;
    }
    h2 {
      font-size: 2rem;
      margin: 0 40px;
    }
  }
}
</style>
