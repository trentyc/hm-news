<template>
  <div class="hm-button" @click="clickFn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn() {
      // 通知父组件触发点击事件
      this.$emit("click");
    }
  }
};
</script>

<style lang="less" scoped>
.hm-button {
  margin: 20px;
  height: 50px;
  line-height: 50px;
  background-color: #cc3300;
  color: #fff;
  text-align: center;
  border-radius: 25px;
  font-size: 18px;
}
</style>
