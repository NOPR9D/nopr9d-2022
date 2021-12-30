<template>
	<TutorialList v-if="articles !== null" :articles="articles" />
</template>

<script lang="ts">
import { Article } from '@/interfaces';
import { map, Subscription } from 'rxjs';
import { Options, Vue } from 'vue-class-component';
import TutorialList from './../components/TutorialList.vue';
@Options({
	components: { TutorialList },
})
export default class ArticlePage extends Vue {
	public articles: Article[] | null = null;
	public articles$!: Subscription;

	mounted() {
		const mapArticleToView = map((articles: { data: Article[] }) => {
			return articles?.data.map((article: any) => {
				article.intro = this.markdown.render(article.intro);
				return article;
			});
		});

		this.$api
			.getArticles()
			.pipe(mapArticleToView)
			.subscribe((articles: any) => {
				this.articles = articles;
			});
	}

	unmounted() {
		this.articles$?.unsubscribe();
	}
}
</script>

<style>
</style>