import { Camera, Scene } from 'three';

export class App {
	public scene: Scene;
	public camera: Camera;

	constructor(scene: Scene, camera: Camera) {
		this.scene = scene;
		this.camera = camera;
	}
	public async init() {
		console.log('hi');
	}

	public resize(vpW: number, vpH: number): void {
		console.log(vpW);
	}

	public update(t: number): void {
		///  console.log('hey')
	}
}
