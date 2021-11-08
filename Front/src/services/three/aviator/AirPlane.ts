import { ThreeObjectWithInteraction } from "src/interfaces";
import { LoadingManager, Object3D } from "three";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { App } from "./App";

export class AirPlane implements ThreeObjectWithInteraction {
    public mesh: GLTF | any
    private colors: App['Colors']
    private loader: GLTFLoader
    private loadingManager: LoadingManager


    constructor(colors: App['Colors']) {
        this.colors = colors
        this.loadingManager = new LoadingManager()
        this.loader = new GLTFLoader(this.loadingManager)
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/js/libs/draco/')
        this.loader.setDRACOLoader(dracoLoader)
    }
    public update(t: number, tx: any, ty: any) {
        this.mesh.scene.position.y += (ty - this.mesh.scene.position.y) * 0.1;
        this.mesh.scene.rotation.x += (ty - this.mesh.scene.position.y) * 0.0009;
        this.mesh.scene.position.z = (ty - this.mesh.scene.position.y) * 0.0128;
        this.mesh.scene.position.x = (this.mesh.scene.position.y - ty) * 0.0064;

    }


    public createAsync() {
        return new Promise((res, err) => {
            this.loader.load('/three/Ship.glb', (gltf) => {
                gltf.scene.scale.set(1.5, 1.5, 1.5)
                gltf.scene.position.set(0, 100, 0)
                gltf.scene.traverse(child => {
                    if (child.isObject3D) {
                        child.receiveShadow = true
                        child.castShadow = true
                    }
                })
                this.mesh = gltf
                res(true)
            },
                // called while loading is progressing
                (xhr) => {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded')
                },
                // called when loading has errors
                (error) => {
                    console.log(error)
                    console.log('An error happened');
                    err(false)
                })
        })
    }
}
