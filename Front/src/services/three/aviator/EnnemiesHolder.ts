import { Object3D } from 'three';
import { Ennemy } from './Ennemy';

export class EnnemiesHolder {
	public mesh: Object3D;
	public ennemiesInUse: Ennemy[] = [];

	constructor() {
		this.mesh = new Object3D();
	}
}
