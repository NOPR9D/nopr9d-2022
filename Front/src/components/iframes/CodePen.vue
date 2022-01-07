<template>
	<iframe
		height="300"
		style="width: 100%"
		v-bind:scrolling="scrolling"
		v-bind:title="title"
		v-bind:src="`https://codepen.io/NOPROD/embed/preview/${slug}?default-tab=${defaultTab}%2Cresult&editable=${editable}&theme-id=${theme}`"
		frameborder="no"
		loading="lazy"
		allowtransparency="true"
		allowfullscreen="true"
	>
		See the Pen
		<a href="https://codepen.io/NOPROD/pen/zYBbMPo"> GLSL Shader Backround</a>
		by Boucham Amine (<a href="https://codepen.io/NOPROD">@NOPROD</a>) on
		<a href="https://codepen.io">CodePen</a>.
	</iframe>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	props: {
		title: { type: String, default: '' },
		slug: { type: String, default: '' },
		defaultTab: { type: String, default: 'js' },
		editable: { type: String, default: 'true' },
		scrolling: { type: String, default: 'no' },
		theme: { type: String, default: '39115' },
	},
})
export default class CodePenIframe extends Vue {}
</script>

<style>
</style>
