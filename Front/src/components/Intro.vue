<template >
	<div class="container">
		<div class="licorn_wrapper">
			<div
				id="hey_im_a_licorn"
				class="hey_im_a_licorn"
				v-html="require('@/assets/licorn.svg')"
			></div>
		</div>
		<div class="absolute_center p-1 d-flex flex-row">
			<div
				v-if="!app?.view.actualView.ready"
				class="w-100 text-center d-flex flex-row"
			>
				{{ progressLoaded }}
			</div>
			<template v-else>
				<button type="button" class="btn btn-light mx-2 px-2">
					Make Dance
				</button>
				<button type="button" class="btn btn-light mx-2 px-2">Light</button>
			</template>
		</div>
		<div class="row">
			<Canvas :title="'webgl-canvas'" />
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Canvas from './../components/Canvas.vue';
import { App as introThreeJs } from '@/services/three';
import { animatedLicorne } from '@/services/mojs';

@Options({
	components: { Canvas },
})
export default class Intro extends Vue {
	public app!: introThreeJs;
	public progressLoaded = 0;

	mounted() {
		animatedLicorne();
		// this.app = new introThreeJs();
		// this.loadAndInitScene();
	}

	private loadAndInitScene() {
		this.app.view.actualView.engine.loadingManager.onLoad = () => {
			this.app.view.actualView.ready = true;
			this.app.initClock();
			this.app.update();
			this.app.resize();
			window.addEventListener('resize', this.app.resize);
		};

		this.app.view.actualView.engine.loadingManager.onProgress = (
			item,
			loaded,
			total
		) => {
			console.log(item);
			console.log(loaded);
			console.log(total);
			this.progressLoaded = loaded;
		};
		this.app.view.actualView.engine.init();
	}
}
</script>

<style>
.intro_wrap {
	position: relative;
	height: 100%;
	width: 100%;
}

.intro_reveal {
	position: absolute;
	height: 100px;
	width: 100%;
	z-index: 2;
}
.intro_reveal > * > svg {
	overflow: visible;
}

.beaker_wrap {
	position: relative;
	height: 100%;
	width: 100%;
}

.beaker_reveal {
	position: absolute;
	height: 100px;
	width: 100%;
	z-index: 2;
}
.beaker_reveal > * > svg {
	overflow: visible;
}

.absolute_center {
	position: absolute;
	left: 0;
	right: 0;
}

.licorn_wrapper {
	position: absolute;
	bottom: 15px;
	right: 15px;
}

.hey_im_a_licorn {
	font-size: 3em;
	position: relative;
	margin: 0;
	padding: 0;
	color: #c0c1c3;
	border: 0;
	background: none;
	overflow: visible;
	width: 35px;
	height: 35px;
}
</style>
