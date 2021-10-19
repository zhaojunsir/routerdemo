<template>
  <div class="tab-bar">  
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from '../tabBar/TabBarItem.vue';
export default {
  name:'TabBar'
};
</script>

<style>
/*底部bar样式 */
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  border-top: 1px solid #cccccc;
  display: flex; /*弹性伸缩盒显示 */
  background-color: #e6e6e6;
}
</style>