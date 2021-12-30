<template>
	<TutorialView :title="'webgl-canvas'" />
</template>

<script lang="ts">
import { Article } from '@/interfaces';
import { Subscription } from 'rxjs';
import { Options, Vue } from 'vue-class-component';
import TutorialView from './../components/TutorialView.vue';
@Options({
	components: { TutorialView },
})
export default class ArticlePage extends Vue {
	public article!: Article;
	public article$!: Subscription;
	mounted() {
		console.log(this.$store.state);
		// this.scene$ = this.$router.subscribe((scene: any) => {
		// 	this.scene = scene.data;
		// });
	}

	unmounted() {
		this.article$?.unsubscribe();
	}
}
</script>

<style>
</style>