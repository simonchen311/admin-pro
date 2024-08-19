import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useSettingStore } from '@/store/setting';
import { getTitle } from '@/utils';
const settingStore = useSettingStore();

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

const handlerRouters = (currentName: string) => {
	console.log('currentName', currentName);
	console.log('router.getRoutes()', router.getRoutes());
	const titles = getTitle(currentName, router.getRoutes());
	settingStore.setTitle(titles);
};

const noStatusPage = ['/login', '/about'];
router.beforeEach(async (_to, _from, next) => {
	NProgress.start();
	const token = sessionStorage.getItem('userInfo');
	const userIsLogin = token ? true : false;
	if (userIsLogin || noStatusPage.includes(_to.path)) {
		next();
	} else {
		next('/login');
	}
	handlerRouters(_to.name as string);
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
