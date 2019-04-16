import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('@/views/home/Home')
    },
    {
      path: "/city",
      name: "City",
      component: () => import('@/views/city/City')
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: () => import('@/views/detail/Detail')
    }
  ],
  scrollBehavior () {
    return { x: 0,y: 0 }
  }

});
