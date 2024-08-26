import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// import.meta.glob 为 vite 提供的特殊导入方式
// 它可以将模块中全部内容导入并返回一个Record对象
// 默认为懒加载模式 加入配置项 eager 取消懒加载
const modules: Record<string, any> = import.meta.glob(['./modules/*.ts'], {
	eager: true
});
const routes: Array<RouteRecordRaw> = [];

// 将路由全部导入数组
Object.keys(modules).forEach((key) => {
	routes.push(modules[key].default);
});

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

router.beforeEach(async (_to, _from, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
