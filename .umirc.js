// ref: https://umijs.org/config/
export default {
  disableCSSModules: true,
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页',
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单',
          auth: true,
        },
        {
          path: '/user',
          component: './user/index',
          title: '我的',
          auth: true,
        },
        {
          path: '/user/edit',
          component: './user/edit',
          title: '设置用户',
        },
        {
          path: '/search',
          component: './search/index',
          title: '搜索',
        },
        {
          path: '/house',
          component: './house',
          title: '酒店详情',
        },
        {
          path: '/login',
          component: './login',
          title: '登录',
        },
        {
          path: '/register',
          component: './register',
          title: '注册',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'umi3',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
}
