<template>
  <div class="promo" id="home">
    <div class="promo-main">
      <div class="promo-main__text">
        <div class="promo-main__block">
          <h2>Shamraev Alexander</h2>
          <span
            >Frontend developer <br />
            26 years old, Taganrog</span
          >
          <div class="promo-main__lang">
            <span>RU</span><span>|</span><span class="active">ENG</span>
          </div>
        </div>
        <img :src="image" alt="" class="burger" @click="openMobileModal()" />
      </div>
      <div class="promo-main__img"></div>
    </div>
  </div>

  <div class="header-mobile" v-if="isOpen">
    <div class="header-mobile__block">
      <nav class="header-mobile__navigation">
        <a href="#" class="active">Home</a>
        <a href="#">About me</a>
        <a href="#">Skills</a>
        <a href="#">Portfolio</a>
        <a href="#">Contacts</a>
      </nav>
      <img :src="image" alt="" class="burger" @click="openMobileModal()" />
    </div>

    <div class="promo-main__lang-mobile">
      <span>RU</span><span>|</span><span class="active">ENG</span>
    </div>
  </div>
</template>

<script>
import image from "../../../assets/img/header/burger.svg";
import promoTitle from "../../../assets/img/promo/promo-main.jpg";

export default {
  data() {
    return {
      image,
      promoTitle,
      isOpen: false,
    };
  },
  methods: {
    openMobileModal: function () {
      this.isOpen = !this.isOpen;
    },
  },
  name: "PromoComponent",
};
</script>

<style lang="sass" scoped src="./Promo.sass"></style>
