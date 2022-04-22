<template>
  <div class="header">
    <nav>
      <a href="#" class="active">
        Home
      </a>
      <a href="#">About me</a>
      <a href="#">Skills</a>
      <a href="#">Portfolio</a>
      <a href="#">Contacts</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

<style lang="sass" scoped src="./Header.sass"></style>