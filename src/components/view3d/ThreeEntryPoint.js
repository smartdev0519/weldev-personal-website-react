// Import dependencies
import * as THREE from "three";

export default function ThreeEntryPoint(sceneRef) {
  const SEPARATION = 300,
    AMOUNTX = 300,
    AMOUNTY = 300;

  let camera, scene, renderer;

  let particles,
    count = 0;

  let mouseX = 0,
    mouseY = 0;

  let renderWidth = window.innerWidth;
  let renderHeight = window.innerHeight - window.innerHeight * 0.2;
  let windowHalfX = renderWidth / 2;
  let windowHalfY = renderHeight / 2;

  // Create Scene
  function init() {
    camera = new THREE.PerspectiveCamera(
      75,
      renderWidth / renderHeight,
      1,
      10000
    );
    console.log("camera", camera.position, camera.rotation);
    camera.position.set(0, 1500, 0);
    camera.rotation.set(0, 0.2, 0);
    scene = new THREE.Scene();

    //

    const numParticles = AMOUNTX * AMOUNTY;

    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0,
      j = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z

        scales[j] = 1;

        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x5e9e9f) },
      },
      vertexShader: document.getElementById("vertexshader").textContent,
      fragmentShader: document.getElementById("fragmentshader").textContent,
    });

    //

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(renderWidth, renderHeight);
    sceneRef.appendChild(renderer.domElement);

    sceneRef.style.touchAction = "none";
    sceneRef.addEventListener("pointermove", onPointerMove);

    window.addEventListener("resize", onWindowResize);
  }
  //

  function onWindowResize() {
    renderWidth = window.innerWidth;
    renderHeight = window.innerHeight - window.innerHeight * 0.2;
    windowHalfX = renderWidth;
    windowHalfY = renderHeight / 2;
    camera.aspect = renderWidth / renderHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(renderWidth, renderHeight);
  }

  function onPointerMove(event) {
    if (event.isPrimary === false) return;

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  function render() {
    const positions = particles.geometry.attributes.position.array;
    const scales = particles.geometry.attributes.scale.array;

    let i = 0,
      j = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] =
          Math.sin((ix + count) * 0.2) * 150 +
          Math.sin((iy + count) * 0.5) * 150;

        scales[j] =
          (Math.sin((ix + count) * 0.2) + 1) * 20 +
          (Math.sin((iy + count) * 0.5) + 1) * 20;

        i += 3;
        j++;
      }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;

    renderer.render(scene, camera);

    count += 0.1;
  }
  init();
  animate();
}
