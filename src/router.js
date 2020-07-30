import VueRouter from 'vue-router'
import Vue from 'vue'
import ListBook from './views/ListBook'
import AddBook from './views/AddBook'
import UpdateBook from './views/UpdateBook'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/list',
      component: ListBook
    },
    {
      path: '/add',
      component: AddBook
    },
    {
      path: '/update/:id',
      component: UpdateBook
    },
  ]
})