import { createRouter, createWebHashHistory } from 'vue-router';

/**
 * ChunkName 编辑出来一个文件的Chunk名字
 */
const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
