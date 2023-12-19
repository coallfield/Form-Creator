import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/views/LoginView.vue'
import MainViewVue from '@/views/MainView.vue'
import FormCreatorView from '@/views/FormCreatorView.vue'
import FormView from '@/views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        component: LoginViewVue
      },
      {
        path: '/main',
        component: MainViewVue
      },
      {
        path: '/formcreator',
        component: FormCreatorView
      },
      {
        path: '/form',
        component: FormView
      }
  ]
})

export default router
