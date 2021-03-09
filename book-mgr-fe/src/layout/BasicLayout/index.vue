<template>
  <div class="basic-layout">
    <div class="app-header">
      <div class="left">
        <img src="../../assets/logo.png" alt="">
        <div class="title">图书管理系统</div>
      </div>
      <div class="right">
        <div class="hello-msg">你好，xx</div>
        <div class="logout">退出</div>
      </div>
    </div>

    <div class="app-header-placeholver"></div>
    <div class="app-content">
      <div class="left">
         <na />
         <app-nav />
      </div>
      <div class="right">
        <router-view /> 
        <!-- 路由容器，根据路由会变化对应内容。路由的展示区域 -->
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>