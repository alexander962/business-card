<template>
  <div class="portfolio" id="portfolio">
    <div class="portfolio__title">Портфолио домашних проектов</div>
    <div class="portfolio-block">
      <video class="portfolio-block__video" controls>
        <source :src="videoTrade" type="video/mp4" />
      </video>
      <div class="portfolio-block__text">
        Вёрстка проекта о трейдинге. Написан проект на next.js + используется
        tailwind, ссылка на гитхаб:
        <a href="https://github.com/alexander962/trade" target="_blank"
          >https://github.com/alexander962/trade</a
        >
      </div>
    </div>

    <div class="portfolio-block">
      <video class="portfolio-block__video" controls>
        <source :src="reduxShop" type="video/mp4" />
      </video>
      <div class="portfolio-block__text">
        Проект - мини интернет магазин с телефонами. Написан проект на react +
        используется redux, ссылка на гитхаб:
        <a href="https://github.com/alexander962/redux-shop" target="_blank"
          >https://github.com/alexander962/redux-shop</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import videoTrade from "@/assets/videos/trade-video.mp4";
import reduxShop from "@/assets/videos/redux-shop.mp4";

export default {
  data() {
    return {
      videoTrade,
      reduxShop,
    };
  },
  name: "PortfolioComponent",
};
</script>

<style lang="sass" scoped src="./Portfolio.sass"></style>
