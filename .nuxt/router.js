import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe3111bc = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _719c0ed7 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _7bc3d71e = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _e7dce69e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _f13fcbca = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _75189d65 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _72dbcffe = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _fe3111bc,
    children: [{
      path: "",
      component: _719c0ed7,
      name: "home"
    }, {
      path: "/login",
      component: _7bc3d71e,
      name: "login"
    }, {
      path: "/register",
      component: _7bc3d71e,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _e7dce69e,
      name: "profile"
    }, {
      path: "/settings",
      component: _f13fcbca,
      name: "settings "
    }, {
      path: "/editor",
      component: _75189d65,
      name: "editor "
    }, {
      path: "/article/:slug",
      component: _72dbcffe,
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
