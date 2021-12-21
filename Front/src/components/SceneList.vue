<template>
	<div class="row">
		<div class="col">
			<SceneCard />
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SceneCard from '@/components/cards/Scene.vue';
import { Subscription } from 'rxjs';
import { _Socket, Api } from '@/services';
import { AxiosObservable } from 'axios-observable';

@Options({
	components: { SceneCard },
})
export default class SceneList extends Vue {
	public socket: _Socket = new _Socket();

	public scenes: {
		title: string;
		socket: { props: string; default?: string };
	}[] = [];

	private sub!: Subscription;

	mounted() {
		this.sub = this.getAllScene().subscribe(
			(scenes: any) => (this.scenes = scenes.data)
		);
	}

	public getAllScene(): AxiosObservable<any> {
		return this.$api.getScenes();
	}

	unmounted() {
		this.sub.unsubscribe();
	}
}
</script>

<style>
</style>