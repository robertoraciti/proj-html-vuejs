<script>
import jumbotron from "./_jumbotron.vue";

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
          type: "men",
        },
        {
          path: "public/img/black_leather_suit-200x260.jpg",
          title: "Black Leather Suit",
          description: "Jackets,Men",
          currentPrice: "$176",
          type: "men",
        },
        {
          path: "public/img/blue_jacket_and_white_stripe_tee-200x260.jpg",
          title: "Blue Jacket & Stripe Tee",
          description: "Jackets,Men,Suits",
          currentPrice: "$580",
          type: "men",
        },
        {
          path: "public/img/modern_black_leather_suit-200x260.jpg",
          title: "Modern Black Leather Suit",
          description: "Jackets,Men",
          currentPrice: "$96",
          type: "men",
        },
      ],
    };
  },

  components: {
    jumbotron,
  },
};
</script>

<template>
  <jumbotron />
  <section class="featured-prod container mt-5">
    <div class="title">
      <hr />
      <h2>Featured Products</h2>
      <hr />
    </div>
    <p class="text-center">Must have products from our top sellers</p>
    <div class="btn-cards">
      <button class="active">Men</button>
      <button>Women</button>
      <button>Accessories</button>
    </div>
    <div class="cards container mt-5">
      <div v-for="card in cards" class="card col-3 border border-0">
        <img :src="card.path" alt="" srcset="" />
        <p>{{ card.title }}</p>
        <small>{{ card.description }}</small>
        <p>
          <span class="text-decoration-line-through me-2">{{
            card.oldPrice
          }}</span>
          <span>{{ card.currentPrice }}</span>
        </p>
      </div>
    </div>
  </section>
  <section class="collection">
    <div class="winter">
      <!-- <img src="../../public/img/winter_collection_bg.jpg" alt="" /> -->
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
      <!-- <img src="../../public/img/spring_collection_bg.jpg" alt="" /> -->
    </div>
    <div class="autumn">
      <div class="content">
        <h2>Autumn Collection</h2>
        <p>RICH AND COMFORTABLE</p>
        <button>VIEW MORE</button>
      </div>
      <!-- <img src="../../public/img/autumn_collection_bg.jpg" alt="" /> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.featured-prod {
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;

  p {
    color: gray;
  }
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

.btn-cards {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    background-color: #f6f6f6;
    border: 1px solid lightgray;
    padding: 10px 50px;

    &:hover {
      background-color: transparent;
    }
  }
  .active {
    background-color: transparent;
  }
}

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
    }
  }
}

.cards {
  display: flex;
  gap: 5px;

  p {
    color: black;
    font-weight: bold;
    margin: 0;
  }
  small {
    margin: 5px 0;
  }

  span {
    color: #427ed1;
  }
}
</style>
