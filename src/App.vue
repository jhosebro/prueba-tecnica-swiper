<template>
  <div id="app">
    <NavbarMenu />
    <MainSection />
  </div>
</template>

<script>
import NavbarMenu from './components/navbar.vue';
import MainSection from './components/main-section.vue';

export default {
  name: 'App',
  components: {
    NavbarMenu,
    MainSection
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  background-color: #24292E;
}

</style>
