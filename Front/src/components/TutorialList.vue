<template>
	<div class="row">
		<div class="col">
			<ArticleCard />
		</div>

		<div v-if="content" v-html="content"></div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ArticleCard from '@/components/cards/Article.vue';
import { Subscription } from 'rxjs';
import { Api, Markdown } from '@/services';
import { AxiosObservable } from 'axios-observable';

@Options({
	components: { ArticleCard },
})
export default class ArticlesList extends Vue {
	public markdown: Markdown = new Markdown();
	public content!: string;

	public articles: {
		title: string;
		socket: { props: string; default?: string };
	}[] = [];

	private sub!: Subscription;

	data() {
		return {
			content: this.content,
		};
	}

	mounted() {
		this.sub = this.getArticles().subscribe((scenes: any) => {
			this.content = this.markdown.render(scenes.data.test);
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