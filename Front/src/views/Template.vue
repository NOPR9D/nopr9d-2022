<template>
	<a-layout>
		<!-- <Header /> -->
		<a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
			<div :style="{ background: '#000', padding: '24px', minHeight: '380px' }">
				<!-- <SceneList /> -->
				<TutorialList />
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
@Options({
	components: { Content, Header, SceneList, TutorialList, Footer },
})
export default class Template extends Vue {
	mounted() {
		this.$api.getHome();
	}
}
</script>

<style>
</style>