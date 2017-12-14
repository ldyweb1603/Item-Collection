<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <h1 v-text="title"></h1>
    <h2 v-html="msg"></h2>
    <ul>
      <li v-for="item in items" v-bind:class="{finish:item.isfinish}">{{item.name}}</li>
    </ul>

    <firstcomponent></firstcomponent>
  </div>

</template>

<script>
//ES6语法，相当于
//new Vue({})
import firstcomponent from './components/firstcomponent.vue'
export default {

  name: 'app',//name属性作为组件名称，全局 ID 自动作为组件的 name
  data(){
    return {
      title:'我的第一个vue小项目',
      msg:'<span>****</span>请输入列表项<span>***</span>',
      items:[
        {
          name:'item1',isfinish:false
        },
        {
          name:'item2',isfinish:true
        },

      ],

    }
  },
  components: { firstcomponent },
  methods:{
  },
}
</script>

<style>
.finish {
	color: red;
}
#app>ul>li{
  font-size: 20px;
  line-height:25px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
