<template>
	<div class="login-box">
		<div class="login-form">
			<h1>《管理企业中后台管理系统》- {{ message }} = {{ $hello }}</h1>
			<br />
			<el-form show-message :model="userInfo" :rules="rules" center class="login-info">
				<el-form-item prop="username">
					<el-input v-model="userInfo.username" placeholder="请输入用户名" :prefix-icon="User"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="userInfo.password" placeholder="请输入密码" :prefix-icon="Lock"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" style="width: 100%" @click="userLogin">登陆</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { Lock, User } from '@element-plus/icons-vue';

const userStore = useUserStore();
//const router = useRouter();

console.log('setup begin');
console.log(userStore);

const message = defineModel({ type: String });

// 通过下面两种方法获取全局属性
const globalHello_1 = getCurrentInstance()?.appContext.config.globalProperties.$hello;
const globalHello_2 = getCurrentInstance()?.proxy?.$hello;
console.log('globalHello_1', globalHello_1, 'globalHello_2', globalHello_2, 'globalHello_3');

// 计算属性, 切割出实际上需要展示的数据
const dataList = computed(() => {
	return getCurrentInstance()?.appContext.config.globalProperties.$hello + 'No NO No';
});
console.log(dataList.value);

const normalMethod = () => {
	return getCurrentInstance()?.appContext.config.globalProperties.$hello + 'normal';
};
console.log(normalMethod());
// const props = defineProps<{
// 	modelValue: string;
// }>();
// const emit = defineEmits(['update:modelValue']);

const userInfo = reactive({
	username: 'admin',
	password: 'admin'
});

const rules = reactive({
	userName: [
		{
			require: true,
			message: '请输入用户名',
			trigger: 'blur'
		}
	],
	password: [
		{
			require: true,
			message: '请输入密码',
			trigger: 'blur'
		}
	]
});

const userLogin = () => {
	message.value = '666777';
	// emit('update:modelValue', '112233123');
	// userStore.storeUserLogin(userInfo).then(() => {
	// 	router.push({
	// 		path: '/'
	// 	});
	// });
};
console.log('setup end');
</script>
<script lang="ts">
export default {
	// 所以测试 setup 是在所有的旧钩子之前
	beforeCreate() {
		console.log('beforeCreate');
	},
	beforeMount() {
		console.log('beforeMount');
	},
	beforeUnmount() {
		console.log('beforeDestory');
	}
};
</script>
<style lang="less" scoped>
.login-box {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 100vh;
	background: var(--backgroud-color);

	.login-form {
		display: flex;
		width: 300px;
		text-align: center;
		flex-direction: column;

		.login-info {
			height: max-content;
		}
	}
}
</style>
