import { AnimationAction, AnimationMixer, LoadingManager } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export class User {
	public modelReady = false;
	public animationAction: AnimationAction[] = [];
	public mesh: GLTF | any;
	public mixer!: AnimationMixer;
	private loader: FBXLoader;
	private loadingManager: LoadingManager;

	constructor(loadingManager: LoadingManager) {
		this.loadingManager = loadingManager;
		this.loader = new FBXLoader(this.loadingManager);
	}

	public createAsync() {
		return new Promise((res, err) => {
			this.loader.load('/three/MaleBot.fbx', (gltf) => {
				gltf.scale.set(0.5, 0.5, 0.5);
				gltf.position.set(0, 0, 0);
				gltf.traverse((child) => {
					if (child.isObject3D) {
						child.receiveShadow = true;
						child.castShadow = true;
					}
				});
				this.mesh = gltf;
				this.mixer = new AnimationMixer(gltf);
				res(true);
				// called while loading is progressing
			});
		});
	}
}
