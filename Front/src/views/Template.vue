<template>
	<a-layout>
		<!-- <Header /> -->
		<a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
			<div>
				<TutorialList v-if="articles !== null" :articles="articles" />
			</div>
		</a-layout-content>
		<!-- <Footer /> -->
	</a-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Content from './../components/home/Content.vue';
import Header from './../components/Header.vue';
import SceneList from './../components/SceneList.vue';
import TutorialList from './../components/TutorialList.vue';
import Footer from './../components/Footer.vue';
import { Article } from '@/interfaces';
import { map, Subscription } from 'rxjs';
@Options({
	components: { Content, Header, SceneList, TutorialList, Footer },
})
export default class Template extends Vue {
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