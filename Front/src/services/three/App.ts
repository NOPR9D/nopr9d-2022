import { Clock, LoadingManager } from "three";
import View from "./View";

export class App {
    public view: View;
    public clock!: Clock;
    public loadingManager!: LoadingManager
    public progressLoaded = 0

    constructor() {
        const canvasBox = <HTMLCanvasElement>document.getElementById("webgl-canvas");
        this.view = new View(canvasBox);
    }

    public initClock(){
        this.clock = new Clock(false);
        this.clock.start();
    }

    public resize = (): void => {
        this.view.onWindowResize(window.innerWidth, window.innerHeight);
    }

    public update() {
        if (this.view.actualView.ready) {
            this.view.update(this.clock.getElapsedTime() / 1000, this.clock.getDelta());
        }
        requestAnimationFrame(this.update.bind(this));
    }

}
