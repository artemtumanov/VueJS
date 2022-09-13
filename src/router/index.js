import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../../pages/DashBoard'
import AboutPage from '../../pages/AboutPage'
import NotFound from '../../pages/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/dashboard/:page',
      component: DashBoard
    },
    {
      path: '/aboutpage',
      name: 'aboutpage',
      component: AboutPage
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/notfound'
    }
  ]
})

const titles = {
  dashboard: 'Dashboard',
  aboutpage: 'About',
  notfound: 'Not Found'
};

router.afterEach((to) => {
  document.title = titles[to.name]
})

export default router
