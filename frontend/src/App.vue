<template>
	
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Header />
  <Login/>
  <Posts/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Posts from './components/Posts.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Login,
    Posts
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
div {
  /* border: 1px solid black;
  border-radius: 10px; */
  margin: 20px 0;
}
</style>
