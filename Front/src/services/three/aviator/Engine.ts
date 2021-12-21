import { EngineBluePrint, ThreeObject } from 'src/interfaces';
import { LoadingManager, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { normalize } from '../utils';
import { AirPlane } from './AirPlane';
import { EnnemiesHolder } from './EnnemiesHolder';
import { Ennemy } from './Ennemy';
import { Light } from './Light';
import { Sky } from './Sky';
import { Sound } from './Sound';
import { World } from './World';

export class Engine implements ThreeObject, EngineBluePrint {
	public loadingManager: LoadingManager = new LoadingManager();
	public ready = false;

	public colors = {
		red: 0xf25346,
		white: 0xd8d0d1,
		brown: 0x59332e,
		pink: 0xf5986e,
		brownDark: 0x23190f,
		blue: 0x68c3c0,
	};

	public scene!: Scene;
	public camera!: PerspectiveCamera;
	public renderer!: WebGLRenderer;
	public cameraPosition = {
		x: 0,
		y: 100,
		z: 200,
	};

	public speed = 0;
	public initSpeed = 0.00035;
	public baseSpeed = 0.00035;
	public targetBaseSpeed = 0.00035;
	public incrementSpeedByTime = 0.0000025;
	public incrementSpeedByLevel = 0.000005;
	public distanceForSpeedUpdate = 100;
	public speedLastUpdate = 0;

	public distance = 0;
	public ratioSpeedDistance = 50;
	public energy = 100;
	public ratioSpeedEnergy = 3;
	public blankEnergy = false;

	public level = 1;
	public levelLastUpdate = 0;
	public distanceForLevelUpdate = 1000;

	public planeDefaultHeight = 100;
	public planeAmpHeight = 80;
	public planeAmpWidth = 75;
	public planeMoveSensivity = 0.005;
	public planeRotXSensivity = 0.0008;
	public planeRotZSensivity = 0.0004;
	public planeFallSpeed = 0.001;
	public planeMinSpeed = 1.2;
	public planeMaxSpeed = 1.6;
	public planeSpeed = 0;
	public planeCollisionDisplacementX = 0;
	public planeCollisionSpeedX = 0;

	public planeCollisionDisplacementY = 0;
	public planeCollisionSpeedY = 0;

	public seaRadius = 600;
	public seaLength = 800;
	public seaRotationSpeed = 0.006;
	public wavesMinAmp = 5;
	public wavesMaxAmp = 20;
	public wavesMinSpeed = 0.001;
	public wavesMaxSpeed = 0.003;

	public cameraFarPos = 500;
	public cameraNearPos = 150;
	public cameraSensivity = 0.002;

	public coinDistanceTolerance = 15;
	public coinValue = 3;
	public coinsSpeed = 0.5;
	public coinLastSpawn = 0;
	public distanceForCoinsSpawn = 100;

	public ennemyDistanceTolerance = 10;
	public ennemyValue = 10;
	public ennemiesSpeed = 0.6;
	public ennemyLastSpawn = 0;
	public nEnnemies = 0;
	public distanceForEnnemiesSpawn = 50;

	public status = 'playing';

	public deltaTime = 0;
	public newTime = new Date().getTime();
	public oldTime = new Date().getTime();
	public ennemiesPool: Ennemy[] = [];
	public ennemiesHolder!: EnnemiesHolder;
	public particlesPool = [];
	public particlesHolder: any;
	public particlesInUse = [];
	public mousePosition: { x: number; y: number } = { x: 0, y: 0 };
	public mouseTarget: { x: number; y: number } = { x: 0, y: 0 };

	// UI
	public energyBar!: HTMLElement | null;
	public fieldDistance!: HTMLElement | null;
	public replayMessage!: HTMLElement | null;
	public fieldLevel!: HTMLElement | null;
	public levelCircle!: HTMLElement | null;

	// My objects
	public light!: Light;
	public world!: World;
	public airPlaine!: AirPlane;
	public sky!: Sky;
	public sound!: Sound;

	// Scene settings
	public fog: any;
	public fieldOfView = 50;
	public aspectRatio: number = window.innerWidth / window.innerHeight;
	public nearPlane = 0.1;
	public farPlane = 10000;

	public importSceneCameraRenderer(
		scene: Scene,
		camera: PerspectiveCamera,
		renderer: WebGLRenderer
	) {
		this.scene = scene;
		this.camera = camera;
		this.renderer = renderer;
		return this;
	}

	public async init() {
		this.ennemiesHolder = new EnnemiesHolder();
		this.energyBar = document.getElementById('');
		this.fieldDistance = document.getElementById('');
		this.replayMessage = document.getElementById('');
		this.fieldLevel = document.getElementById('');
		this.levelCircle = document.getElementById('');
		this.sound = new Sound();
		this.createScene();
		// add the lights
		this.createLights();
		// add the objects
		this.createWorld();
		await this.createPlane();
		await this.createAudio();
		this.createSky();
		this.ready = true;
		this.play();
		document.addEventListener(
			'mousemove',
			this.handleMouseMove.bind(this),
			false
		);
	}

	public play() {
		// this.sound.audio.play()
	}
	public async createAudio() {
		await this.sound.load();
		this.camera.add(this.sound.audioListener);
	}

	public createScene() {
		const { x, y, z } = this.cameraPosition;
		this.camera.position.x = x;
		this.camera.position.y = y;
		this.camera.position.z = z;
		this.camera['fov'] = this.fieldOfView;
		this.camera['aspect'] = this.aspectRatio;
		this.camera['far'] = this.farPlane;
		this.camera['near'] = this.nearPlane;
		this.camera.updateProjectionMatrix();
	}

	// add the lights
	public createLights() {
		this.light = new Light();
		this.scene.add(this.light.hemisphereLight);
		this.scene.add(this.light.shadowLight);
		this.scene.add(this.light.ambiantLight);
	}

	// add the objects
	public async createPlane() {
		this.airPlaine = new AirPlane();
		await this.airPlaine.createAsync();

		this.scene.add(this.airPlaine.mesh.scene);
	}
	public createWorld() {
		this.world = new World(this.colors);
		this.world.mesh.position.y = -600;
		this.scene.add(this.world.mesh);
	}
	public createSky() {
		this.sky = new Sky(this.colors);
		this.sky.mesh.position.y = -600;
		this.scene.add(this.sky.mesh);
	}

	public update(t: number) {
		this.mouseTarget.y = normalize(this.mousePosition.y, -0.75, 0.75, 25, 175);
		this.mouseTarget.x = normalize(
			this.mousePosition.x,
			-0.75,
			0.75,
			-100,
			100
		);
		// this.sound.update()
		this.updateAirPlaine();
		this.updateWorld();
		this.updateSky();
		this.updateCameraFov();
	}

	public updateCameraFov() {
		(this.camera as any).fov = normalize(this.mousePosition.x, -1, 1, 40, 80);
		(this.camera as any).updateProjectionMatrix();
	}

	public updateAirPlaine() {
		this.airPlaine.mesh.scene.position.y +=
			(this.mouseTarget.y - this.airPlaine.mesh.scene.position.y) * 0.1;
		this.airPlaine.mesh.scene.rotation.x +=
			(this.mouseTarget.y - this.airPlaine.mesh.scene.position.y) * 0.0009;
		this.airPlaine.mesh.scene.position.z =
			(this.mouseTarget.y - this.airPlaine.mesh.scene.position.y) * 0.0128;
		this.airPlaine.mesh.scene.position.x =
			(this.airPlaine.mesh.scene.position.y - this.mouseTarget.y) * 0.0064;
	}

	public updateWorld() {
		this.world.mesh.rotation.z += 0.0025;
	}

	public updateSky() {
		this.sky.mesh.rotation.z += 0.005;
		// this.sky.moveClouds()
	}

	public updateEnergy() {
		this.energy -= this.speed * this.deltaTime * this.ratioSpeedEnergy;
		this.energy = Math.max(0, this.energy);
		this.energyBar!.style.right = 100 - this.energy + '%';
		this.energyBar!.style.backgroundColor =
			this.energy < 50 ? '#f25346' : '#68c3c0';

		if (this.energy < 30) {
			this.energyBar!.style.animationName = 'blinking';
		} else {
			this.energyBar!.style.animationName = 'none';
		}

		if (this.energy < 1) {
			this.status = 'this.ver';
		}
	}

	public addEnergy() {
		this.energy += this.coinValue;
		this.energy = Math.min(this.energy, 100);
	}

	public removeEnergy() {
		this.energy -= this.ennemyValue;
		this.energy = Math.max(0, this.energy);
	}

	// public createCoins() { }
	public createEnnemies() {
		for (let i = 0; i < 10; i++) {
			const ennemy = new Ennemy(this.colors.red);
			this.ennemiesPool.push(ennemy);
		}
		this.ennemiesHolder = new EnnemiesHolder();
		//ennemiesHolder.mesh.position.y = -game.seaRadius;
		this.scene.add(this.ennemiesHolder.mesh);
	}

	public spawnEnnemises() {
		for (let i = 0; i < this.nEnnemies; i++) {
			let ennemy: Ennemy;
			if (this.ennemiesPool.length) {
				ennemy = this.ennemiesPool.pop() ?? new Ennemy(this.colors.red);
			} else {
				ennemy = new Ennemy(this.colors.red);
			}

			ennemy.angle = -(i * 0.1);
			ennemy.dist =
				this.seaRadius +
				this.planeDefaultHeight +
				(-1 + Math.random() * 2) * (this.planeAmpHeight - 20);
			ennemy.mesh.position.y =
				-this.seaRadius + Math.sin(ennemy.angle) * ennemy.dist;
			ennemy.mesh.position.x = Math.cos(ennemy.angle) * ennemy.dist;

			this.ennemiesHolder.mesh.add(ennemy.mesh);
			this.ennemiesHolder.ennemiesInUse.push(ennemy);
		}
	}

	public rotateEnnemies() {
		for (let i = 0; i < this.ennemiesHolder.ennemiesInUse.length; i++) {
			const ennemy = this.ennemiesHolder.ennemiesInUse[i];
			ennemy.angle += this.speed * this.deltaTime * this.ennemiesSpeed;

			if (ennemy.angle > Math.PI * 2) ennemy.angle -= Math.PI * 2;

			ennemy.mesh.position.y =
				-this.seaRadius + Math.sin(ennemy.angle) * ennemy.dist;
			ennemy.mesh.position.x = Math.cos(ennemy.angle) * ennemy.dist;
			ennemy.mesh.rotation.z += Math.random() * 0.1;
			ennemy.mesh.rotation.y += Math.random() * 0.1;

			//var globalEnnemyPosition =  ennemy.mesh.localToWorld(new THREE.Vector3());
			const diffPos = this.airPlaine.mesh.position
				.clone()
				.sub(ennemy.mesh.position.clone());
			const d = diffPos.length();
			if (d < this.ennemyDistanceTolerance) {
				this.particlesHolder.spawnParticles(
					ennemy.mesh.position.clone(),
					15,
					this.colors.red,
					3
				);

				this.ennemiesPool.unshift(
					this.ennemiesHolder.ennemiesInUse.splice(i, 1)[0]
				);
				this.ennemiesHolder.mesh.remove(ennemy.mesh);
				this.planeCollisionSpeedX = (100 * diffPos.x) / d;
				this.planeCollisionSpeedY = (100 * diffPos.y) / d;
				this.light.ambiantLight.intensity = 2;

				this.removeEnergy();
				i--;
			} else if (ennemy.angle > Math.PI) {
				this.ennemiesPool.unshift(
					this.ennemiesHolder.ennemiesInUse.splice(i, 1)[0]
				);
				this.ennemiesHolder.mesh.remove(ennemy.mesh);
				i--;
			}
		}
	}
	// public createParticles() { }

	public handleMouseMove(event: any) {
		// here we are converting the mouse position value received
		// to a normalized value varying between -1 and 1;
		// for the vertical axis, we need to inverse the formula
		// because the 2D y-axis goes the opposite direction of the 3D y-axis
		this.mousePosition = {
			x: -1 + (event.clientX / window.innerWidth) * 2,
			y: 1 - (event.clientY / window.innerHeight) * 2,
		};
	}
}
