// Imports
import {
    createWebHistory,
    createRouter
} from 'vue-router'

// Components
import Home from './../pages/index.vue'

// Create routes
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

// Create router object
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
