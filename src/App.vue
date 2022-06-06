<template class="app">
  <MainComponent />
</template>

<script>
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    MainComponent,
  },
};
</script>

<style>
/*@import "normalize.css";*/
@import "./fonts/gilroy-medium.css";
@import "./fonts/gilroy-bold.css";

html,
body,
#app {
  height: 100%;
  scroll-behavior: smooth;
}

ul,
h2,
p {
  margin: 0;
  padding: 0;
}
</style>
