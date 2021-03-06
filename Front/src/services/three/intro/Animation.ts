import { ThreeObject } from 'src/interfaces';
import {
	AnimationAction,
	AnimationMixer,
	LoadingManager,
	Object3D,
} from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// Class for shared animations
export class Animation implements ThreeObject {
	public animationAction: AnimationAction[] = [];
	private loader: FBXLoader;
	public promiseToResolve: any[] = [];

	constructor(loadingManager: LoadingManager) {
		this.loader = new FBXLoader(loadingManager);
	}

	public addAnimationToResolve(file: string, name: string) {
		this.promiseToResolve.push(
			this.loader.load('/three/' + file, (animation) => {
				const _animation = new AnimationMixer(animation).clipAction(
					(animation as Object3D).animations[0]
				);
				this.animationAction.push(_animation);
			})
		);
	}

	public loadAsync() {
		return Promise.all(this.promiseToResolve);
	}

	public update(t: number): void {
		console.log('update');
	}
}
