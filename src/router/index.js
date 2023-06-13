import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import NotAuthorize from '../views/NotAuthorize.vue'
import AddProductView from '../views/AddProductView.vue'
import CartView from '../views/CartView.vue'
import ProductsView from '../views/ProductsView.vue'
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
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: { RequireAuth: true }
    },
    {
      path: '/products/:id',
      name: 'productsID',
      component: ProductsView
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProductView,
      meta: { RequireAuth: true }
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
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
