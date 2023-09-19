<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      menuLinks: ["Home", "Shop", "Products", "Categories", "News", "Elements"],
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <header>
    <section class="upper-header container">
      <div>
        <font-awesome-icon class="icons" icon="fa-brands fa-facebook-f" />
        <font-awesome-icon class="icons" icon="fa-brands fa-twitter" />
        <font-awesome-icon class="icons" icon="fa-brands fa-instagram" />
        <font-awesome-icon class="icons" icon="fa-brands fa-youtube" />
      </div>
      <div class="account-info">
        <!-- <a href="#">Shopping Cart</a> -->
        <button type="button">Shopping Cart</button>

        <div class="btn-group">
          <button
            class="dropdown-toggle my-account"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My Account
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
        <div class="btn-group">
          <button
            class="dropdown-toggle cart"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <font-awesome-icon icon="fa-solid fa-cart-shopping" /> CART
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Show Cart</a></li>
            <li><a class="dropdown-item" href="#">Empty your cart</a></li>
            <li><a class="dropdown-item" href="#">Go to purchase</a></li>
          </ul>
        </div>
      </div>
    </section>
    <hr />
    <section class="lower-header container">
      <div class="logo">
        <img
          src="../../public/img/classic_shop_logo2x.png"
          alt=""
          width="200"
        />
      </div>
      <div class="links">
        <ul>
          <li v-for="link in menuLinks">
            {{ link }}
            <font-awesome-icon
              v-show="link !== 'News'"
              icon="fa-solid fa-angle-down"
            />
          </li>
          <button type="button" class="btn">SHOP NOW!</button>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </ul>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.upper-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 0.9rem;

  .icons {
    margin-right: 10px;
    font-size: 1.1rem;
    color: #494949;
  }
  .account-info {
    display: flex;
    height: 100%;
  }
  button {
    background-color: transparent;
    border: none;
    color: #aaaaaa;
    height: 100%;
    padding: 0 15px;
    &:hover {
      background-color: #fafafa;
    }
  }
  .my-account {
    border-left: 1px solid #aaaaaa;
    border-right: 1px solid #aaaaaa;
  }
  .cart {
    background-color: #fafafa;
    width: 180px;
    color: #494949;
  }
}
hr {
  margin: 0;
  padding: 0;
  color: #aaaaaa;
}

.lower-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;

  .logo {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    height: 134px;
    display: flex;
    align-items: center;
    color: darkgray;

    * {
      cursor: pointer;
    }

    li {
      margin-left: 40px;
      height: 100%;
      line-height: 134px;
      font-size: 0.9rem;

      &:first-child {
        border-top: 1px solid #427ed1;
        color: #427ed1;
      }

      &:hover {
        border-top: 1px solid #427ed1;
        color: #427ed1;
      }
    }
    button {
      border-radius: 20px;
      background-color: #427ed1;
      font-size: 0.8rem;
      color: white;
      padding: 10px 15px;
      margin: 0 35px;

      &:hover {
        background-color: #6397e0;
      }
    }
  }
}
</style>
