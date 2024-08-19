/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

interface ImportMetaEnv {
	// 我们每次添加完新的环境变量就在此添加一次ts类型
	// 这样我们就能在使用 import.meta.env 时获得ts语法提示
	readonly VITE_APP_API_BASEURL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
