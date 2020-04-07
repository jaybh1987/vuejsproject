<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <firstForm></firstForm> -->

    <!-- <br> -->
    <formsample></formsample>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
// import firstForm from './components/firstform'
import formsample from './components/formSampleOne'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // firstForm,
    formsample
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
