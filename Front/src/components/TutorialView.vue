<template>
	<div class="row">
		<div class="col">
			<ArticleCard />
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ArticleCard from '@/components/cards/Article.vue';
import { Subscription } from 'rxjs';
import { Markdown } from '@/services';
import { AxiosObservable } from 'axios-observable';

@Options({
	components: { ArticleCard },
	props: {
		title: '',
	},
})
export default class TutorialView extends Vue {
	public markdown: Markdown = new Markdown();

	public article: {
		title: string;
		socket: { props: string; default?: string };
		content: string;
	}[] = [];

	private articles$!: Subscription;

	mounted() {
		this.articles$ = this.getArticle().subscribe((scenes: any) => {
			this.article = scenes.data;
		});
	}

	public getArticle(): AxiosObservable<any> {
		// eslint-disable-next-line
		// @ts-ignore
		return this.$api.getArticle(this.$props['title']);
	}

	unmounted() {
		this.articles$?.unsubscribe();
	}
}
</script>

<style>
</style>