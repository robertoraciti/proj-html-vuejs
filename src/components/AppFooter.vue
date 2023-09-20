<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
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
</style>
