<template>
	<div>content</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
	props: {},
})
export default class Content extends Vue {
	mounted() {
		console.log('hi');
	}
}
</script>

<style>
</style>
