import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lumières
const light = new THREE.DirectionalLight(0xaaaaaa, 1);
light.position.set(5, 10, 7.5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Caméra
camera.position.z = 5;

// Charger le modèle
const loader = new GLTFLoader();
loader.load('public/models/chiku_tattoo.glb', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    gltf.scene.position.set(0, 0, 0);
    console.log("Model loaded successfully", gltf.scene);
}, undefined, (error) => {
    console.error('Error loading model:', error);
});

/* Cube de test
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);



// Animation
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);*/
