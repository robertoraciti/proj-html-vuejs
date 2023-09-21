<script>
import { store } from "./data/store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <div class="sticky-square">
    <div class="square">
      <font-awesome-icon class="icon" icon="fa-solid fa-box" />
      <p>Prebuilts</p>
    </div>
    <div class="square">
      <font-awesome-icon class="icon" icon="fa-solid fa-cart-shopping" />
      <p>Buy-Now</p>
    </div>
  </div>
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,500&display=swap");
body {
  font-family: "Montserrat", sans-serif;
  position: relative;
}

.sticky-square {
  position: fixed;
  right: 10px;
  z-index: 1;
  .square {
    width: 65px;
    height: 65px;
    background-color: white;
    box-shadow: 5px 5px 30px darkgrey;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      font-size: 1.6rem;
      margin: 10px 0 5px 0;
      cursor: pointer;
    }

    p {
      font-size: 0.7rem;
      font-weight: bold;
    }
  }
}
</style>
