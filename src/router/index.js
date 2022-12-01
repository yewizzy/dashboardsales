import { createRouter, createWebHistory } from 'vue-router'
// import Landingpage from '../views/Landingpage.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'landingpage',
  //   component: Landingpage
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    // path: '/',
    // name: 'sidemenu',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/sidemenu.vue'),
    children: [
      {
        path: '/landingpage',
        name: 'Landingpage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Landingpage.vue')
      },
    ]
  },

  // {
  //   path: '/barChart',
  //   name: 'barChart',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/barChart.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
