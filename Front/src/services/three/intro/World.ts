import {   Mesh, MeshBasicMaterial,  PlaneBufferGeometry } from "three";

export class World {
    public geom: PlaneBufferGeometry
    public mesh: Mesh
    public material: MeshBasicMaterial

    constructor(colors: any) {
        // create the geometry (shape) of the cylinder;
        // the parameters are: 
        // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
        this.geom = new PlaneBufferGeometry(600, 600)
        this.material = new MeshBasicMaterial({
            color: colors.blue,
        })
        this.mesh = new Mesh(this.geom, this.material)
        this.mesh.receiveShadow = true
    }
}
