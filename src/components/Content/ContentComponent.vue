<template>
  <div class="content">
    <PromoComponent />
  </div>
</template>

<script>

import PromoComponent from "@/components/Content/Promo/PromoComponent";

export default {
  name: 'ContentComponent',
  props: {
    msg: String
  },
  components: {
    PromoComponent
  }
}
</script>

<style lang="sass" scoped src="./Content.sass"></style>