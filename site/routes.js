import Layout from './components/layout.vue'
import Iframe from './components/iframe.vue'
import demoRoutes from './demoRoutes'

export default [
  { path: '/ant-design/components',
    component: Layout,
    props: (route) => {
      const name = route.path.split('/ant-design/components/')[1].split('/')[0]
      return { name, showDemo: true }
    },
    children: demoRoutes,
  },
  { path: '/ant-design/iframe',
    component: Iframe,
    children: demoRoutes.map((item) => ({
      ...item,
      props: (route) => {
        const hash = route.hash.replace('#', '')
        return { iframeName: hash }
      },
    })),
  },
  {
    path: '/ant-design',
    component: Layout,
    props: (route) => {
      const name = route.path.split('/docs/vue/')[1].split('/')[0]
      return { name, showApi: true }
    },
    children: [
      {
        path: 'docs/vue/customize-theme',
        component: () => import('../docs/vue/customize-theme.en-US.md'),
      },
      {
        path: 'docs/vue/customize-theme-cn',
        component: () => import('../docs/vue/customize-theme.zh-CN.md'),
      },
      {
        path: 'docs/vue/getting-started',
        component: () => import('../docs/vue/getting-started.en-US.md'),
      },
      {
        path: 'docs/vue/getting-started-cn',
        component: () => import('../docs/vue/getting-started.zh-CN.md'),
      },
      {
        path: 'docs/vue/i18n',
        component: () => import('../docs/vue/i18n.en-US.md'),
      },
      {
        path: 'docs/vue/i18n-cn',
        component: () => import('../docs/vue/i18n.zh-CN.md'),
      },
      {
        path: 'docs/vue/introduce',
        component: () => import('../docs/vue/introduce.en-US.md'),
      },
      {
        path: 'docs/vue/introduce-cn',
        component: () => import('../docs/vue/introduce.zh-CN.md'),
      },
      {
        path: 'docs/vue/use-with-vue-cli',
        component: () => import('../docs/vue/use-with-vue-cli.en-US.md'),
      },
      {
        path: 'docs/vue/use-with-vue-cli-cn',
        component: () => import('../docs/vue/use-with-vue-cli.zh-CN.md'),
      },
      {
        path: 'docs/vue/changelog',
        component: () => import('../CHANGELOG.en-US.md'),
      },
      {
        path: 'docs/vue/changelog-cn',
        component: () => import('../CHANGELOG.zh-CN.md'),
      },
      { path: '', redirect: '/ant-design/vue/docs/introduce/' },
    ],
  },
  { path: '/*', redirect: '/ant-design/docs/vue/introduce/' },
]
