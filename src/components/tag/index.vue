<template>
	<div class="wrap-tag">
		<span v-bind="props" ref="tag" class="tag"></span>
	</div>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue'
const tag = ref<HTMLElement>();
const props = defineProps({
	text: {
		type: String,
		default: null
	},
	theme: {
		type: String,
		default: null,
		require: false
	}
});

onMounted(() => {
	setText();
	setTheme();
});

const setText = () => {
	tag.value!.innerHTML = props.text;
};

const setTheme = () => {
	tag.value!.style.backgroundColor = props.theme;
};
</script>

<style lang="less" scoped>
.tag {
	background-color: red;
	color: #fff;
	font-size: 18px;
	padding: 10px;
	border-radius: 5px;
}
.wrapper {
	margin: 30px;
}
</style>
