import { ThreeObject } from "src/interfaces";
import { CylinderGeometry, Matrix4, Mesh, MeshPhongMaterial } from "three";
import { App } from "./App";

export class World implements ThreeObject {
    public geom: CylinderGeometry
    public mesh: Mesh
    public material: MeshPhongMaterial
    private colors: App['Colors']

    constructor(colors: App['Colors']) {
        this.colors = colors
        // create the geometry (shape) of the cylinder;
        // the parameters are: 
        // radius top, radius bottom, height, number of segments on the radius, number of segments vertically

        this.geom = new CylinderGeometry(600, 600, 800, 40, 10)
        this.material = new MeshPhongMaterial({
            color: this.colors.blue,
            transparent: true, opacity: 6, flatShading: true
        })
        this.mesh = new Mesh(this.geom, this.material)

        this.mesh.receiveShadow = true
        // rotate the geometry on the x axis
        this.geom.applyMatrix4(new Matrix4().makeRotationX(-Math.PI / 2))
    }


    public update(t: number) {
        this.mesh.rotation.z += .0025;
    }
}
