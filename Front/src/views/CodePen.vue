<template>
	<CodePenIframe :title="'webgl-canvas'" :slug="'ExVzMBV'" />
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { Options, Vue } from 'vue-class-component';
import CodePenIframe from './../components/iframes/CodePen.vue';
@Options({
	components: { CodePenIframe },
})
export default class CodepenPage extends Vue {
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