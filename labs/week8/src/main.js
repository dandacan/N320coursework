import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./components/Home.vue"
import Farm from "./components/Farm.vue"

//^^ import the things required to work


//tell vue to use vue routes
Vue.use(VueRouter)


const router = new VueRouter({
  //define where the routes are for the router, if *insert path here*/ then load home, if *path*/farm then load farm
  routes: [
    { path: '/', component: Home },
    { path: '/farm', component: Farm }
  ]
})

//start the vue and put it in the #app on app.vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
