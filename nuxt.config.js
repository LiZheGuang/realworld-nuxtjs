/**
 * Nuxt.js config
 */

module.exports = {
    router: {
        // resove解析目标位置
        extendRoutes(routes, resolve) {
            // 清除NUXT基于pages目录默认生成的路由表规则
            routes.splice(0)
            console.log(routes)
            routes.push(...[{
                path: "/",
                component: resolve(__dirname, 'pages/layout/'),
                children: [{
                    path: '',//默认子路由
                    name: 'home',
                    component: resolve(__dirname, 'pages/home/')
                }, {
                    path: '/login',//默认子路由
                    name: 'login',
                    component: resolve(__dirname, 'pages/login/')
                },{
                    path: '/register',//默认子路由
                    name: 'register',
                    component: resolve(__dirname, 'pages/login/')
                }]
            }])
        }
    }
}