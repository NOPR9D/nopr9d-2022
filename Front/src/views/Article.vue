<template>
	<TutorialView :title="'webgl-canvas'" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TutorialView from './../components/TutorialView.vue';
@Options({
	components: { TutorialView },
})
export default class ArticlePage extends Vue {}
</script>

<style>
</style>