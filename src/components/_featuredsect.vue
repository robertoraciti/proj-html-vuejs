<script>
// import MyComponent from "./components/MyComponent.vue";

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
        },
        {
          path: "public/img/black_leather_suit.jpg",
          title: "Black Leather Suit",
          description: "Jackets,Men",
          currentPrice: "$176",
          type: "Men",
          active: true,
          bestseller: true,
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
        },
        {
          path: "public/img/modern_love_tee.jpg",
          title: "Modern Love Tee",
          description: "T-shirts, Women",
          currentPrice: "$68",
          type: "Women",
          active: false,
          bestseller: true,
        },
        {
          path: "public/img/black_leather_jacket.jpg",
          title: "Black Jacket",
          description: "Jackets,Women",
          currentPrice: "$125",
          type: "Women",
          active: false,
          bestseller: true,
        },
        {
          path: "public/img/hipster_black_top.jpg",
          title: "Hipster Black Top",
          description: "T-Shirts,Women",
          currentPrice: "$57",
          type: "Women",
          active: false,
          bestseller: true,
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
      categories: ["Men", "Women", "Accesories"],
      activeCategories: 0,
      hiddenImg: 0,
    };
  },

  methods: {
    changeCategories(index) {
      this.activeCategories = index;
      console.log(this.activeCategories);
    },

    showResult() {
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].active = false;
        if (this.activeCategories == 0 && this.cards[i].type.includes("Men")) {
          console.log(this.cards[i].type);
          this.cards[i].active = true;
        } else if (
          this.activeCategories == 1 &&
          this.cards[i].type.includes("Women")
        ) {
          this.cards[i].active = true;
        } else if (
          this.activeCategories == 2 &&
          this.cards[i].type.includes("Accessories")
        ) {
          this.cards[i].active = true;
        }
      }
    },

    // changeCard(index) {
    //   this.hiddenImg = index;
    //   this.hiddenImg++;

    //   console.log(this.hiddenImg);
    // },
  },
};
</script>

<template>
  <section class="featured-prod container mt-5">
    <div class="title">
      <div></div>
      <h2>Featured Products</h2>
      <div></div>
    </div>
    <p class="text-center">Must have products from our top sellers</p>
    <div class="btn-cards">
      <button
        v-for="(category, index) in categories"
        @click="changeCategories(index), showResult()"
        :class="index == activeCategories ? 'active' : ''"
      >
        {{ category }}
      </button>
    </div>
    <div class="cards container mt-5">
      <div
        v-for="(card, index) in cards"
        v-show="card.active == true"
        class="card col-3 border border-0"
      >
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
}

.btn-cards {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    background-color: #f6f6f6;
    border: 1px solid lightgray;
    padding: 10px 50px;
    transition: 0.5s;

    &:hover {
      background-color: transparent;
    }
  }
  .active {
    background-color: transparent;
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
