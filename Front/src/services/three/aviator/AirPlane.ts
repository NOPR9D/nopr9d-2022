import { ThreeObject } from "src/interfaces";
import { BoxGeometry, Mesh, MeshPhongMaterial, Object3D } from "three";
import { App } from "./App";

export class AirPlane implements ThreeObject {
    public geomCockpit: BoxGeometry
    public materialCockpit: MeshPhongMaterial
    public cockPit: Mesh

    public geomEngine: BoxGeometry
    public materialEngine: MeshPhongMaterial
    public engine: Mesh

    public geomTailPlane: BoxGeometry
    public materialTailPlane: MeshPhongMaterial
    public tailPlane: Mesh

    public geomSideWing: BoxGeometry
    public materialSideWing: MeshPhongMaterial
    public sideWing: Mesh

    public geomPropeller: BoxGeometry
    public materialPropeller: MeshPhongMaterial
    public propeller: Mesh

    public geomBlade: BoxGeometry
    public materialBlade: MeshPhongMaterial
    public blade: Mesh

    public mesh: Object3D
    public nBlocs = 3 + Math.floor(Math.random() * 3)
    private colors: App['Colors']


    constructor(colors: App['Colors']) {
        this.colors = colors

        this.mesh = new Object3D();

        // Create the cabin
        this.geomCockpit = new BoxGeometry(60, 50, 50, 1, 1, 1);
        this.materialCockpit = new MeshPhongMaterial({ color: this.colors.red, flatShading: true });
        this.cockPit = new Mesh(this.geomCockpit, this.materialCockpit);
        this.cockPit.castShadow = true;
        this.cockPit.receiveShadow = true;
        this.mesh.add(this.cockPit);

        // Create the engine
        this.geomEngine = new BoxGeometry(20, 50, 50, 1, 1, 1);
        this.materialEngine = new MeshPhongMaterial({ color: this.colors.white, flatShading: true });
        this.engine = new Mesh(this.geomEngine, this.materialEngine);
        this.engine.position.x = 40;
        this.engine.castShadow = true;
        this.engine.receiveShadow = true;
        this.mesh.add(this.engine);

        // Create the tail
        this.geomTailPlane = new BoxGeometry(15, 20, 5, 1, 1, 1);
        this.materialTailPlane = new MeshPhongMaterial({ color: this.colors.red, flatShading: true });
        this.tailPlane = new Mesh(this.geomTailPlane, this.materialTailPlane);
        this.tailPlane.position.set(-35, 25, 0);
        this.tailPlane.castShadow = true;
        this.tailPlane.receiveShadow = true;
        this.mesh.add(this.tailPlane);

        // Create the wing
        this.geomSideWing = new BoxGeometry(40, 8, 150, 1, 1, 1);
        this.materialSideWing = new MeshPhongMaterial({ color: this.colors.red, flatShading: true });
        this.sideWing = new Mesh(this.geomSideWing, this.materialSideWing);
        this.sideWing.castShadow = true;
        this.sideWing.receiveShadow = true;
        this.mesh.add(this.sideWing);

        // propeller
        this.geomPropeller = new BoxGeometry(20, 10, 10, 1, 1, 1);
        this.materialPropeller = new MeshPhongMaterial({ color: this.colors.brown, flatShading: true });
        this.propeller = new Mesh(this.geomPropeller, this.materialPropeller);
        this.propeller.castShadow = true;
        this.propeller.receiveShadow = true;

        // blades
        this.geomBlade = new BoxGeometry(1, 100, 20, 1, 1, 1);
        this.materialBlade = new MeshPhongMaterial({ color: this.colors.brownDark, flatShading: true });

        this.blade = new Mesh(this.geomBlade, this.materialBlade);
        this.blade.position.set(8, 0, 0);
        this.blade.castShadow = true;
        this.blade.receiveShadow = true;
        this.propeller.add(this.blade);
        this.propeller.position.set(50, 0, 0);
        this.mesh.add(this.propeller);
    }
    public update(t: number) {
        //TODO
    }
}
