<template>
<!-- labelCol: label 占多少内容 -->
<!-- wrapperCol: 右侧表单 占多少内容 -->
  <div>
    <a-modal 
      title="添加书籍" 
      :visible="visible"
      @ok="onOk"
    >
      <a-form :form="form" :labelCol="{ span:4 }"  :wrapperCol="{ span:18 }">
          <a-form-item label="书名">
            <a-input
                v-model:value="addForm.name" 
                placeholder="请输入书名"
             />
          </a-form-item>

          <a-form-item label="价格">
            <a-input-number :min="0" :max="9999999" v-model:value="addForm.price" style="width:92%"  />&nbsp; 元
          </a-form-item>

          <a-form-item label="作者">
            <a-input v-model:value="addForm.authur" placeholder="请输入作者" />
          </a-form-item>

          <a-form-item label="出版日期">
            <a-month-picker v-model:value="addForm.publishDate" placeholder="请输入出版日期" style="width:100%" />
          </a-form-item>

          <a-form-item label="分类">
            <a-input v-model:value="addForm.classify" placeholder="请输入分类" />
          </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script src="./index.js"></script>
<style scoped lang="scss">

</style>