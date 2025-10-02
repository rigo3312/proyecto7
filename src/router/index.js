import { createRouter, createWebHistory } from 'vue-router'
import TareaNueva from '../views/TareaNueva.vue'
import TareasList from '../views/TareasList.vue'

const routes = [
  {
    path: '/',
    name: 'tareas',
    component: TareasList
  },
  {
    path: '/agregar',
    name: 'agregarTareas',
    component: TareaNueva
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router