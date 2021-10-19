<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isSelected" name="item-img"></slot>
    <slot v-else name="item-img-selected"></slot>
    <div :style="selectedStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "TabBarItem",
  //props接收传参
  props: {
    path: String,
    textColor:{
      type:String,
      default:'red'
    }
  },
  setup(props) {
    /*setup中获取传递参数，必须添加props */
    const router = useRouter();
    const itemClick = () => {
      router.replace(props.path);
    };

    //设置当前选中项
    const route = useRoute(); //当前路由对象
    const isSelected = computed(() => {
      return route.path.includes(props.path);
    });

    //处理选中文字颜色
    const selectedStyle = computed(()=>{      
      return isSelected.value?{color:props.textColor}:{};//注意computed属性的值获取使用value
    })

    return {
      itemClick,
      isSelected,
      selectedStyle /*setup中的function必须return才能使用 */,
    };
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1; /*均匀分布 */
  height: 49px; /*移动端的下部推荐设计高度 */
  display: flex;
  flex-direction: column; /*纵向布局 */
  justify-items: center; /*主轴居中 */
  align-items: center; /*侧轴居中 */
}
/*图标大小 */
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
.selected {
  color: red;
}
</style>