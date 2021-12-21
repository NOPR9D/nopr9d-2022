<template>
	<a-layout-footer :style="{ textAlign: 'center' }">Footer</a-layout-footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
	props: {},
	mounted() {
		console.log('hi');
	},
})
export default class Footer extends Vue {}
</script>

<style>
</style>
