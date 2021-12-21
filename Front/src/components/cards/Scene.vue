<template>
	<div class="card">
		<div class="card_title"></div>
		<div class="card_content"></div>
		<div class="card_actions"></div>
		<div class="card_socket_content"></div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	props: {
		socketContent: { type: String, default: 'N/A' },
	},
})
export default class Scene extends Vue {
}
</script>

<style>
</style>
