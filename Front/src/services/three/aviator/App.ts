import { ThreeActualView } from "src/interfaces"
import { Camera, Color, DirectionalLight, GridHelper, HemisphereLight, Scene, WebGLRenderer } from "three"
import { AirPlane } from "./AirPlane";
import { Light } from "./Light";
import { Sky } from "./Sky";
import { World } from "./World";

export class App implements ThreeActualView {

    private Colors = {
        red: 0xf25346,
        white: 0xd8d0d1,
        brown: 0x59332e,
        pink: 0xF5986E,
        brownDark: 0x23190f,
        blue: 0x68c3c0,
    };

    public scene: Scene
    public camera: Camera
    public cameraPosition = {
        x: 0, y: 200, z: 200
    }

    public fog: any
    public fieldOfView: any = 60
    public aspectRatio: any = window.innerWidth / window.innerHeight
    public nearPlane: any = 1
    public farPlane: any = 10000
    public HEIGHT: any
    public WIDTH: any
    public container: any
    public renderer: WebGLRenderer

    // My objects
    private light: undefined | Light
    private world: undefined | World
    private airPlaine: undefined | AirPlane
    private sky: undefined | Sky

    constructor(scene: Scene, camera: Camera, renderer: WebGLRenderer) {
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.init()
    }

    public destroy() {
        this.renderer.shadowMap.enabled = false
    }

    public init() {
        this.renderer.shadowMap.enabled = true
        // add the lights
        this.createLights();
        // add the objects
        this.createPlane();
        this.createWorld();
        this.createSky();
        this.createScene();
        // start a loop that will update the objects' positions 
        // and render the scene on each frame

    }

    public createScene() {
        const { x, y, z } = this.cameraPosition
        this.camera.position.x = x;
        this.camera.position.y = y;
        this.camera.position.z = z;

        // Seriously ?
        (this.camera as any)['fov'] = this.fieldOfView;
        (this.camera as any)['aspect'] = this.aspectRatio;
        (this.camera as any)['far'] = this.farPlane;
        (this.camera as any)['near'] = this.nearPlane;
    };

    // add the lights
    public createLights() {
        this.light = new Light()
        this.scene.add(this.light.hemisphereLight)
        this.scene.add(this.light.shadowLight)
    };

    // add the objects
    public createPlane() {
        this.airPlaine = new AirPlane(this.Colors)
        this.airPlaine.mesh.scale.set(.25, .25, .25);
        this.airPlaine.mesh.position.y = 100;
        this.scene.add(this.airPlaine.mesh);
    };
    public createWorld() {
        this.world = new World(this.Colors)
        this.world.mesh.position.y = -600
        this.scene.add(this.world.mesh)
    };
    public createSky() {
        this.sky = new Sky(this.Colors)
        this.sky.mesh.position.y = -600;
        this.scene.add(this.sky.mesh);
    };

    public resize(vpW: number, vpH: number): void {
        console.log(vpW)
    }

    public update(t: number): void {
        if (this.airPlaine && this.world && this.sky) {
            this.airPlaine.propeller.rotation.x += 0.3;
            this.world.mesh.rotation.z += .005;
            this.sky.mesh.rotation.z += .01;
        }
    }
}
