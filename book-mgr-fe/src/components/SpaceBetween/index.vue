<template>
  <div class="space-between">
    <slot />  
    <!-- slot 插槽，占位置用的 -->
  </div>
</template>

<style scoped lang="scss">
  .space-between{
    display: flex;
    justify-content: space-between;
  }

</style>