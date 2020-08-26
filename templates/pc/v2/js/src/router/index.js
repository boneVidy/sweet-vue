import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('@/views/collections/index')
  },
  {
    path: '/collections',
    name: 'collections',
    component: () => import('@/views/collections/overview')
  },
  {
    path: '/officialAccounts',
    name: 'officialAccounts',
    component: () => import('@/views/officialAccounts/index')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home/0',
    children: [
      {
        path: 'home/:type',
        name: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/testing/index')
      },
      {
        path: '/upload',
        name: 'upload',
        component: () => import('@/components/upload')
      }
    ]
  },
  {
    path: '/decoration',
    component: Layout,
    redirect: '/decoration/panel/:pageType',
    name: 'decoration',
    children: [
      // 新建页面
      {
        path: 'panel/:pageType/:type',
        name: 'panel',
        component: () => import('@/views/decorationManager/index')
      },
      // 编辑页面
      {
        path: 'panel/:pageType/:type/:sitId/:pageId',
        name: 'panel',
        component: () => import('@/views/decorationManager/index')
      },
      // 商品分类编辑页面
      {
        path: 'productstype/:pageType/:type/:sitId/:pageId',
        name: 'productstype',
        component: () => import('@/views/decorationManager/productsTypeManage')
      }
    ]
  },
  {
    path: '/themepack',
    component: EmptyLayout,
    redirect: '/themepack/index',
    name: 'themepack',
    children: [
      {
        path: 'index',
        name: 'panel',
        component: () => import('@/views/themePack/index/')
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/themePack/addOREdit')
      },
      {
        path: 'edit/:id',
        name: 'add',
        component: () => import('@/views/themePack/addOREdit')
      }
    ]
  },
  {
    path: '/opc',
    component: EmptyLayout,
    redirect: '/opc/marking/manager/panel',
    children: [
      {
        path: 'marking/manager/panel/:pageType/:sitId/:pageId',
        name: 'markingMamage',
        component: () => import('@/views/opc/marking/manager/index')
      },
      {
        path: 'marking/manager/temlpates/:stageId/:activId',
        name: 'templates',
        component: () => import('@/views/opc/marking/manager/templates')
      }
    ]
  },
  {
    path: '/digital',
    component: EmptyLayout,
    redirect: '/digital/activity/detail',
    children: [
      {
        path: '/digital/activity/detail',
        name: 'digitalDetail',
        component: () => import('@/views/digitalMarketing/index')
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    base:
      window.location.host.indexOf('store.linkkids.cn') > -1 ||
      window.location.host.indexOf('store.retailo2o.com') > -1 ||
      window.location.host.indexOf('cmm.linkkids.cn') > -1
        ? '/storeDecoration'
        : '/pc/storeDecoration',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

router.beforeEach((to, from, next) => {
  try {
    Cookies.set('source', 'pc', { domain: '.linkkids.cn' });
    Cookies.set('source', 'pc', { domain: '.retailo2o.com' });
    next();
  } catch (e) {
    // console.log(e);
    next();
  }
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
