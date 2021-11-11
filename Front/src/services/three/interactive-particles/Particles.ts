import {
    BufferAttribute,
    InstancedBufferAttribute,
    InstancedBufferGeometry,
    LinearFilter,
    Mesh,
    Object3D,
    RawShaderMaterial,
    RGBFormat,
    Texture,
    TextureLoader,
    Vector2
} from "three"
import ParticleFrag from './particle.frag'
import ParticleVert from './particle.vert'

import glslify from 'glslify';

export class Particles {

    public geo: InstancedBufferGeometry
    public material: RawShaderMaterial
    public uvs: BufferAttribute
    public positions: BufferAttribute
    public indices: Uint16Array
    public offsets: Float32Array
    public angles: Float32Array
    public numPoints!: number
    public width!: number
    public height!: number
    public loader: TextureLoader
    public texture!: Texture
    public container: Object3D
    public object3D: Mesh
    public uniforms: {
        uTime: { value: any },
        uRandom: { value: any },
        uDepth: { value: any },
        uSize: { value: any },
        uTextureSize: { value: any },
        uTexture: { value: any },
        uTouch: { value: any }
    } = {

            uTime: { value: 0 },
            uRandom: { value: 1.0 },
            uDepth: { value: 2.0 },
            uSize: { value: 0.0 },
            uTextureSize: { value: 0 },
            uTexture: { value: this.texture },
            uTouch: { value: null }
        };

    public dontDrawDarkerPoints = true

    constructor() {
        this.loader = new TextureLoader()
        this.container = new Object3D()
        this.loader.load("/three/science.jpg", (texture) => {
            this.texture = texture
            this.texture.minFilter = LinearFilter;
            this.texture.magFilter = LinearFilter;
            this.texture.format = RGBFormat;

            this.width = texture.image.width;
            this.height = texture.image.height;
            this.numPoints = this.width * this.height
            this.uniforms.uTextureSize.value = new Vector2(this.width, this.height)

        })

        this.geo = new InstancedBufferGeometry();

        // positions
        this.positions = new BufferAttribute(new Float32Array(4 * 3), 3);
        this.positions.setXYZ(0, -0.5, 0.5, 0.0);
        this.positions.setXYZ(1, 0.5, 0.5, 0.0);
        this.positions.setXYZ(2, -0.5, -0.5, 0.0);
        this.positions.setXYZ(3, 0.5, -0.5, 0.0);
        this.geo.setAttribute('position', this.positions);

        // uvs
        this.uvs = new BufferAttribute(new Float32Array(4 * 2), 2);
        this.uvs.setXYZ(0, 0.0, 0.0, 0.0);
        this.uvs.setXYZ(1, 1.0, 0.0, 0.0);
        this.uvs.setXYZ(2, 0.0, 1.0, 0.0);
        this.uvs.setXYZ(3, 1.0, 1.0, 0.0);
        this.geo.setAttribute('uv', this.uvs);

        // index
        this.geo.setIndex(new BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1))


        this.indices = new Uint16Array(this.numPoints);
        this.offsets = new Float32Array(this.numPoints * 3);
        this.angles = new Float32Array(this.numPoints);

        for (let i = 0; i < this.numPoints; i++) {
            this.offsets[i * 3 + 0] = i % this.width;
            this.offsets[i * 3 + 1] = Math.floor(i / this.width);
            this.indices[i] = i;
            this.angles[i] = Math.random() * Math.PI;
        }

        this.geo.setAttribute('pindex', new InstancedBufferAttribute(this.indices, 1, false));
        this.geo.setAttribute('offset', new InstancedBufferAttribute(this.offsets, 3, false));
        this.geo.setAttribute('angle', new InstancedBufferAttribute(this.angles, 1, false));
        console.log(ParticleVert)
        this.material = new RawShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: glslify(ParticleVert),
            fragmentShader: glslify(ParticleFrag),
            depthTest: false,
            transparent: true
        });
        this.object3D = new Mesh(this.geo, this.material);
        this.container.add(this.object3D);

    }

    public resize(vpW: number, vpH: number): void {
        console.log(vpW)
    }

}
