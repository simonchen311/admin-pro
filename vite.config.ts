import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import ElementPlus from 'unplugin-element-plus/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
// import viteCompression from 'vite-plugin-compression';
import externalGlobals from 'rollup-plugin-external-globals';
import brotli from 'rollup-plugin-brotli';
import { createHtmlPlugin } from 'vite-plugin-html';
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname';

// 外链形式处理，不进行打包的库（使用的频率非常多的库）, 而是在html中使用cdn去引入
const globals = externalGlobals({
	moment: 'moment',
	'video.js': 'videojs'
	// jspdf: 'jspdf',
	// xlsx: 'xlsx'
});

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	// 获取当前工作目录
	const root = process.cwd();
	// 获取环境变量
	const env = loadEnv(mode, root + '/env');
	return {
		// 项目根目录
		root,
		// 项目部署的基础路径
		base: '/',
		envDir: 'env', // 设置环境变量配置文件的值
		envPrefix: 'VITE_', // 这就是默认值
		publicDir: fileURLToPath(new URL('./public', import.meta.url)), // 无需处理的静态资源位置
		assetsInclude: fileURLToPath(new URL('./src/assets', import.meta.url)), // 需要处理的静态资源位置
		plugins: [
			// Vue模板文件编译插件
			vue(),
			// jsx文件编译插件
			vueJsx(),
			viteMockServe({
				// 如果接口为 /mock/xxx 以 mock 开头就会被拦截响应配置的内容
				mockPath: 'mock', // 数据模拟需要拦截的请求起始 URL
				enable: true // 本地开发是否启用
			}),
			// 开启ElementPlus自动引入CSS
			ElementPlus({}),
			// 自动引入组件及ICON
			AutoImport({
				imports: ['vue', 'vue-router', 'pinia'],
				eslintrc: {
					enabled: true
				},
				resolvers: [IconsResolver(), ElementPlusResolver()],
				dts: fileURLToPath(new URL('./types/auto-imports.d.ts', import.meta.url))
			}),
			// 自动注册组件
			Components({
				resolvers: [IconsResolver(), ElementPlusResolver()],
				dts: fileURLToPath(new URL('./types/components.d.ts', import.meta.url)),
				dirs: [fileURLToPath(new URL('./src/components.d.ts', import.meta.url))],
				include: [/\.vue$/, /\.vue\?/]
			}),
			// 自动安装图标
			Icons({
				autoInstall: true
			}),
			// 开启gzip压缩
			// viteCompression({
			// 	threshold: 20 * 1024, // 超过20kb开启gzip压缩
			// 	ext: '.gz',
			// 	algorithm: 'gzip'
			// })
			// 开启br压缩
			brotli({}),
			// 在生成的html中配置外链链接
			createHtmlPlugin({
				inject: {
					data: {
						momentscript: '<script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.js" />',
						videoscript: '<script src="https://cdn.jsdelivr.net/npm/video.js@7.14.3/dist/video.min.js" />'
						// echartscript: '<script src="https://cdn.jsdelivr.net/npm/echarts@5.2.1/echarts" />'
					}
				}
			}),
			// 类似于webpack的设置配置webpackchunkname，根据router中的注释，否则需要在manualChunks中单独配置独立的路径进行配置
			manualChunksPlugin()
		],
		// 运行后本地预览的服务器
		server: {
			// 是否开启https
			// https: false,
			// 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
			host: true,
			// 开发环境预览服务器端口
			port: 3000,
			// 启动后是否自动打开浏览器
			open: false,
			// 是否开启CORS跨域
			cors: true,
			// 代理服务器
			// 帮助我们开发时解决跨域问题
			proxy: {
				// 这里的意思是 以/api开头发送的请求都会被转发到 http://xxx:3000
				// "/api": {
				//     target: "http://xxx:9000",
				//     // 改变 Host Header
				//     changeOrigin: true,
				//     // 发起请求时将 '/api' 替换为 ''
				//     rewrite: (path) => path.replace(/^\/api/, ""),
				// },
				[env.VITE_APP_API_BASEURL]: {
					target: 'http://localhost:3000',
					changeOrigin: true
				},
				[env.VITE_APP_MOCK_BASEURL]: {
					target: 'http://localhost:3000',
					changeOrigin: true
				}
			}
		},
		// 打包配置
		build: {
			// 关闭 sorcemap 报错不会映射到源码
			sourcemap: false,
			// 打包大小超出 400kb 提示警告
			chunkSizeWarningLimit: 400,
			rollupOptions: {
				// 打包入口文件 根目录下的 index.html
				// 也就是项目从哪个文件开始打包
				input: {
					index: fileURLToPath(new URL('./index.html', import.meta.url))
				},
				// 静态资源分类打包
				// vite2.8之后的版本中，rollup将每个模块文件默认打包成单独的文件导致chunk多，那些不到1kb非常小的模块也单独成了一个chunk，浏览器同时发起请求连接的数量一般6个(http1)
				output: {
					format: 'esm',
					chunkFileNames: 'static/js/[name]-[hash].js', // 代码分割后的文件名
					entryFileNames: 'static/js/[name]-[hash].js', // 入口文件名
					assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 静态资源文件名
					experimentalMinChunkSize: 20 * 1024, // 单位B，小于20KB进行合并，但限于没有副作用时才会合并
					manualChunks: (id: string) => {
						// 根据业务实际情况，对于一些只有少数页面才会使用的第三方库，将其单独成chunk，这样在更新这部分时与其他库区分开
						if (id.includes('html2canvas')) {
							return 'min-vendor';
						}
						if (id.includes('node_modules')) {
							return 'vendor';
						}
						// return 'index';
					}
				},
				external: ['moment', 'video.js', 'xlsx', 'echart'],
				treeshake: {
					preset: 'recommended'
				},
				experimentalLogSideEffects: true, // 用于有副作用的时候
				plugins: [visualizer(), globals]
			}
		},
		// 配置别名
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				'#': fileURLToPath(new URL('./types', import.meta.url))
			}
		},
		css: {
			preprocessorOptions: {
				less: {
					additionalData: `@import "@/styles/variable.less";`
				}
			}
		}
	};
});
