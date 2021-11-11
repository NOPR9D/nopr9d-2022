import { EngineBluePrint } from "src/interfaces";
import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { Particles } from "./Particles";
import { TouchTexture } from "./TouchTexture";

export class Engine implements EngineBluePrint {
    public scene!: Scene;
    public camera!: PerspectiveCamera;
    public cameraPosition = {
        x: 0, y: 0, z: 300
    }
    public renderer!: WebGLRenderer;
    public ready = false;
    public fieldOfView = 50;
    public aspectRatio: number = window.innerWidth / window.innerHeight;
    public nearPlane = 1;
    public farPlane = 10000;
    public particles!: Particles
    public touch!: TouchTexture


    importSceneCameraRenderer(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer): this {
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        return this;
    }
    createScene(): void {
        const { x, y, z } = this.cameraPosition
        this.camera.position.x = x;
        this.camera.position.y = y;
        this.camera.position.z = z;
        this.camera['fov'] = this.fieldOfView;
        this.camera['aspect'] = this.aspectRatio;
        this.camera['far'] = this.farPlane;
        this.camera['near'] = this.nearPlane;
        this.camera.updateProjectionMatrix()

    }
    createWorld(): void {
        this.particles = new Particles();
        this.scene.add(this.particles.container);
    }

    public async init(): Promise<any> {
        return new Promise((res, err) => {
            this.createScene()
            this.createWorld()
            this.initTouch()
            this.ready = true
            res(true)
        })
    }

    public initTouch() {
        // create only once
        if (!this.touch) this.touch = new TouchTexture(this);
        (this.particles.object3D.material as any).uniforms.uTouch.value = this.touch.texture;
    }

    public update(secs: number, delta: number) {
        if (!this.particles.object3D) return
        if (this.touch) this.touch.update(secs);
        (this.particles.object3D.material as any).uniforms.uTime.value += secs;
    }
}