<template>
	<div class="card_article_view">
		<div class="card_title" v-html="title"></div>
		<div
			class="card_intro col-10 d-flex flex-column justify-content-center m-auto"
			v-html="content"
		></div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	props: {
		socketContent: { type: String, default: 'N/A' },
		title: { type: String, default: 'N/A' },
		picture: { type: String, default: 'N/A' },
		content: { type: String, default: 'N/A' },
	},
})
export default class ArticleCard extends Vue {}
</script>

<style lang="scss">
.card_article_view {
	border: solid black 1px;
	background: #090909;
	text-align: start;
	color: white;
	font-weight: bold;

	.card_title {
		background-color: #242424;
		padding: 2em 2em;
		text-align: center;
		border-bottom: solid 1px grey;
	}

	.card_intro {
		background-color: #242424;
		padding: 0em 2em;

		* > img {
			padding: 2em 0em;
			display: block;
			margin: auto;
		}
	}
}

::v-deep p {
	margin: 0;
}
</style>
