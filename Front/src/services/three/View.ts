/*
 * View.ts
 * ===========
 * Topmost Three.js class. 
 * Controls scene, cam, renderer, and objects in scene.
 */

import { EngineBluePrint, ThreeActualView } from "src/interfaces";
import { PerspectiveCamera, Scene, WebGLRenderer, CameraHelper, Color, LoadingManager } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { App as SpaceFlight } from './space-flight'
import { App as Aviator } from './aviator'
import { App as InteractiveParticles } from './interactive-particles'
import { App as AppIntro } from './intro'


export default class View {
    private renderer: WebGLRenderer;
    private scene: Scene;
    private camera: PerspectiveCamera;
    // private helper: CameraHelper

    public actualView: {
        [key: string]: any,
        ready: boolean,
        engine: EngineBluePrint
    };

    constructor(canvasElem: HTMLCanvasElement) {

        this.renderer = new WebGLRenderer({
            canvas: canvasElem,
            antialias: true,
            powerPreference: 'high-performance',
            preserveDrawingBuffer: false,
            stencil: false,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor('white', 1);
        this.renderer.shadowMap.enabled = true
        const fov = 45;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 1;
        const far = 100;
        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        // const controls = new OrbitControls(this.camera, this.renderer.domElement);
        // this.helper = new CameraHelper(this.camera)
        this.scene = new Scene();
        this.scene.background = new Color(0x0000FF)

        // this.actualView = this.initAviator()
        // this.actualView = this.initInteractiveParticles()
        this.actualView = this.initAppIntro()
    }

    public initAppIntro() {
        return new AppIntro(this.scene, this.camera, this.renderer)
    }
    public initInteractiveParticles() {
        return new InteractiveParticles(this.scene, this.camera, this.renderer)
    }

    public initAviator() {
        return new Aviator(this.scene, this.camera, this.renderer)
    }

    public initSpaceFlight() {
        return new SpaceFlight(this.scene, this.camera)
    }

    public onWindowResize(vpW: number, vpH: number): void {
        this.renderer.setSize(vpW, vpH);
        this.camera.aspect = vpW / vpH;
        this.camera.updateProjectionMatrix();
        // if (this.actualView) {
        //     this.actualView.engine.resize(vpW, vpH)
        // }
    }

    public update(secs: number, delta: number): void {
        if (this.actualView.engine.ready) {
            this.actualView.engine.update(secs, delta)
        }
        this.renderer.clear()

        this.renderer.render(this.scene, this.camera);
    }
}