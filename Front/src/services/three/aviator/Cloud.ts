import { ThreeObject } from "src/interfaces";
import { BoxGeometry, Mesh, MeshPhongMaterial, Object3D } from "three";
import { App } from "./App";

export class Cloud implements ThreeObject {
    public geom: BoxGeometry
    public mesh: Object3D
    public material: MeshPhongMaterial
    public nBlocs = 3 + Math.floor(Math.random() * 3)
    private colors: App['Colors']


    constructor(colors: App['Colors']) {
        this.colors = colors

        // create the geometry (shape) of the cylinder;
        // the parameters are: 
        // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
        this.geom = new BoxGeometry(20, 20, 20)
        this.material = new MeshPhongMaterial({
            color: this.colors.white,
        })
        this.mesh = new Object3D()

        for (let i = 0; i < this.nBlocs; i++) {
            // create the mesh by cloning the geometry
            const m = new Mesh(this.geom, this.material);
            // set the position and the rotation of each cube randomly
            m.position.x = i * 15;
            m.position.y = Math.random() * 10;
            m.position.z = Math.random() * 10;
            m.rotation.z = Math.random() * Math.PI * 2;
            m.rotation.y = Math.random() * Math.PI * 2;
            // set the size of the cube randomly
            const s = .1 + Math.random() * .9;
            m.scale.set(s, s, s);
            // allow each cube to cast and to receive shadows
            m.castShadow = true;
            m.receiveShadow = true;
            // add the cube to the container we first created
            this.mesh.add(m);
        }
    }


    public update(t: number) {
        //TODO
    }
}