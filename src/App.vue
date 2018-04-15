<template>
  <div id="app">
    <el-container>
        <el-header>
          <nav-bar />
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>Dravtar Demo</el-footer>
  </el-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  },
  created () {}
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
