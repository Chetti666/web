import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'ProductosView',
    component: () => import('../views/Productos.vue')
  },
  {
    path: '/servicios',
    name: 'ServiciosView',
    component: () => import('../views/Servicios.vue')
  },
  {
    path: '/contacto',
    name: 'ContactoView',
    component: () => import('../views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
