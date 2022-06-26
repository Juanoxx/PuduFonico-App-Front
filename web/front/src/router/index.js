import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login.vue'
import Inicio from '../views/inicio.vue'
import CreacionDeCuenta from '../views/creaciondecuenta.vue'
import RecuperarPass from '../views/recuperarcontrasea.vue'
import Perfil from '../views/perfil-c-v-p.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/creaciondecuenta',
    name: 'creaciondecuenta',
    component: CreacionDeCuenta
  },
  {
    path: '/recuperarpass',
    name: 'recuperarcontraseña',
    component: RecuperarPass
  },
  {
    path: '/perfilcvp/1',
    name: 'perfil',
    component: Perfil
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
