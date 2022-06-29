import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Inicio from '../views/inicio.vue'
import CreacionDeCuenta from '../views/creaciondecuenta.vue'
import RecuperarPass from '../views/recuperarcontrasea.vue'
import Perfil from '../views/perfil-c-v-p.vue'
import PerfilUsuario from '../views/perfil'
import EditarCuenta from '../views/editarperfil'
import CambiarPass from '../views/cambiarcontrasea'
import Contacto from '../views/contacto-v2'
import Recomendaciones from '../views/recomendaciones'
import SoporteTecnico from '../views/soportetcnico'
import CreacionCVP from '../views/creacinde-c-v-p'

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
    path: '/perfilcvp/:id',
    name: 'perfil',
    component: Perfil
  },
  {
    path: '/perfil',
    name: 'perfilUsuario',
    component: PerfilUsuario
  },
  {
    path: '/editarCuenta',
    name: 'editarCuenta',
    component: EditarCuenta
  },
  {
    path: '/cambiarPass',
    name: 'cambiarContrasea',
    component: CambiarPass
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/recomendaciones',
    name: 'recomendaciones',
    component: Recomendaciones
  },
  {
    path: '/soporteTecnico',
    name: 'soporteTecnico',
    component: SoporteTecnico
  },
  {
    path: '/creacionCVP',
    name: 'creacionCVP',
    component: CreacionCVP
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
