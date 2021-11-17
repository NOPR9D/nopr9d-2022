import { EngineBluePrint, ThreeObject } from "src/interfaces";
import { Color, LoadingManager, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { normalize } from "../utils";
import { Animation } from "./Animation";
import { Light } from "./Light";
import { User } from "./User";
import { World } from "./World";

export class Engine implements ThreeObject, EngineBluePrint {
    public ready = false
    public loadingManager: LoadingManager = new LoadingManager();

    public colors = {
        red: 0xf25346,
        white: 0xd8d0d1,
        brown: 0x59332e,
        pink: 0xF5986E,
        brownDark: 0x23190f,
        blue: 0x68c3c0,
        black: 0x000000
    };

    public scene !: Scene
    public camera !: PerspectiveCamera
    public renderer!:WebGLRenderer
    public cameraPosition = {
        x: 0, y: 100, z: 500
    }

    public status = "playing";

    public deltaTime = 0;
    public newTime = new Date().getTime();
    public oldTime = new Date().getTime();
    public mousePosition: { x: number, y: number } = { x: 0, y: 0 }
    public mouseTarget: { x: number, y: number } = { x: 0, y: 0 }

    // My objects
    public light!: Light
    public world!: World
    public user!: User

    // Scene settings
    public fog: any
    public fieldOfView = 50
    public aspectRatio: number = window.innerWidth / window.innerHeight
    public nearPlane = 0.1
    public farPlane = 10000

    public animation!: Animation

    public importSceneCameraRenderer(scene: Scene, camera: PerspectiveCamera,renderer?:WebGLRenderer) {
        this.scene = scene
        this.camera = camera
        return this;
    }


    public resolveAnimation() {
        this.animation.addAnimationToResolve('Thriller_Part_1.fbx', "thriller_1")
        this.animation.addAnimationToResolve('Thriller_Part_2.fbx', "thriller_2")
        this.animation.addAnimationToResolve('Thriller_Part_3.fbx', "thriller_3")
        this.animation.addAnimationToResolve('Thriller_Part_4.fbx', "thriller_4")
    }

    public async init() {
        this.scene.background = new Color(this.colors.black)
        this.animation = new Animation(this.loadingManager)
        this.createScene();
        // add the lights
        this.createLights();
        // add the objects
        this.createWorld();
        this.resolveAnimation()
        await this.animation.loadAsync()
        await this.createUser()
        this.ready = true
        // this.play()
    }

    public play() {
        // this.sound.audio.play()
    }

    public createScene() {
        const { x, y, z } = this.cameraPosition
        this.camera.position.x = x;
        this.camera.position.y = y;
        this.camera.position.z = z;
        this.camera['fov'] = this.fieldOfView;
        this.camera['aspect'] = this.aspectRatio;
        this.camera['far'] = this.farPlane;
        this.camera['near'] = this.nearPlane;
        this.camera.updateProjectionMatrix()
    };

    public async createUser() {
        this.user = new User(this.loadingManager)
        await this.user.createAsync()
        this.user.mixer.timeScale = 1 / 3;
        this.user.mixer.clipAction(this.animation.animationAction[0].getClip()).play()
        this.scene.add(this.user.mesh)
    }

    // add the lights
    public createLights() {
        this.light = new Light()
        this.scene.add(this.light.hemisphereLight)
        this.scene.add(this.light.shadowLight)
        this.scene.add(this.light.ambiantLight)
    };

    // add the objects
    public createWorld() {
        this.world = new World(this.colors)
        this.world.mesh.position.y = -600
        this.scene.add(this.world.mesh)
    };

    public update(t: number) {
        // this.updateWorld()
        if (this.user) {
            this.user.mixer.update(t)
        }
    }

    public updateCameraFov() {
        (this.camera as any).fov = normalize(this.mousePosition.x, -1, 1, 40, 80);
        (this.camera as any).updateProjectionMatrix();
    }


    public updateWorld() {
        this.world.mesh.rotation.z += .0025;
    }

    public handleMouseMove(event: any) {
        // here we are converting the mouse position value received 
        // to a normalized value varying between -1 and 1;
        // for the vertical axis, we need to inverse the formula 
        // because the 2D y-axis goes the opposite direction of the 3D y-axis
        this.mousePosition = { x: -1 + (event.clientX / window.innerWidth) * 2, y: 1 - (event.clientY / window.innerHeight) * 2 };
    }

}
