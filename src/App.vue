<script>
import TabBar from "./components/tabBar/TabBar.vue";
import TabBarItem from "./components/tabBar/TabBarItem.vue";
export default{  
  components:{
    'TabBar':TabBar,
    'TabBarItem':TabBarItem
  }
}
</script>

<template>  
<div>
    <h2>测试修改源文件</h2>
    <router-view></router-view>
    <TabBar>
      <!--自定义path属性，用于传值 textColor用于传递文本颜色-->
      <TabBarItem path="/home" textColor='yellow'>
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/index.svg" />
        </template>
         <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/index-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/course" textColor='pink'>
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/course.svg" />
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/course-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>课程</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/friends" textColor='red'>
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/friends.svg" />
        </template>
         <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/friends-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>朋友圈</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/study" textColor='green'>
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/study.svg" />
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/study-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>学习</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/my">        
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/my.svg" />
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/my-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>我的</div>
        </template>       
      </TabBarItem>
    </TabBar> 
</div>
</template>

<style>
@import "./assets/css/common.css";
</style>
