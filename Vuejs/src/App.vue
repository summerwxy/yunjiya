<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyFloater></MyFloater>

    <router-view></router-view>

    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/commons/MyHeader'
import MyFooter from './components/commons/MyFooter'
import MyFloater from './components/commons/MyFloater'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    MyFloater
  }
}
</script>

<style>
/*
    <img src="./assets/logo.png">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
