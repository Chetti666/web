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
  },
  {
  path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/mantenimiento',
      name: 'ManteView',
      component: () => import('../views/ManteView.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(/*to, from, savedPosition*/) { // Comentamos los parámetros
    // always scroll to top
    return { top: 0, left: 0 };
},
})

export default router
