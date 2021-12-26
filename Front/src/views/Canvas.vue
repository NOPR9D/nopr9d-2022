<template>
	<Canvas :title="'webgl-canvas'" />
</template>

<script lang="ts">
import { Observable, Subscription } from 'rxjs';
import { Options, Vue } from 'vue-class-component';
import Canvas from './../components/Canvas.vue';
@Options({
	components: { Canvas },
})
export default class CanvasPage extends Vue {
	public scene!: string;
	public scene$!: Subscription;
	mounted() {
		// this.scene$ = this.$router.subscribe((scene: any) => {
		// 	this.scene = scene.data;
		// });
	}

	unmounted() {
		this.scene$?.unsubscribe();
	}
}
</script>

<style>
</style>