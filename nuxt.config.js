/**
 * Nuxt.js config
 */

module.exports = {
  router: {
    linkExactActiveClass: "active",
    // resove解析目标位置
    extendRoutes(routes, resolve) {
      // 清除NUXT基于pages目录默认生成的路由表规则
      routes.splice(0);
      console.log(routes);
      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout/"),
            children: [
              {
                path: "", //默认子路由
                name: "home",
                component: resolve(__dirname, "pages/home/"),
              },
              {
                path: "/login",
                name: "login",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                path: "/register",
                name: "register",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                path: "/profile/:username",
                name: "profile",
                component: resolve(__dirname, "pages/profile/"),
              },
              {
                path: "/settings",
                name: "settings ",
                component: resolve(__dirname, "pages/settings/"),
              },
              // editor
              {
                path: "/editor",
                name: "editor ",
                component: resolve(__dirname, "pages/editor/"),
              },
              {
                path: "/article/:slug",
                name: "article",
                component: resolve(__dirname, "pages/article/"),
              },
            ],
          },
        ]
      );
    },
  },

  server: {
    host: "0.0.0.0",
    port: 3000,
  },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
      ]
};
