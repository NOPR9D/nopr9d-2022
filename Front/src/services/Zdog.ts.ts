import { Ellipse, Illustration } from "zdog";

export class Zdog {
  private illustrations: {
    [key: string]: { illustration: Illustration; fn: () => void };
  } = {};

  public addIllustration(
    name: string,
    canvas: string | HTMLCanvasElement | SVGSVGElement,
    fn?: () => void
  ) {
    const _void = () => null;
    this.illustrations[name] = {
      illustration: new Illustration({
        element: canvas,
      }),
      fn: fn || _void,
    };

    return this.illustrations[name].illustration;
  }

  public addElipse(
    _illustration: string,
    diameter: number,
    stroke: number,
    color: string
  ) {
    new Ellipse({
      addTo: this.illustrations[_illustration].illustration,
      diameter: diameter ?? 20,
      stroke: stroke ?? 20,
      color: color ?? "#636",
    });
  }

  public addRect(
    _illustration: string,
    diameter: number,
    stroke: number,
    color: string
  ) {
    new Ellipse({
      addTo: this.illustrations[_illustration].illustration,
      diameter: diameter ?? 20,
      stroke: stroke ?? 20,
      color: color ?? "#636",
    });
  }

  public animate(ctx?: any) {
    Object.keys(this.illustrations).forEach((_illustration) => {
      if (ctx) {
        this.illustrations[_illustration].fn.bind(ctx)();
      } else {
        this.illustrations[_illustration].fn();
      }
      this.illustrations[_illustration].illustration.updateRenderGraph();
    });
    requestAnimationFrame(this.animate.bind(this));
  }

  public getIllustation(name: string) {
    return this.illustrations[name];
  }

  public setIllustrationFn(name: string, fn: (any?: any) => void) {
    this.illustrations[name].fn = fn.bind(
      this.illustrations[name].illustration
    );
  }
}
