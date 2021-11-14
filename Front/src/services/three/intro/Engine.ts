import { EngineBluePrint, ThreeObject } from "src/interfaces";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { normalize } from "../utils";
import { Animation } from "./Animation";
import { EnnemiesHolder } from "./EnnemiesHolder";
import { Ennemy } from "./Ennemy";
import { Light } from "./Light";
import { User } from "./User";
import { World } from "./World";

export class Engine implements ThreeObject, EngineBluePrint {
    public ready = false

    public colors = {
        red: 0xf25346,
        white: 0xd8d0d1,
        brown: 0x59332e,
        pink: 0xF5986E,
        brownDark: 0x23190f,
        blue: 0x68c3c0,
    };

    public scene !: Scene
    public camera !: PerspectiveCamera
    public renderer!: WebGLRenderer
    public cameraPosition = {
        x: 0, y: 100, z: 200
    }

    public status = "playing";

    public deltaTime = 0;
    public newTime = new Date().getTime();
    public oldTime = new Date().getTime();
    public ennemiesPool: Ennemy[] = [];
    public ennemiesHolder!: EnnemiesHolder;
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
    public nearPlane =0.1
    public farPlane = 10000

    public animation!: Animation

    public importSceneCameraRenderer(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer) {
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        return this;
    }

    public async init() {
        this.animation = new Animation()
        this.ennemiesHolder = new EnnemiesHolder()
        this.createScene();
        // add the lights
        this.createLights();
        // add the objects
        // this.createWorld();
        this.animation.addAnimationToResolve('Thriller_Part_1.fbx')
        await this.animation.loadAsync()
        await this.createUser()
        this.ready = true
        // this.play()
        document.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
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
        const _user = new User()
        await _user.createAsync()
        console.log(this.animation.animationAction)
        this.user = _user
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
        this.mouseTarget.y = normalize(this.mousePosition.y, -.75, .75, 25, 175);
        this.mouseTarget.x = normalize(this.mousePosition.x, -.75, .75, -100, 100);
        // this.updateWorld()
       if(this.user){
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

    // public createCoins() { }
    public createEnnemies() {
        for (let i = 0; i < 10; i++) {
            const ennemy = new Ennemy(this.colors.red);
            this.ennemiesPool.push(ennemy);
        }
        this.ennemiesHolder = new EnnemiesHolder();
        //ennemiesHolder.mesh.position.y = -game.seaRadius;
        this.scene.add(this.ennemiesHolder.mesh)
    }


    // public createParticles() { }


    public handleMouseMove(event: any) {
        // here we are converting the mouse position value received 
        // to a normalized value varying between -1 and 1;
        // for the vertical axis, we need to inverse the formula 
        // because the 2D y-axis goes the opposite direction of the 3D y-axis
        this.mousePosition = { x: -1 + (event.clientX / window.innerWidth) * 2, y: 1 - (event.clientY / window.innerHeight) * 2 };
    }

}
