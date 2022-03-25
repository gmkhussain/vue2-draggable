import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import EtcPage from '@/views/EtcPage'
import TableGenericPage from '@/views/TableGenericPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/table-generic',
      name: 'table-generic',
      component: TableGenericPage
    },
    {
      path: '/etc',
      name: 'etc',
      component: EtcPage
    }
  ]
})

