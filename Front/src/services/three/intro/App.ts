import { EngineBluePrint, ThreeActualView } from 'src/interfaces';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { Engine } from './Engine';

export class App implements ThreeActualView {
	public engine!: EngineBluePrint;
	public ready = false;
	constructor(
		scene: Scene,
		camera: PerspectiveCamera,
		renderer: WebGLRenderer
	) {
		this.engine = new Engine() as EngineBluePrint;
		this.engine.importSceneCameraRenderer(scene, camera, renderer);
	}
}
