import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditForm from '../components/EditForm.vue'
import loginform from '../components/loginform.vue'

import auth from "../Middleware/auth";
import middlewarePipeline from "../Middleware/middleware-pipeline";
import guest from "../Middleware/guest";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/form.vue')
  },
  {
    path: '/editform/:id?',
    name: 'EditForm',
    component:EditForm
  },

  {
    path: '/loginform',
    name: '/loginform',
    meta: {
      middleware: [
          auth, guest
      ]
  },

    components: loginform
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {

  /** Navigate to next if middleware is not applied */
  if (!to.meta.middleware) {
      return next()
  }

  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
  //   store  | You can also pass store as an argument
  }

  return middleware[0]({
      ...context,
      next:middlewarePipeline(context, middleware,1)
  })
})
export default router
