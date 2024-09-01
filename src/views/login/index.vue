<template>
	<div class="login-box">
		<div class="login-form">
			<h1>233，管理企业中后台管理系统</h1>
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
const router = useRouter();

console.log(userStore);

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
	userStore.storeUserLogin(userInfo).then(() => {
		router.push('/');
	});
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
