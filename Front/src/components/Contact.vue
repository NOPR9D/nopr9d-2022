<template>
	<div>contact</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	props: {},
	mounted() {
		console.log('hi');
	},
})
export default class Contact extends Vue {}
</script>

<style>
</style>
