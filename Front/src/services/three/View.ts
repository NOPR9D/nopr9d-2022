/*
 * View.ts
 * ===========
 * Topmost Three.js class. 
 * Controls scene, cam, renderer, and objects in scene.
 */

import { ThreeActualView } from "src/interfaces";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { App as SpaceFlight } from './space-flight'


export default class View {
    private renderer: WebGLRenderer;
    private scene: Scene;
    private camera: PerspectiveCamera;

    private actualView: ThreeActualView;

    constructor(canvasElem: HTMLCanvasElement) {

        this.renderer = new WebGLRenderer({
            canvas: canvasElem,
        });
        this.camera = new PerspectiveCamera(45, 1, 0.1, 100);
        this.camera.position.z = 15;
        this.scene = new Scene();
        // Set initial sizes

        this.actualView = new SpaceFlight(this.scene, this.camera)

        this.onWindowResize(window.innerWidth, window.innerHeight);
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