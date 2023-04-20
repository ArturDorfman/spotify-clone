import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  // redirect: { name: routeNames.rootPage },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  defaultLayoutRoutes
]

export {
  routes,
  defaultLayoutRoutes
}
