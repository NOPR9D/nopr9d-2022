import { ThreeActualView } from 'src/interfaces';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { Engine } from './Engine';

export class App implements ThreeActualView {
	public engine!: Engine;
	constructor(
		scene: Scene,
		camera: PerspectiveCamera,
		renderer: WebGLRenderer
	) {
		this.engine = new Engine();
		this.engine.importSceneCameraRenderer(scene, camera, renderer);
	}
}
