/*
 * View.ts
 * ===========
 * Topmost Three.js class. 
 * Controls scene, cam, renderer, and objects in scene.
 */

import { ThreeActualView } from "src/interfaces";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { App as SpaceFlight } from './space-flight'
import { App as Aviator } from './aviator'


export default class View {
    private renderer: WebGLRenderer;
    private scene: Scene;
    private camera: PerspectiveCamera;

    private actualView: ThreeActualView;

    constructor(canvasElem: HTMLCanvasElement) {

        this.renderer = new WebGLRenderer({
            canvas: canvasElem,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0xffffff, 1);
        const fov = 45;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 1;
        const far = 100;

        this.camera = new PerspectiveCamera(fov, aspect, near, far);

        this.scene = new Scene();
        this.actualView = this.initAviator()

        this.onWindowResize(window.innerWidth, window.innerHeight);
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
        if (this.actualView) {
            this.actualView.resize(vpW, vpH)
        }
    }

    public update(secs: number): void {
        if (this.actualView) {
            this.actualView.update(secs)
        }
        this.renderer.render(this.scene, this.camera);
    }
}