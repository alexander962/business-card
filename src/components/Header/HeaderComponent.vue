<template>
  <div class="header">
    <div class="header__wrapper">
      <nav class="desktop-navigation">
        <a href="/#home" :class="home && 'active'" @click="homeClick()">Home</a>
        <a href="/#about" :class="about && 'active'" @click="aboutClick()"
          >About me</a
        >
        <a href="/#skills" :class="skills && 'active'" @click="skillsClick()"
          >Skills</a
        >
        <a
          href="/#portfolio"
          :class="portfolio && 'active'"
          @click="portfolioClick()"
          >Portfolio</a
        >
        <a
          href="/#contacts"
          :class="contacts && 'active'"
          @click="contactsClick()"
          >Contacts</a
        >
      </nav>
    </div>
  </div>
</template>

<script>
import image from "../../assets/img/header/burger.svg";

export default {
  data() {
    return {
      image,
      home: true,
      about: false,
      skills: false,
      portfolio: false,
      contacts: false,
    };
  },
  methods: {
    homeClick: function () {
      this.home = true;
      this.about = false;
      this.skills = false;
      this.portfolio = false;
      this.contacts = false;
    },
    aboutClick: function () {
      this.home = false;
      this.about = true;
      this.skills = false;
      this.portfolio = false;
      this.contacts = false;
    },
    skillsClick: function () {
      this.home = false;
      this.about = false;
      this.skills = true;
      this.portfolio = false;
      this.contacts = false;
    },
    portfolioClick: function () {
      this.home = false;
      this.about = false;
      this.skills = false;
      this.portfolio = true;
      this.contacts = false;
    },
    contactsClick: function () {
      this.home = false;
      this.about = false;
      this.skills = false;
      this.portfolio = false;
      this.contacts = true;
    },
  },
  name: "HeaderComponent",
  props: {
    msg: String,
  },
};
</script>

<style lang="sass" scoped src="./Header.sass"></style>
