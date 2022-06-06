<template>
  <div class="content">
    <PromoComponent />
    <AboutComponent />
    <SkillsComponent />
    <PortfolioComponent />
  </div>
</template>

<script>
import PromoComponent from "@/components/Content/Promo/PromoComponent";
import AboutComponent from "@/components/Content/About/AboutComponent";
import SkillsComponent from "@/components/Content/Skills/SkillsComponent";
import PortfolioComponent from "@/components/Content/Portfolio/PortfolioComponent";

export default {
  name: "ContentComponent",
  props: {
    msg: String,
  },
  components: {
    PromoComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
  },
};
</script>

<style lang="sass" scoped src="./Content.sass"></style>
