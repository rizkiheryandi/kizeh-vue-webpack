import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes
})

// Scroll to top after route changed
router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content')

    if (mainContent) {
      mainContent.scrollTop = 0
    }

    next()
  })
})

export default router
