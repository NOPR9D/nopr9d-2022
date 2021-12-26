<template>
	<div class="row">
		<div class="col">
			<ArticleCard />
		</div>
		<div :v-for="article in articles"></div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ArticleCard from '@/components/cards/Article.vue';
import { map, Subscription } from 'rxjs';
import { Markdown } from '@/services';
import { AxiosObservable } from 'axios-observable';

@Options({
	components: { ArticleCard },
})
export default class ArticlesList extends Vue {
	public markdown: Markdown = new Markdown();
	public content!: string;

	public articles: {
		intro: string;
		name: string;
	}[] = [];

	private sub!: Subscription;

	data() {
		return {
			articles: this.articles,
		};
	}

	mounted() {
		this.sub = this.getArticles()
			.pipe(
				map((articles) => {
					return articles?.data.map((article: any) => {
						article.intro = this.markdown.render(article.intro);
						return article;
					});
				})
			)
			.subscribe((articles: any) => {
				console.log(articles);
				this.articles = articles;
			});
	}

	public getArticles(): AxiosObservable<any> {
		return this.$api.getArticles();
	}

	unmounted() {
		this.sub?.unsubscribe();
	}
}
</script>

<style>
</style>