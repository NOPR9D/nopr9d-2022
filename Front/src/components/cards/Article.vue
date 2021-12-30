<template>
	<div class="card">
		<a-collapse v-model:activeKey="activeKey" ghost>
			<a-collapse-panel key="1" header="This is panel header 1">
				<div class="card_title" v-html="title"></div>
			</a-collapse-panel>
			<a-collapse-panel key="2" header="This is panel header 2">
				<div class="card_intro" v-html="intro"></div>
			</a-collapse-panel>
		</a-collapse>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	props: {
		socketContent: { type: String, default: 'N/A' },
		title: { type: String, default: 'N/A' },
		picture: { type: String, default: 'N/A' },
		intro: { type: String, default: 'N/A' },
	},
})
export default class ArticleCard extends Vue {}
</script>

<style lang="scss" scoped>
.card {
	border: solid black 1px;

	.card_title {
		background-color: rgb(75, 75, 75);
	}

	.card_intro {
		background-color: grey;
	}
}

::v-deep p {
	margin: 0;
}
</style>
