<template>
  <div class="hello">
    <HeaderComponent />
    <ContentComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './Header/HeaderComponent.vue'
import ContentComponent from './Content/ContentComponent.vue'
import FooterComponent from './Footer/FooterComponent.vue'

export default {
  name: 'MainComponent',
  props: {
    msg: String
  },
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent
  }
}
</script>

<style lang="sass" scoped src="./Main.sass"></style>
