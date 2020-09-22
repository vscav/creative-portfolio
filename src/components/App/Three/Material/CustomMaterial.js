import { ShaderMaterial, Color } from "three";
import { extend } from "react-three-fiber";

class CustomMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
      uniform float scale;
      uniform float shift;
      varying vec2 vUv;
      void main() {
        vec3 pos = position;
        pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }`,
      fragmentShader: `
      uniform sampler2D texture;
      uniform float hasTexture;
      uniform sampler2D displacement;
      uniform float dispFactor;
      uniform float effectFactor;
      uniform float shift;
      uniform float scale;
      uniform vec3 color;
      uniform float opacity;
      varying vec2 vUv;
      void main() {
        float angle = 0.0;
        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
        vec2 offset = 0.0 * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(texture, p + offset);
        vec4 cga = texture2D(texture, p);
        vec4 cb = texture2D(texture, p - offset);
        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
        else gl_FragColor = vec4(color, opacity);
        
        vec4 displace = texture2D(displacement, vUv.yx);
        vec2 displacedUV = vec2(vUv.x, vUv.y);
        displacedUV.y = mix(vUv.y, displace.r - 0.02, dispFactor);

        vec4 color = texture2D(texture, displacedUV);

        color.r = texture2D(texture, displacedUV + vec2(0., 0.005) * dispFactor).r;
        color.g = texture2D(texture, displacedUV + vec2(0.,0.01) * dispFactor).g;
        color.b = texture2D(texture, displacedUV + vec2(0.,0.02) * dispFactor).b;
        
        gl_FragColor = color;
      }`,
      uniforms: {
        texture: { value: null },
        hasTexture: { value: 0 },
        scale: { value: 0 },
        shift: { value: 0 },
        opacity: { value: 1 },
        color: { value: new Color("white") },
        displacement: { value: null },
        dispFactor: { value: 0 },
        effectFactor: { value: 1.2 },
      },
    });
  }

  set map(value) {
    this.uniforms.hasTexture.value = !!value;
    this.uniforms.texture.value = value;
  }

  get map() {
    return this.uniforms.texture.value;
  }

  set scale(value) {
    this.uniforms.scale.value = value;
  }

  get scale() {
    return this.uniforms.scale.value;
  }

  set shift(value) {
    this.uniforms.shift.value = value;
  }

  get shift() {
    return this.uniforms.shift.value;
  }

  get opacity() {
    return this.uniforms.opacity.value;
  }

  set opacity(value) {
    if (this.uniforms) this.uniforms.opacity.value = value;
  }

  get color() {
    return this.uniforms.color.value;
  }

  set dispFactor(value) {
    this.uniforms.dispFactor.value = value;
  }

  get dispFactor() {
    return this.uniforms.dispFactor.value;
  }
}

extend({ CustomMaterial });
