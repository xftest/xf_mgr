<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="../../assets/logo.png" alt="">
      <div class="title">图书管理系统后台</div>
    </div>
    <div class="form" >
      <a-tabs size="large">
        <a-tab-pane key="login" tab="登录">
          <div class="item">
            <a-input size="large" placeholder="请输入用户名/身份证号/手机号">
              <template #prefix><UserOutlined /></template>
            </a-input>
          </div>
          <div class="item">
             <a-input size="large" placeholder="请输入密码">
               <template #prefix><LockOutlined /></template>
             </a-input>
          </div>
          <div class="item">
            <a href="">忘记密码</a>
          </div>
          <div class="item">
            <a-button size="large" type="primary">登录</a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="register" tab="注册">
          <div class="item">
            <a-input
              size="large"
              placeholder="请输入用户名/身份证号/手机号"
              v-model:value="regForm.account"
            >
              <template #prefix><UserOutlined /></template>
            </a-input>
          </div>
          <div class="item">
             <a-input
              size="large"
              placeholder="请输入密码"
              v-model:value="regForm.password"
             >
               <template #prefix><LockOutlined /></template>
             </a-input>
          </div>
           <div class="item">
             <a-input size="large" placeholder="邀请码">
              <template #prefix><MailOutlined /></template>
             </a-input>
          </div>
          <div class="item">
            <a-button
              size="large"
              type="primary"
              @click="submit"
            >
              注册
            </a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index"></script>

<!-- lang 语言预处理器 -->
<!-- 当style标签具有该scoped属性时，其CSS将仅应用于当前组件的元素 -->
<style lang="scss" scoped>
  @import './index.scss';
</style>
