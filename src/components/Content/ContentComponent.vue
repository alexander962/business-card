<template>
  <div class="content">
    <PromoComponent />
    <AboutComponent />
  </div>
</template>

<script>
import PromoComponent from "@/components/Content/Promo/PromoComponent";
import AboutComponent from "@/components/Content/About/AboutComponent";

export default {
  name: "ContentComponent",
  props: {
    msg: String,
  },
  components: {
    PromoComponent,
    AboutComponent,
  },
};
</script>

<style lang="sass" scoped src="./Content.sass"></style>
