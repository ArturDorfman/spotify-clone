import type { RouteRecordRaw } from 'vue-router'
import { routeNames } from './route-names'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.root,
  redirect: { name: routeNames.home },
  component: DefaultLayout,
  children: [
    {
      path: '/',
      name: routeNames.home,
      meta: {
        label: 'home'
      },
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/search',
      name: routeNames.search,
      meta: {
        label: 'search'
      },
      component: () => import('@/views/SearchPage.vue')
    },
    {
      path: '/library',
      name: routeNames.library,
      meta: {
        label: 'Your library'
      },
      component: () => import('@/views/LibraryPage.vue')
    },
    {
      path: '/create-playlist',
      name: routeNames.createPlaylist,
      meta: {
        label: 'create playlist'
      },
      component: () => import('@/views/CreatePlaylistPage.vue')
    },
    {
      path: '/liked-songs',
      name: routeNames.likedSongs,
      meta: {
        label: 'liked songs'
      },
      component: () => import('@/views/LikedSongsPage.vue')
    }
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
