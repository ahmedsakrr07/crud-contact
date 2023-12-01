// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/Add',
        name: 'Add',
        component: () => import('@/components/Add.vue'),
      },
      {
        path: `/Edit/:id`,
        name: 'Edit',
        component: () => import('@/components/Edit.vue'),
      },
      {
        path: `/view/:id`,
        name: 'View',
        component: () => import('@/components/View.vue'),
      },
      
        {
          path: `/delete/:id`,
          name: 'Delete',
        }
      
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
