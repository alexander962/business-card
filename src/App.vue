<template class="app">
  <MainComponent />
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
</script>

<style>
  /*@import "normalize.css";*/
  @import './fonts/gilroy-medium.css';
  @import './fonts/gilroy-bold.css';

  html, body, #app {
    height: 100%;
  }
</style>
