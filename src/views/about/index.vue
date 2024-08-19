<template>
	<div class="wrapper">about</div>
	<tag :text="text" :theme="theme"></tag>
</template>
<script lang="ts" setup>
// import tag from '@/components/tag/index.vue' // vite配置自动导入

const text = ref('Simon');
const theme = ref('red');
</script>
<style lang="less" scoped>
// @import '@/styles/variable.less'; 通过vite自动导入
.wrapper {
	background-color: @btnclr;
	color: white;
}
</style>
