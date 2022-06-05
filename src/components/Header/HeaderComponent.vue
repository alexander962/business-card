<template>
  <div class="header">
    <nav class="desktop-navigation">
      <a href="#" class="active"> Home </a>
      <a href="#">About me</a>
      <a href="#">Skills</a>
      <a href="#">Portfolio</a>
      <a href="#">Contacts</a>
    </nav>
  </div>
</template>

<script>
import image from "../../assets/img/header/burger.svg";

export default {
  data() {
    return {
      image,
    };
  },
  name: "HeaderComponent",
  props: {
    msg: String,
  },
};
</script>

<style lang="sass" scoped src="./Header.sass"></style>
