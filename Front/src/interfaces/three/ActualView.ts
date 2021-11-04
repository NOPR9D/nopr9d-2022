import { Camera, Scene } from "three";

export interface ThreeActualView {
    scene: Scene
    camera: Camera
    resize(vpW: number, vpH: number): void
    update(t: number): void
}