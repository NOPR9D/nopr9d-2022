<template>
	<router-view></router-view>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { initShape } from '@/services/mojs';
export default class App extends Vue {
	mounted() {
		initShape();
	}
}
</script>

<style lang="scss">
@import './assets/bootstrap5/bootstrap-grid';
@import './assets/bootstrap5/bootstrap-utilities';
html,
body {
	height: 100%;
	width: auto;
	margin: 0;
	padding: 0;
	display: flex;
	overflow: hidden;
	overflow-y: auto;
	flex-direction: column;
	background: black;
}

#app {
	font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: white;
	height: 100%;
	width: 100%;
	min-height: 100%;
	min-width: 100%;
	background: transparent;
	position: absolute;
}

.auto-size {
	display: flex !important;
	flex-grow: 1;
}

body {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.flex-fill {
	flex: 1 1 auto;
}

.bg-description {
	background: rgba(237, 237, 237, 0.384) !important;
	color: #666 !important;
}

.pointer {
	cursor: pointer !important;
}
</style>
