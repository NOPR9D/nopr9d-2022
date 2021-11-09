import { ThreeActualView } from "src/interfaces"
import { Camera, AudioAnalyser, Scene, WebGLRenderer, Audio, AudioListener, AudioLoader } from "three"
import { normalize } from "../utils";
import { AirPlane } from "./AirPlane";
import { Light } from "./Light";
import { Sky } from "./Sky";
import { Sound } from "./Sound";
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
        x: 0, y: 100, z: 200
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
    public mousePosition: { x: number, y: number } = { x: 0, y: 0 }

    // My objects
    private light: undefined | Light
    private world: undefined | World
    private airPlaine: undefined | AirPlane
    private sky: undefined | Sky
    private sound: Sound

    constructor(scene: Scene, camera: Camera, renderer: WebGLRenderer) {
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.sound = new Sound()
        this.init()
    }

    public async init() {
        this.createScene();
        // add the lights
        this.createLights();
        // add the objects
        this.createWorld();
        await this.createPlane()
        this.createSky();
        document.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
        await this.createAudio()
        this.play()
    }

    public async createAudio() {
        await this.sound.load()
        this.camera.add(this.sound.audioListener)
    }

    public play() {
        this.sound.audio.play()

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
        this.scene.add(this.light.ambiantLight)
    };

    // add the objects
    public async createPlane() {
        this.airPlaine = new AirPlane(this.Colors)
        await this.airPlaine.createAsync()

        this.scene.add(this.airPlaine.mesh.scene);
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


    public handleMouseMove(event: any) {
        // here we are converting the mouse position value received 
        // to a normalized value varying between -1 and 1;
        // for the vertical axis, we need to inverse the formula 
        // because the 2D y-axis goes the opposite direction of the 3D y-axis
        this.mousePosition = { x: -1 + (event.clientX / window.innerWidth) * 2, y: 1 - (event.clientY / window.innerHeight) * 2 };

    }

    public update(t: number): void {
        if (this.airPlaine && this.world && this.sky) {
            const targetY = normalize(this.mousePosition.y, -.75, .75, 25, 175);
            const targetX = normalize(this.mousePosition.x, -.75, .75, -100, 100);
            this.updateCameraFov()
            this.airPlaine.update(t, targetX, targetY)
            this.world.update(t)
            this.sky.update(t)
        }
    }


    public updateCameraFov() {
        (this.camera as any).fov = normalize(this.mousePosition.x, -1, 1, 40, 80);
        (this.camera as any).updateProjectionMatrix();
    }

}
