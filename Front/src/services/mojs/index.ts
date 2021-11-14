import { CustomShape, addShape, Shape, easing, Timeline, stagger, h, ShapeOptions } from '@mojs/core';
import { increase, scale } from './utils'
const COLORS = {
    white: '#ffffff',
    black: '#000000',
    green: '#49F2CC',
    lightGrey: '#777',
    grey: '#29363B',
    cyan: 'cyan',
    yellow: '#FFE202',
    hotpink: 'deeppink',
};

const HIDE_THEN = {
    delay: 930,
    isShowEnd: false
}

// return svg path
const _path = (d: string) => `<path  d="${d}"></path>`

// ADD CUSTOM SHAPES
class _M extends CustomShape {
    getShape() {
        return _path("M 39.8 47.7 L 64.05 3.65 A 5.675 5.675 0 0 1 64.399 3.103 Q 64.796 2.558 65.21 2.335 A 1.384 1.384 0 0 1 65.4 2.25 A 3.406 3.406 0 0 1 65.896 2.118 Q 66.42 2.017 67.154 2.002 A 12.635 12.635 0 0 1 67.4 2 L 74.55 2 L 74.55 73.65 L 66.05 73.65 L 66.05 21 A 50.268 50.268 0 0 1 66.07 19.629 A 61.411 61.411 0 0 1 66.1 18.75 Q 66.15 17.55 66.25 16.3 L 41.7 61.1 A 5.243 5.243 0 0 1 40.833 62.274 A 3.586 3.586 0 0 1 38.2 63.35 L 36.8 63.35 A 3.624 3.624 0 0 1 33.895 61.977 A 5.617 5.617 0 0 1 33.3 61.1 L 8.2 16.15 Q 8.35 17.45 8.425 18.7 A 44.013 44.013 0 0 1 8.481 19.9 A 33.802 33.802 0 0 1 8.5 21 L 8.5 73.65 L 0 73.65 L 0 2 L 7.15 2 A 10.931 10.931 0 0 1 7.869 2.022 Q 8.658 2.074 9.15 2.25 A 1.624 1.624 0 0 1 9.641 2.541 Q 10.021 2.859 10.385 3.454 A 6.647 6.647 0 0 1 10.5 3.65 L 35.25 47.75 Q 35.95 48.95 36.475 50.275 Q 37 51.6 37.5 52.95 A 45.351 45.351 0 0 1 38.413 50.596 A 40.935 40.935 0 0 1 38.55 50.275 Q 39.1 49 39.8 47.7 Z")
    }
}
class _y extends CustomShape {
    getShape() { return _path('M 133.7 23 L 105.45 88.6 A 5.507 5.507 0 0 1 104.981 89.446 A 4.073 4.073 0 0 1 104.325 90.2 Q 103.827 90.643 102.934 90.759 A 5.319 5.319 0 0 1 102.25 90.8 L 95.65 90.8 L 104.9 70.7 L 84 23 L 91.7 23 A 3.704 3.704 0 0 1 92.424 23.066 Q 92.848 23.151 93.179 23.344 A 2.006 2.006 0 0 1 93.5 23.575 A 3.982 3.982 0 0 1 94.092 24.221 A 3.265 3.265 0 0 1 94.45 24.85 L 108 56.75 Q 108.45 57.85 108.775 58.95 Q 109.1 60.05 109.35 61.2 Q 109.7 60.05 110.05 58.95 A 36.341 36.341 0 0 1 110.739 56.987 A 40.211 40.211 0 0 1 110.85 56.7 L 124 24.85 Q 124.3 24.05 125.025 23.525 A 2.722 2.722 0 0 1 126.005 23.068 A 2.598 2.598 0 0 1 126.6 23 L 133.7 23 Z'); }
}
class _L extends CustomShape {
    getShape() { return _path('M 152.9 2 L 152.9 65.5 L 183.9 65.5 L 183.9 73.65 L 143.2 73.65 L 143.2 2 L 152.9 2 Z'); }
}
class _a extends CustomShape {
    getShape() { return _path('M 230.4 41.25 L 230.4 73.65 L 226.45 73.65 Q 225.523 73.65 224.851 73.447 A 3.165 3.165 0 0 1 224.35 73.25 Q 223.55 72.85 223.3 71.55 L 222.3 66.85 A 60.946 60.946 0 0 1 219.839 68.954 A 50.506 50.506 0 0 1 218.4 70.075 Q 216.5 71.5 214.4 72.475 Q 212.3 73.45 209.925 73.95 A 22.817 22.817 0 0 1 207.097 74.353 A 29.853 29.853 0 0 1 204.65 74.45 A 18.691 18.691 0 0 1 200.603 74.024 A 16.577 16.577 0 0 1 199.125 73.625 A 12.942 12.942 0 0 1 195.644 71.925 A 11.89 11.89 0 0 1 194.65 71.15 Q 192.75 69.5 191.625 66.975 A 12.493 12.493 0 0 1 190.747 64.031 Q 190.5 62.617 190.5 61 A 11 11 0 0 1 191.855 55.747 A 13.226 13.226 0 0 1 192.15 55.225 Q 193.617 52.758 196.684 50.785 A 21.949 21.949 0 0 1 197.475 50.3 A 24.912 24.912 0 0 1 200.765 48.71 Q 202.487 48.017 204.531 47.435 A 52.477 52.477 0 0 1 207.1 46.775 Q 211.655 45.722 217.764 45.358 A 107.359 107.359 0 0 1 221.65 45.2 L 221.65 41.25 Q 221.65 37.433 220.593 34.82 A 9.297 9.297 0 0 0 219.125 32.325 A 8.103 8.103 0 0 0 214.702 29.641 Q 213.313 29.3 211.65 29.3 A 21.405 21.405 0 0 0 209.357 29.416 Q 208.181 29.543 207.178 29.809 A 10.953 10.953 0 0 0 206.175 30.125 Q 203.95 30.95 202.325 31.975 A 89.898 89.898 0 0 0 201.17 32.716 Q 200.601 33.087 200.101 33.427 A 48.773 48.773 0 0 0 199.525 33.825 A 5.141 5.141 0 0 1 198.611 34.344 Q 197.901 34.65 197.2 34.65 Q 196.3 34.65 195.625 34.175 Q 194.95 33.7 194.55 33 L 192.95 30.15 A 30.807 30.807 0 0 1 198.454 25.888 A 26.451 26.451 0 0 1 202 24.1 A 26.557 26.557 0 0 1 209.514 22.258 A 32.393 32.393 0 0 1 212.75 22.1 A 21.995 21.995 0 0 1 216.762 22.45 A 16.935 16.935 0 0 1 220.3 23.5 A 15.801 15.801 0 0 1 224.815 26.359 A 14.817 14.817 0 0 1 225.85 27.4 A 15.926 15.926 0 0 1 228.689 31.934 A 19.217 19.217 0 0 1 229.25 33.45 A 23.623 23.623 0 0 1 230.276 38.536 A 29.036 29.036 0 0 1 230.4 41.25 Z M 221.65 61.4 L 221.65 50.85 Q 215.5 51.05 211.2 51.825 A 42.076 42.076 0 0 0 208.316 52.443 Q 206.974 52.784 205.839 53.187 A 19.122 19.122 0 0 0 204.2 53.85 Q 202.234 54.76 201.05 55.909 A 6.71 6.71 0 0 0 200.275 56.8 Q 199.05 58.5 199.05 60.6 A 10.329 10.329 0 0 0 199.172 62.231 Q 199.332 63.229 199.7 64.05 A 6.995 6.995 0 0 0 200.631 65.587 A 6.058 6.058 0 0 0 201.45 66.425 A 6.777 6.777 0 0 0 203.636 67.646 A 7.974 7.974 0 0 0 204.05 67.775 A 11.252 11.252 0 0 0 206.231 68.158 A 13.502 13.502 0 0 0 207.3 68.2 A 20.226 20.226 0 0 0 209.784 68.054 A 15.952 15.952 0 0 0 211.6 67.725 Q 213.55 67.25 215.275 66.375 Q 217 65.5 218.575 64.25 A 27.67 27.67 0 0 0 220.895 62.178 A 31.598 31.598 0 0 0 221.65 61.4 Z'); }
}
class _b extends CustomShape {
    getShape() { return _path('M 249.95 73.65 L 244.2 73.65 L 244.2 0 L 253.15 0 L 253.15 30.3 Q 256.3 26.65 260.375 24.425 A 18.204 18.204 0 0 1 267.071 22.348 A 22.815 22.815 0 0 1 269.7 22.2 A 20.276 20.276 0 0 1 274.381 22.722 A 17.048 17.048 0 0 1 277.65 23.85 A 16.057 16.057 0 0 1 283.69 28.762 A 18.329 18.329 0 0 1 283.7 28.775 A 20.899 20.899 0 0 1 286.149 32.95 A 28.308 28.308 0 0 1 287.55 36.875 Q 288.9 41.7 288.9 48 A 36.906 36.906 0 0 1 288.254 55.016 A 31.82 31.82 0 0 1 287.4 58.425 A 26.924 26.924 0 0 1 285.08 63.823 A 22.882 22.882 0 0 1 283.075 66.775 Q 280.25 70.3 276.175 72.325 A 19.44 19.44 0 0 1 269.486 74.223 A 23.907 23.907 0 0 1 267 74.35 Q 262.418 74.35 259.126 72.689 A 13.035 13.035 0 0 1 258.675 72.45 A 18.575 18.575 0 0 1 253.434 68.077 A 21.857 21.857 0 0 1 252.7 67.15 L 252.25 71.75 Q 251.898 73.42 250.388 73.622 A 3.302 3.302 0 0 1 249.95 73.65 Z M 253.15 36.95 L 253.15 61.45 A 17.626 17.626 0 0 0 255.187 63.809 Q 256.738 65.298 258.475 66.1 A 14.731 14.731 0 0 0 263.242 67.366 A 17.952 17.952 0 0 0 265 67.45 A 15.888 15.888 0 0 0 269.677 66.798 A 12.044 12.044 0 0 0 275.9 62.4 A 16.863 16.863 0 0 0 278.464 57.266 Q 279.7 53.332 279.7 48 A 46.977 46.977 0 0 0 279.556 44.209 Q 279.41 42.421 279.12 40.866 A 24.635 24.635 0 0 0 278.825 39.5 Q 277.95 35.95 276.3 33.675 A 10.229 10.229 0 0 0 273.811 31.217 A 9.424 9.424 0 0 0 272.25 30.35 Q 269.85 29.3 266.8 29.3 A 16.001 16.001 0 0 0 262.659 29.816 A 13.159 13.159 0 0 0 259.175 31.3 Q 255.9 33.3 253.15 36.95 Z'); }
}
class _z extends CustomShape {
    getShape() { return _path('M 335.15 23 L 335.15 26.8 Q 335.15 27.75 334.8 28.625 A 6.379 6.379 0 0 1 333.968 30.112 A 5.982 5.982 0 0 1 333.9 30.2 L 306.5 66.7 L 334.15 66.7 L 334.15 73.65 L 296 73.65 L 296 69.95 Q 296 69.445 296.196 68.805 A 6.845 6.845 0 0 1 296.325 68.425 Q 296.65 67.55 297.25 66.75 L 324.8 30 L 297.55 30 L 297.55 23 L 335.15 23 Z'); }
}

class _largeBeaker extends CustomShape {
    getShape(){return _path(' M 30.96 25.16 V 4.56 h 0.56 c 0.41 0 0.75 -0.34 0.75 -0.75 V 0.75 c 0 -0.41 -0.34 -0.75 -0.75 -0.75 H 14.85 c -0.41 0 -0.75 0.34 -0.75 0.75 v 3.06 c 0 0.41 0.34 0.75 0.75 0.75 h 0.55 v 20.362 C 7.95 28.28 2.98 35.71 2.98 43.79 C 2.98 54.94 12.04 64 23.19 64 c 11.14 0 20.21 -9.06 20.306 -19.654 C 43.4 35.72 38.42 28.28 30.96 25.16 z M 23.251 61.308 c -7.25 -0.274 -10.054 -3.351 -10.533 -3.625 c -0.41 -0.547 -5.859 -2.974 -6.817 -14.328 c 0.525 -6.875 3.808 -13.44 12.083 -16.381 V 4.56 h 10.98 v 2.41 h 0.032 v 2.52 h 0.032 v 2.52 h -0.032 v 2.52 h 0.032 v 2.52 h -0.032 v 1.6 c 0 0.48 -0.069 2.51 -0.137 8.46 c 3.899 1.573 11.195 6.087 11.662 17.258 C 40.35 54.195 31.8 60.692 23.251 61.308 z')}
}

class _largeBeakerContent extends CustomShape {
    getShape(){return _path('M 5.947 44.072 a 10.8 10.8 0 1 1 34.5 -1 a 10.8 10.8 0 1 1 -34.4 1.7')}
}

export function initShape() {
    addShape('M', _M)
    addShape('y', _y)
    addShape('L', _L)
    addShape('a', _a)
    addShape('b', _b)
    addShape('z', _z)
    addShape('largeBeaker', _largeBeaker)
    addShape('largeBeakerContent', _largeBeakerContent)
}




export function intro(id:string) {
    const { approximate } = easing;
    const shiftCurve = approximate(easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0'));
    const scaleCurve = approximate(easing.path('M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100'));
    const charSize = 25;
    const space = 25;
    const element = document.getElementById(id);

    // CURVES
    const scaleC = approximate(increase(scaleCurve, 1));
    const scaledCurve = (amount: number) => {
        return increase(scale(scaleCurve, amount), 1);
    };
    const scaleCShort = approximate(scaledCurve(.75));

    const CHAR_OPTS:ShapeOptions = {
        parent: element as Element,
        isForce3d: true,
        fill: 'white',
        radius: charSize ,
        stroke: 'white',
        strokeWidth: 2,yoyo:true,
    }

    const mCharacter = new Shape({
        ...CHAR_OPTS,
        shape: 'M',
        x: -7,
        y: { [350]: 150, easing: shiftCurve },
        scaleY: { 1: 1, curve: scaleCShort },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve },
        delay: 232,
        duration: 680,
    }).then({
        delay: 115,
        y: { to: 0, easing: shiftCurve },
        x: { to: 0, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '0% 0%': '0% 0%', easing: shiftCurve }
    })

    const yCharacter = new Shape({
        ...CHAR_OPTS,
        shape: 'y',
        x: 200,
        y: { [-100]: 250, easing: shiftCurve },
        scaleY: { 1: 1, curve: scaleCShort },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve },
        delay: 232,
        duration: 680,
    }).then({
        delay: 115,
        y: { to: 0, easing: shiftCurve },
        x: { to: 0, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '0% 0%': '0% 0%', easing: shiftCurve }
    })

    const LCharacter = new Shape({
        ...CHAR_OPTS,
        shape: 'L',
        x: 400,
        y: { [-300]: 500, easing: shiftCurve },
        scaleY: { 1: 1, curve: scaleCShort },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve },
        delay: 232,
        duration: 680,
    }).then({
        delay: 115,
         y: { to: 0, easing: shiftCurve },
        x: { to: 0, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '0% 0%': '0% 0%', easing: shiftCurve }
    })
    const aCharacter = new Shape({
        ...CHAR_OPTS,
        shape: 'a',
        x: -300,
        y: { [350]: 50, easing: shiftCurve },
        scaleY: { 1: 1, curve: scaleCShort },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve },
        delay: 232,
        duration: 680,
    }).then({
        delay: 115,
         y: { to: 0, easing: shiftCurve },
        x: { to: 0, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '0% 0%': '0% 0%', easing: shiftCurve }
    })
    const bCharacter = new Shape({
        ...CHAR_OPTS,
        shape: 'b',
        x: -7,
        y: { [350]: 150, easing: shiftCurve },
        scaleY: { 1: 1, curve: scaleCShort },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve },
        delay: 232,
        duration: 680,
    }).then({
        delay: 115,
         y: { to: 0, easing: shiftCurve },
        x: { to: 0, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '0% 0%': '0% 0%', easing: shiftCurve }
    })
    const zCharacter = new Shape({
        ...CHAR_OPTS,
        shape: 'z',
        x: -7,
        y: { [350]: 150, easing: shiftCurve },
        scaleY: { 1: 1, curve: scaleCShort },
        origin: { '50% 100%': '50% 0%', easing: shiftCurve },
        delay: 232,
        duration: 680,
    }).then({
        delay: 115,
         y: { to: 0, easing: shiftCurve },
        x: { to: 0, easing: shiftCurve },
        scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
        origin: { '0% 0%': '0% 0%', easing: shiftCurve }
    })



    // LINES
    const LINE_OPTS = {
        shape: 'line',
        strokeWidth: { 10: 0 },
        stroke: COLORS.cyan,
        radius: 44,
        parent: element as Element,
        rotate: 90,
        duration: 465,
        delay: 495,
        radiusY: 0,
        strokeDasharray: '100% 100%',
        strokeDashoffset: { '100%': '-100%' }
    };

    const line1 = new Shape({
        ...LINE_OPTS,
        x: 189,
        y: { [-20]: 160 },
    });
    const line2 = new Shape({
        ...LINE_OPTS,
        x: -175,
        y: { 200: -20 },
        stroke: COLORS.hotpink,
        strokeDashoffset: { '-100%': '100%' },
        delay: 290
    });
    const line3 = new Shape({
        ...LINE_OPTS,
        radius: 53,
        y: 30,
        stroke: COLORS.yellow,
        strokeDashoffset: { '-100%': '100%' },
        delay: 804,
        rotate: 0
    });

    const StaggerShape = stagger(Shape);

    const underlines = new StaggerShape({
        ...LINE_OPTS,
        radius: 53,
        rotate: 0,
        radiusY: 0,
        y: 30,
        strokeWidth: 2,
        stroke: [COLORS.hotpink, COLORS.yellow, COLORS.cyan, COLORS.white],
        duration: 581,
        delay: 'stagger(1686, 145)',
        strokeDasharray: null,
        strokeDashoffset: null,
        scaleX: { 0: 1 },
        origin: '0 50%',
        quantifier: 'stroke',
        easing: 'expo.out',
        x: 1,
        isForce3d: true
    });

    // LOGO SHIFT
    let yShift = 0;
    const getYShift = () => {
        const w = window;
        const height = w.innerHeight
        yShift = height / 1.5;
    }
    getYShift();

    const logoShift = new mojs.Tween({
        duration: 349,
        delay: 2790,
        onUpdate(p) {
            const shiftP = mojs.easing.cubic.in(p);
            const scaleP = mojs.easing.quad.in(p);
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            h.setPrefixedStyle(element, 'transform',
                `translate(0px, ${yShift * shiftP}px)
            scaleY(${1 + 25 * scaleP})`
            );
        }
    })

    // beaker part
    const BEAKER_OPTS:ShapeOptions = {
        parent: element as Element,
        isForce3d: true,
        fill: 'white',
        radius: charSize ,
        stroke: 'white',
        strokeWidth: 2,
        width:'50px',height:'50px'
    }
    const largeBeaker = new Shape({
        ...BEAKER_OPTS,
        shape: 'largeBeaker',
        x: 300,
        y: 0,
        scaleY: { 1: 1, curve: approximate(scaledCurve(.05)) },
        delay: 232,
        duration: 680,
    }).then({
        delay: 115,
        scaleY: { 1: 1, curve: approximate(scaledCurve(.05)) },
    })
    const largeBeakerContent = new Shape({
       ...BEAKER_OPTS,
        shape: 'largeBeakerContent',
        x: 300,
        y: 0,
        scaleY: { 1: 1, curve: approximate(scaledCurve(.05)) },
        stroke:  COLORS.cyan,
        fill:  COLORS.cyan,
        delay: 232,
        duration: 680,
    }).then({
        delay: 115,
        stroke:  COLORS.white,
        fill:  COLORS.white,
        scaleY: { 1: 1, curve: approximate(scaledCurve(.05)) },
    })


    const timeline = new Timeline({
        onStart() {
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            h.setPrefixedStyle(element, 'transform', 'none');
        },
        onComplete() {
            const modules = underlines._modules; // previously named .childModules (in mojs v0.265.6)
            for (let i = 0; i < modules.length; i++) {
                modules[i]._hide();
            }
        }
    });
    timeline
        .add(
            mCharacter,
            yCharacter,
            LCharacter,
            aCharacter,
            bCharacter,
            zCharacter,
            largeBeaker,
            largeBeakerContent,
            underlines,
            line1,
            line2,
            line3,
        );

    timeline.play()



}