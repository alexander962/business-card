<template>
  <div class="skills" id="skills">
    <h2 class="skills__title">Навыки</h2>
    <h3 class="skills__subtitle">Я владею следующими навыками:</h3>
    <div class="skills-blocks">
      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="htmlIcon" alt="" />
        </div>
        <div class="skills-block__text">HTML</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="cssIcon" alt="" />
        </div>
        <div class="skills-block__text">CSS,SCSS,SASS</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="jsIcon" alt="" />
        </div>
        <div class="skills-block__text">JS</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="reactIcon" alt="" />
        </div>
        <div class="skills-block__text">React</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="vueIcon" alt="" />
        </div>
        <div class="skills-block__text">Vue</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="reduxIcon" alt="" />
        </div>
        <div class="skills-block__text">Redux</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="gitIcon" alt="" />
        </div>
        <div class="skills-block__text">Git</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="nextIcon" alt="" />
        </div>
        <div class="skills-block__text">Next</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="jqueryIcon" alt="" />
        </div>
        <div class="skills-block__text">Jquery</div>
      </div>

      <div class="skills-block">
        <div class="skills-block__img">
          <img :src="tailwindIcon" alt="" />
        </div>
        <div class="skills-block__text">Tailwind</div>
      </div>
    </div>
  </div>
</template>

<script>
import htmlIcon from "@/assets/img/skills/html-icon.png";
import cssIcon from "@/assets/img/skills/css-icon2.png";
import jsIcon from "@/assets/img/skills/js-icon.png";
import reactIcon from "@/assets/img/skills/react-icon.png";
import vueIcon from "@/assets/img/skills/vue-icon.png";
import reduxIcon from "@/assets/img/skills/redux-icon.png";
import gitIcon from "@/assets/img/skills/git-icon.png";
import nextIcon from "@/assets/img/skills/next-icon.png";
import jqueryIcon from "@/assets/img/skills/jquery-icon.jpg";
import tailwindIcon from "@/assets/img/skills/tailwind-icon.png";

export default {
  data() {
    return {
      htmlIcon,
      cssIcon,
      jsIcon,
      reactIcon,
      vueIcon,
      reduxIcon,
      gitIcon,
      nextIcon,
      jqueryIcon,
      tailwindIcon,
    };
  },
  name: "SkillsComponent",
};
</script>

<style lang="sass" scoped src="./Skills.sass"></style>
