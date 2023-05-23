import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import SystemView from '../views/SystemView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import NotAuthorize from '../views/NotAuthorize.vue'
import ConfigView from '../views/ConfigView.vue'
import PantalonesView from '../views/PantalonesView.vue'
import RemerasView from '../views/RemerasView.vue'
import BuzosView from '../views/BuzosView.vue'
import AgregarRopaView from '../views/AgregarRopaView.vue'
import ComprarView from '../views/ComprarView.vue'

import { useLoginStore } from '../stores/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/system',
      name: 'system',
      component: SystemView,
      meta: { RequireAuth: true }
    },
    {
      path: '/config',
      name: 'config',
      component: ConfigView,
      meta: { RequireAuth: true }
    },
    {
      path: '/pantalones',
      name: 'pantalones',
      component: PantalonesView,
      meta: { RequireAuth: true }
    },
    {
      path: '/remeras',
      name: 'remeras',
      component: RemerasView,
      meta: { RequireAuth: true }
    },
    {
      path: '/buzos',
      name: 'buzos',
      component: BuzosView,
      meta: { RequireAuth: true }
    },
    {
      path: '/agregarRopa',
      name: 'agregarRopa',
      component: AgregarRopaView,
      meta: { RequireAuth: true }
    },
    {
      path: '/comprar',
      name: 'comprar',
      component: ComprarView,
      meta: { RequireAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/notauthorize',
      name: 'notauthorize',
      component: NotAuthorize
    },
    {
      path: '/detail/:number',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/:pathMatch(.*)*',
      name: "NotFound",
      component: NotFoundView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useLoginStore();
  if (to.matched.some(r => r.meta.RequireAuth) && !store.isLogin) {
    next('/notauthorize')
  }
  next()
})


export default router
