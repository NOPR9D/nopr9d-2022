<template>
	<div>AboutMe</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	props: {},
	mounted() {
		console.log('hi');
	},
})
export default class AboutMe extends Vue {}
</script>

<style>
</style>
