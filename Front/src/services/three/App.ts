import { Clock } from "three";
import View from "./View";

export class App {
    private view: View;
    private clock: Clock

    constructor() {
        const canvasBox = <HTMLCanvasElement>document.getElementById("webgl-canvas");
        this.view = new View(canvasBox);
        this.clock = new Clock(false);
        this.clock.start();
        this.resize()
        this.update.bind(this)();
        window.addEventListener("resize", this.resize);

    }

    private resize = (): void => {
        this.view.onWindowResize(window.innerWidth, window.innerHeight);
    }

    private update() {
        this.view.update(this.clock.getElapsedTime() / 1000);
        requestAnimationFrame(this.update.bind(this));
    }
}
