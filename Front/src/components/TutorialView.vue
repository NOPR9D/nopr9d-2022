<template>
	<div class="row h-100 w-100">
		<div class="col-12">
			<ArticleCard
				v-bind:v-if="!isLoading"
				v-bind:title="$store.getters.modalFullScreenTitle"
				v-bind:content="article"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ArticleCard from '@/components/cards/Article.vue';
import { Markdown } from '@/services';

@Options({
	components: { ArticleCard },
})
export default class TutorialView extends Vue {
	public article = '';
	public isLoading = true;
	mounted() {
		const markdown = new Markdown();
		this.$api
			.getArticle(this.$store.getters.lastItem.file + '.md')
			.subscribe((article: any) => {
				this.article = markdown.render(article.data);
				this.isLoading = false;
			});
	}
}
</script>

<style>
</style>