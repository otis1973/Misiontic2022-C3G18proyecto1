import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Administrador',
    name: 'Administrador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrador.vue')
  },
  {
    path: '/Maestros',
    name: 'Maestros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Maestros.vue')
  },
  {
    path: '/Maestros/new',
    name: 'Mateologia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mateologia.vue')
  },
  {
    path: '/Estudiantes',
    name: 'Estudiantes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Estudiantes.vue')
  },
  {
    path: '/Estudiantes/new',
    name: 'Nuevo Estudiante',
    component: () => import(/* webpackChunkName: "about" */ '../views/NuevoEstudiante.vue')
  },
  {
    path: '/Acudiente',
    name: 'Acudientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Acudiente.vue')
  },  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
