<template>
  <div class="hello">
  <div class="container">
  <div class="row">
  <div class="col-sm-4">
  <h2>个人简历</h2>
  <router-link to="/img">
  <img id="myImg" src="../assets/111.jpg" alt="个人简历" width="79" height="112">
  </router-link>
  <h3>陈振霖 166-2474-7010</h3>
  <h4>邮箱:</h4>
  <a href="mailto:963510059@qq.com?subject=Hello">963510059@qq.com</a>
  <h4>练习作品：</h4>
  <ul class="nav nav-pills nav-stacked">
    <li><a href="https://github.com/JlinCvin/WEB" target="_blank">WEB网站代码</a></li>
    <li><a href="https://github.com/JlinCvin/-" target="_blank" title='微信小程序'>小程序</a></li>
    <li><a href="https://github.com/JlinCvin/taobao" target="_blank">python爬虫</a></li>
  </ul>
  <hr class="hidden-sm hidden-md hidden-lg">
  </div>
  <div class="col-sm-7">
  <h2>前端实习生 </h2>
  <h5>期望薪资：无要求</h5>
  <h4><b>●广州大学 信息安全专业 本科 数学与信息科学学院</b></h4>
  <h5>2016.9-2020.7</h5>
  <h4><b>●专业课：</b>计算机组成原理，计算机操作系统，
  计算机网络，计算机算法设计与分析，信息论与编码，密码学原理，数据库原理，操作系统安全，软件工程导论
  WEB编程基础，CSS网页设计标准教程，数据结构。</h4><br>
  <h3>●实习时间2019.8-2020.3   实习时长：6个月  </h3><br>
  <h3>●GitHub个人网站:<a href="https://github.com/JlinCvin/" target="_blank">https://github.com/JlinCvin/ </a></h3>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
