<template>
  <div id="app">
    <div class="container">
      <div class='a'>
        <h1 class="jumbotron text-center" style="margin-bottom:0">前端实习</h1>
      </div>
    </div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="http://jlincvin.cn" target="_blank">JlinCvin</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
          <li><router-link to="/">主页</router-link> </li>
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/clock">日记</router-link> </li>
        </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    <div class="jumbotron text-center" style="margin-bottom:0">
        <p>JlinCvin 个人网站  2019-7</p>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
