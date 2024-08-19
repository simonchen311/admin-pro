<template>
	<div>
		<el-tree
			ref="treeRef"
			:data="authList"
			:check-strictly="true"
			show-checkbox
			:default-checked-keys="checkedNode"
			node-key="roleId"
			:props="{ label: 'name', children: 'roleList' }"
		/>
		<el-button type="primary" @click="onChangeAuth">修改权限</el-button>
	</div>
</template>
<script lang="ts" setup>
import { getAuthList } from '@/api/auth';

const route = useRoute();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const treeRef = ref<any>(null);
let authList = ref<IAuth[]>([]);
const checkedNode = ref<string[]>([]);
const { query } = route;
if (query.auth) {
	checkedNode.value = query.auth as string[];
}
onMounted(() => {
	getAuthList()
		.then((res) => {
			authList.value = res;
		})
		.catch(() => {});
});
const onChangeAuth = () => {
	console.log(treeRef.value);
	const selectedTreeNode = treeRef.value.getCheckedNodes();
	console.log(selectedTreeNode);
	console.log(treeRef.value.getCheckedKeys());
};
</script>
