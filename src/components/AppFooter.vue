<script>
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";

// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      shopInformations: [
        {
          address: "12345 North Main Street",
          city: "New York, NY 5555555",
          phone: "1.800.555.6789",
          email: "info@company.com",
          website: "Theme-fusion.com",
        },
      ],
      topRated: [
        {
          product: "Leather Gloves",
          currentPrice: "$45",
          imageProd: "public/img/leather_gloves.jpg",
        },
        {
          product: "Black Leather Jacket",
          oldPrice: "$235",
          currentPrice: "$200",
          imageProd: "public/img/black_elegant_leather_jacket.jpg",
        },
        {
          product: "Spring Printed Dress",
          currentPrice: "$47",
          imageProd: "public/img/spring_printed_dress.jpg",
        },
      ],
      recentPosts: [
        "Aenean lobortis sapien enim viverra",
        "Duis ac massa semper maximus",
        "Nun fermint nulla eu justo sem id",
        "Aliquam posuere magna eget nibh",
        "Cras ac nulla ac consecte rutrum",
        "Fusce mattis nunc ut aliquam",
      ],
      tags: [
        "Black",
        "boots",
        "Brown",
        "Casual",
        "D&G",
        "Fabric",
        "flowers",
        "Grey",
        "hat",
        "Hipster",
        "lines",
        "multi-purpose",
        "New York",
        "Outdoors",
        "red",
        "responsive",
        "summer",
        "sweater",
        "Travel",
        "Warm",
        "White",
        "winter",
      ],
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <footer>
    <section class="form-section">
      <div class="container content">
        <div class="text">
          <font-awesome-icon class="icon" icon="fa-regular fa-envelope" />
          <h3>Subscribe now and get special offers</h3>
        </div>
        <div class="email">
          <input
            class="text-box"
            placeholder="Insert your Email"
            type="email"
            name=""
            id=""
          />
          <button>SEND</button>
        </div>
      </div>
    </section>
    <section class="central-footer">
      <div class="container content">
        <div class="cards-container">
          <div class="card card-logo">
            <div class="card-title">
              <img
                src="../../public/img/classic_shop_logo_footer.png"
                alt=""
                srcset=""
                width="200"
              />
            </div>
            <div
              class="informations"
              v-for="shopInformation in shopInformations"
            >
              <p>{{ shopInformation.address }},</p>
              <p>{{ shopInformation.city }}</p>
              <p>Phone: {{ shopInformation.phone }}</p>
              <p>Email: {{ shopInformation.email }}</p>
              <p>Web: {{ shopInformation.website }}</p>
            </div>
            <div>
              <font-awesome-icon class="icons" icon="fa-brands fa-facebook-f" />
              <font-awesome-icon class="icons" icon="fa-brands fa-twitter" />
              <font-awesome-icon class="icons" icon="fa-brands fa-instagram" />
              <font-awesome-icon class="icons" icon="fa-brands fa-youtube" />
            </div>
          </div>
          <div class="card">
            <div class="title-card mb-3 text-light">TOP RATED PRODUCTS</div>
            <div class="products" v-for="product in topRated">
              <div class="info-product">
                <p class="item">{{ product.product }}</p>
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
                  <p v-show="product.oldPrice" class="discount price mt-1">
                    {{ product.oldPrice }}
                  </p>
                  <p class="price mt-1">{{ product.currentPrice }}</p>
                </div>
              </div>
              <img :src="product.imageProd" alt="" srcset="" />
            </div>
          </div>
          <div class="card">
            <div class="card-title">RECENT POSTS</div>
            <div class="content-card" v-for="recentPost in recentPosts">
              <p class="post">> {{ recentPost }}</p>
            </div>
          </div>
          <div class="card">
            <div class="card-title">TAGS</div>
            <div class="tag-card">
              <button class="tag" v-for="tag in tags">{{ tag }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lower-footer">
      <div class="content">
        <p class="copyright">
          © Copyright 2012 - 2023 | Avada Theme by ThemeFusion | All Rights
          Reserved | Powered by WordPress
        </p>
        <div class="icons">
          <font-awesome-icon class="icons" icon="fa-brands fa-cc-visa" />
          <font-awesome-icon class="icons" icon="fa-brands fa-cc-paypal" />
          <font-awesome-icon class="icons" icon="fa-brands fa-cc-mastercard" />
          <font-awesome-icon class="icons" icon="fa-brands fa-cc-discover" />
          <font-awesome-icon class="icons" icon="fa-brands fa-cc-amazon-pay" />
        </div>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.form-section {
  height: 250px;
  background-color: #2e3238;

  .content {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .text {
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;

    .icon {
      color: #71777d;
      font-size: 2rem;
      padding: 20px;
      border-radius: 50%;
      background-color: #2b2e32;
    }
  }

  .text-box {
    height: 40px;
    width: 350px;
    padding-left: 15px;
    border-radius: 20px;
    border: none;
    margin-right: 20px;
  }

  button {
    color: white;
    background-color: #427ed1;
    border-radius: 20px;
    border: none;
    height: 40px;
    width: 140px;
  }
}

.central-footer {
  background-color: #2b2e32;
  height: 500px;

  .content {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .cards-container {
    width: 100%;
    display: flex;
    gap: 30px;

    .card {
      width: calc(100% / 4);
      color: white;
      background-color: transparent;
      border: none;

      .card-title {
        margin-bottom: 20px;
      }

      .post {
        padding-bottom: 10px;
        border-bottom: 1px solid darkgray;

        &:hover {
          cursor: pointer;
          color: darkgray;
        }
      }

      .tag-card {
        display: flex;
        flex-wrap: wrap;

        button {
          margin: 0 5px 5px 0;
          padding: 5px;
          background-color: transparent;
          color: white;
          border: 1px solid darkgray;

          &:hover {
            background-color: #427ed1;
          }
        }
      }
    }

    .card-logo {
      color: white;
      .informations {
        margin: 40px 0;
        p {
          margin: 0;
          font-size: 0.9rem;
        }
      }
      .icons {
        margin-right: 20px;
        font-size: 1.5rem;
        &:hover {
          color: gray;
          cursor: pointer;
        }
      }
    }
    .products {
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid darkgray;

      p {
        margin: 0;
      }

      .item:hover {
        color: #427ed1;
        cursor: pointer;
      }

      img {
        width: 50px;
      }

      .icon {
        color: #427ed1;
      }

      .price {
        font-weight: bold;
        margin: 0 0 10px 0;
      }

      .discount {
        text-decoration: line-through;
      }
    }
  }
}

.lower-footer {
  height: 150px;
  background-color: #1d1f22;

  .content {
    height: 100%;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .copyright {
      color: white;
      font-size: 0.8rem;
    }

    .icons {
      color: white;

      * {
        font-size: 2.5rem;
        margin-right: 10px;
      }
    }
  }
}
</style>
