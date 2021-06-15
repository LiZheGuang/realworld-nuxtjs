import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _069dfe7e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _c276859a = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _3a0b3195 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _85a81e56 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _79923a77 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _0a61b67e = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _b81397bc = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _069dfe7e,
    children: [{
      path: "",
      component: _c276859a,
      name: "home"
    }, {
      path: "/login",
      component: _3a0b3195,
      name: "login"
    }, {
      path: "/register",
      component: _3a0b3195,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _85a81e56,
      name: "profile"
    }, {
      path: "/settings",
      component: _79923a77,
      name: "settings "
    }, {
      path: "/editor",
      component: _0a61b67e,
      name: "editor "
    }, {
      path: "/article/:slug",
      component: _b81397bc,
      name: "article "
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
