// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})






/*
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/!*import vueRouter from './router'*!/
import VueRouter from 'vue-router'
/!*import test from './components/firstcomponent.vue'*!/
Vue.use(VueRouter)

const router=new VueRouter({
  routers:[
    {
      path:'/',
      component:test
    }
  ]
});
Vue.config.productionTip = false

/!* eslint-disable no-new *!/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
*/
