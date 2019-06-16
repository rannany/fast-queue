<template>
  <div id="app">
    <img id="logo" class="img-responsive" src="https://web.grupomateus.com.br/static/images/logo_grupo.513abbaedcbb.png" alt="Mateus. Somos um só coração.">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CheckoutList></CheckoutList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CheckoutList from './components/CheckoutList'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CheckoutList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#2980b9;
}

#app img {
  margin-top: 30px;
  width: 150px;  
}
</style>
