import View from "./View";

export class App {
    private view: View;

    constructor() {
        const canvasBox = <HTMLCanvasElement>document.getElementById("webgl-canvas");
        this.view = new View(canvasBox);

        window.addEventListener("resize", this.resize);
        this.update(0);
    }

    private resize = (): void => {
        this.view.onWindowResize(window.innerWidth, window.innerHeight);
    }

    private update = (t: number): void => {
        this.view.update(t / 1000);
        requestAnimationFrame(this.update);
    }
}
