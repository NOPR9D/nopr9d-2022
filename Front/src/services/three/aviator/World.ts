import {
	CylinderBufferGeometry,
	CylinderGeometry,
	Matrix4,
	Mesh,
	MeshPhongMaterial,
} from 'three';
import { Engine } from './Engine';

export class World {
	public geom: CylinderGeometry;
	public mesh: Mesh;
	public material: MeshPhongMaterial;

	constructor(colors: any) {
		// create the geometry (shape) of the cylinder;
		// the parameters are:
		// radius top, radius bottom, height, number of segments on the radius, number of segments vertically
		this.geom = new CylinderBufferGeometry(600, 600, 800, 40, 10);
		this.material = new MeshPhongMaterial({
			color: colors.blue,
			opacity: 6,
			flatShading: true,
		});
		this.mesh = new Mesh(this.geom, this.material);

		this.mesh.receiveShadow = true;
		// rotate the geometry on the x axis
		this.geom.applyMatrix4(new Matrix4().makeRotationX(-Math.PI / 2));
	}
}
