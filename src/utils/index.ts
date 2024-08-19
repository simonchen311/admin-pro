import type { RouteRecordNormalized } from 'vue-router';

export function add(a: number, b: number) {
	return a + b;
}

export function getTitle(name: string, routes: RouteRecordNormalized[]) {
	const names: string[] = [];
	const flag = true;
	while (flag) {
		names.push(name);
		const currentRouterObj = routes.find((item) => item.name === name);
		const parentRouterObj = routes.find((item) => item.name === currentRouterObj?.meta?.parent);
		if (parentRouterObj) {
			name = parentRouterObj.name as string;
			continue;
		} else {
			break;
		}
	}
	return names.reverse();
}
