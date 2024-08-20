import type { RouteRecordRaw } from 'vue-router';

export default {
	path: '/',
	name: 'Layout',
	component: () => import(/* webpackChunkName: "home" */ '@/layout/index.vue'),
	meta: {
		role: ['common', 'admin']
	},
	redirect: '/',
	children: [
		{
			path: '/',
			name: 'Main',
			meta: {
				isShow: true,
				title: '主要项目',
				parent: 'Layout'
			},
			redirect: '/home',
			children: [
				{
					path: 'home',
					name: 'Home',
					component: () => import('@/views/home/index.vue'),
					meta: {
						isShow: true,
						title: '项目首页',
						parent: 'Main'
					}
				},
				{
					path: 'about',
					name: 'About',
					component: () => import('@/views/about/index.vue'),
					meta: {
						isShow: true,
						title: '关于我的',
						parent: 'Main'
					},
					children: []
				}
			]
		},
		{
			path: 'role',
			name: 'Role',
			component: () => import(/* webpackChunkName: "role" */ '@/views/role/index.vue'),
			meta: {
				isShow: true,
				title: '角色模块',
				parent: 'Layout'
			},
			children: []
		},
		{
			path: 'auth',
			name: 'Auth',
			component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/index.vue'),
			meta: {
				isShow: true,
				title: '权限模块',
				parent: 'Layout'
			},
			children: []
		},
		{
			path: 'user',
			name: 'User',
			component: () => import(/* webpackChunkName: "user" */ '@/views/user/index.vue'),
			meta: {
				isShow: true,
				title: '用户模块',
				parent: 'Layout'
			},
			children: []
		}
	]
} as RouteRecordRaw;
