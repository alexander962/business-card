<template>
  <div class="footer" id="contacts">
    <h2 class="footer__title">Контакты</h2>
    <div class="footer__subtitle">
      Связаться со мной вы можете любым удобным для вас способом:
    </div>
    <div class="footer__text">
      Позвонив или написав по номеру: <span>89885641851</span>
    </div>
    <div class="footer__text">
      Написав на почту: <span>sanyadeveloper2022@gmail.com</span>
    </div>
    <div class="footer__text">Написав в вк: <span>id233421393</span></div>
    <div class="footer__text">
      Посмотреть мой гитхаб вы можете по ссылке:
      <a href="https://github.com/alexander962"
        >https://github.com/alexander962</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    msg: String,
  },
};
</script>

<style lang="sass" scoped src="./Footer.sass"></style>
