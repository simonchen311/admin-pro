<template>
	<!-- 一般vue项目都会使用vue-router -->
	<!-- 所以我们这里直接写一个 router-view -->
	<!-- <router-view></router-view> -->
	<login v-model="text"></login>
</template>
<script setup>
import Login from '@/views/login/index.vue';
const text = ref('test test 666');
watch(text, (val) => {
	console.log('text now = ', val);
});
</script>
