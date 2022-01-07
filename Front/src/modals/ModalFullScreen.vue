<template>
	<a-modal
		v-bind:visible="$store.getters.isModalFullScreenOpen"
		v-bind:title="$store.getters.modalFullScreenTitle"
		width="100%"
		heigth="100%"
		@ok="$store.dispatch('closeModal')"
	>
		<component :is="$store.getters.modalFullScreenComponent"></component>
	</a-modal>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class ModalFullScreen extends Vue {}
</script>

<style lang="scss">
.full-modal {
	.ant-modal {
		max-width: 100%;
		top: 0;
		padding-bottom: 0;
		margin: 0;
	}
	.ant-modal-content {
		display: flex;
		flex-direction: column;
		height: calc(100vh);
	}
	.ant-modal-body {
		flex: 1;
	}
}
</style>
