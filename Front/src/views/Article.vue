<template>
	<ArticleView :title="'webgl-canvas'" />
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { Options, Vue } from 'vue-class-component';
import ArticleView from './../components/ArticleView.vue';
@Options({
	components: { ArticleView },
})
export default class ArticlePage extends Vue {
	public article!: { content: string; title: string };
	public article$!: Subscription;
	mounted() {
		console.log(this.$store.state);
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