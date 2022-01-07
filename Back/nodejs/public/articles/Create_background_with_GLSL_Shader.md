Hi to all!

Lately I had a little fun with 3D in javascript, and that's why I'm doing a first post. We will use [Threejs](https://threejs.org/) and [GLSL Shaders](https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)).

We will learn how we can make a background like this :

{% codepen https://codepen.io/NOPROD/pen/zYBbMPo %}

GLSL Shaders are designed for use with graphics and contain functionality for manipulating vectors and matrices.

The shader syntax that three.js uses is GLSL and this code is compiled and run on the GPU using WebGL, here we apply this to a Plane Geometry but you can also do it for any 3D elements having a ShaderMaterial.

---

Normally Shaders always begin with a version declaration, followed by a list of input and output variables, uniforms and its main function but with [Threejs](https://threejs.org/) we just need variales, uniforms and function.

```glsl
// Default Vertex for threejs
precision mediump float;

varying vec2 vUv;

  void main() {
     vUv = uv;
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
```


```glsl
// Default Fragment for threejs
out vec4 fragColor;

void main() {
    fragColor = vec4(1.0, 0.0, 0.0, 1.0);
            }
```

---

And yeah, as you can see we have two files, vertex shader and fragment shader.

* Vertex Shader : Here you can operate all change to deform an object in a shader, your code will be done on every [vertices](https://en.wikipedia.org/wiki/Vertex_(computer_graphics)).

* Fragment Shader : It will take the output from the vertex shader and associates colors, depth value, ...

---

So now we're done with the shader presentations, and I guess we don't need to introduce [Threejs](https://threejs.org/).

As always with threejs we need to initialize the scene.

```javascript
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private light!: THREE.SpotLight;
  private renderer!: THREE.WebGLRenderer;
  private clock!: THREE.Clock;

  public init(canvas: HTMLCanvasElement) {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xe3e3e3);

    // Light
    this.light = new THREE.SpotLight(0xffffff, 1);

    // Camera
    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 1;
    const far = 100;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

   // Renderer
   this.renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.clock = new THREE.Clock();
}
```
---
We have our scene, now we need our 3D elements, we will use [PlaneBufferGeometry](https://threejs.org/docs/#api/en/geometries/PlaneBufferGeometry) for a flat surface and [ShaderMaterial](https://threejs.org/docs/#api/en/materials/ShaderMaterial) to apply custom shaders.



```javascript
this.geometry = new THREE.PlaneBufferGeometry(30, 10);

this.material = new THREE.ShaderMaterial({
      vertexShader: "HERE-CUSTOM-VERTEX",
      fragmentShader: "HERE-CUSTOM-FRAGMENT",
      // Here you can pass args to your shaders (material or data).
      // Exemple "uResolution" in .ts >>>> input as "varying vec2 uResolution" in .glsl;
      // uResolution for responsive, uTime will be use by THREE.Clock
      uniforms: {
        uTime: { value: 0.0 },
        uResolution: { value: { x: window.innerWidth, y: window.innerHeight } },
        uColor: { value: new THREE.Color(0xffffff) }
      }
    });
this.mesh = new THREE.Mesh(this.geometry, this.material);

```

---

Add all to our scene and look at our plane object.

```javascript
    this.scene.add(this.camera);
    this.scene.add(this.mesh);
    this.scene.add(this.light);
    this.mesh.position.set(0, 0, 0);
    this.camera.position.set(0, 0, 10);
    this.light.position.set(0, 0, 10);

    this.light.lookAt(this.mesh.position);
    this.camera.lookAt(this.mesh.position);
```
---

Now we can finally animate our scene, we will be careful to make everything responsive

```javascript

 public run() {
    window.requestAnimationFrame(this.run.bind(this));
    // Update Shaders uTime value
    this.material.uniforms.uTime.value = this.clock.getElapsedTime();
    this.renderer.render(this.scene, this.camera);
   }

  private addEvents(): void {
    window.addEventListener("resize", this.onResize.bind(this), false);
  }

  private onResize() {
    // Update Shader uResolution value
    this.material.uniforms.uResolution = {
      value: { x: window.innerWidth, y: window.innerHeight }
    };
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}


const scene = new CustomScene();
scene.init(document.getElementById("canvas") as HTMLCanvasElement);
scene.run();

```

And Voila !

![](https://dev-to-uploads.s3.amazonaws.com/i/scx4tjf5ujodlkxzr8aa.gif)