<template>
	<div class="wrap-setting">
		<div>
			<h3>设置模板</h3>
			{{ settingStore.count }}
		</div>
		<van-button size="mini" type="primary" @click="onAddCount">主要按钮</van-button>
	</div>
</template>
<script setup lang="ts">
import { useSettingStore } from '@/store/setting';
const settingStore = useSettingStore();
const onAddCount = () => {
	settingStore.addCount();
};
</script>
<style lang="less" scoped>
.ignore-wrap {
	padding: 10rem;
}
</style>
