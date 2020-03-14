<template>
  <div class="hm-header">
    <div class="left" @click="$router.go(-1)">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.hm-header {
  height: 40px;
  line-height: 40px;
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  .left,
  .right {
    width: 25px;
  }
  .center {
    flex: 1;
    font-weight: 700;
  }
}
</style>
