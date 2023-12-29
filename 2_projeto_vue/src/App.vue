<template>
  <!-- <h1>Olá Caralho!</h1> -->
  <PrimeiroComponente />
</template>

<script>

  import PrimeiroComponente from './components/PrimeiroComponente.vue';

  export default{
    name: 'app',
    components:{
      PrimeiroComponente,
    }
  }
</script>


<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
</style> -->
