<template>
	<a-layout-header>
		<div class="position-relative p-2 col-12 wrapper_intro">
			<div id="my_lab_intro"></div>
		</div>
		<a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
			<a-menu-item key="1">nav 1</a-menu-item>
			<a-menu-item key="2">nav 2</a-menu-item>
			<a-menu-item key="3">nav 3</a-menu-item>
		</a-menu>
	</a-layout-header>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { intro } from '@/services/mojs';

@Options({})
export default class Header extends Vue {
	mounted(): void {
		intro('my_lab_intro');
	}
}
</script>

<style>
.wrapper_intro {
	min-height: 10%;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px 24px 16px 0;
	float: left;
}
</style>
