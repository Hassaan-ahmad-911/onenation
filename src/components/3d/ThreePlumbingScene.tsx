import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Droplet } from 'lucide-react';

interface ThreePlumbingSceneProps {
  className?: string;
  variant?: 'hero-water' | 'interactive-valve' | 'compact-float';
}

export const ThreePlumbingScene: React.FC<ThreePlumbingSceneProps> = ({
  className = '',
  variant = 'hero-water',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [particleCount, setParticleCount] = useState(80);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials
    // Metallic chrome / brass pipe material
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xd0e8f9,
      metalness: 0.9,
      roughness: 0.15,
    });

    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.25,
    });

    const waterMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.85,
      opacity: 0.9,
      transparent: true,
      roughness: 0.05,
      ior: 1.333,
      thickness: 1.2,
      reflectivity: 0.9,
    });

    // 1. Plumbing Pipe Cross-Junction & Valve
    // Horizontal pipe
    const pipeHorizGeom = new THREE.CylinderGeometry(0.35, 0.35, 3.8, 32);
    const pipeHoriz = new THREE.Mesh(pipeHorizGeom, chromeMaterial);
    pipeHoriz.rotation.z = Math.PI / 2;
    mainGroup.add(pipeHoriz);

    // Pipe flanges / rings
    const ringGeom = new THREE.TorusGeometry(0.42, 0.08, 16, 32);
    const ring1 = new THREE.Mesh(ringGeom, brassMaterial);
    ring1.rotation.y = Math.PI / 2;
    ring1.position.x = -1.4;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeom, brassMaterial);
    ring2.rotation.y = Math.PI / 2;
    ring2.position.x = 1.4;
    mainGroup.add(ring2);

    // Vertical pipe connector
    const pipeVertGeom = new THREE.CylinderGeometry(0.35, 0.35, 1.8, 32);
    const pipeVert = new THREE.Mesh(pipeVertGeom, chromeMaterial);
    pipeVert.position.y = 0.9;
    mainGroup.add(pipeVert);

    // Valve stem & wheel
    const valveStemGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.8, 16);
    const valveStem = new THREE.Mesh(valveStemGeom, brassMaterial);
    valveStem.position.y = 1.9;
    mainGroup.add(valveStem);

    // Red / Blue Industrial Valve Handwheel
    const valveWheelGeom = new THREE.TorusGeometry(0.7, 0.1, 16, 32);
    const valveWheelMat = new THREE.MeshStandardMaterial({
      color: 0xef4444, // Emergency Red Valve Wheel
      roughness: 0.3,
      metalness: 0.4,
    });
    const valveWheel = new THREE.Mesh(valveWheelGeom, valveWheelMat);
    valveWheel.rotation.x = Math.PI / 2;
    valveWheel.position.y = 2.3;
    mainGroup.add(valveWheel);

    // Valve Spokes
    for (let i = 0; i < 4; i++) {
      const spokeGeom = new THREE.CylinderGeometry(0.05, 0.05, 1.3, 8);
      const spoke = new THREE.Mesh(spokeGeom, brassMaterial);
      spoke.rotation.x = Math.PI / 2;
      spoke.rotation.z = (i * Math.PI) / 4;
      spoke.position.y = 2.3;
      mainGroup.add(spoke);
    }

    // 2. Translucent Floating Water Droplets
    const dropletsGroup = new THREE.Group();
    mainGroup.add(dropletsGroup);

    const dropletMeshes: { mesh: THREE.Mesh; speed: number; offset: number }[] = [];
    const dropletGeom = new THREE.SphereGeometry(0.18, 24, 24);

    for (let i = 0; i < 7; i++) {
      const drop = new THREE.Mesh(dropletGeom, waterMaterial);
      const angle = (i / 7) * Math.PI * 2;
      const radius = 2.0 + Math.sin(i) * 0.4;
      drop.position.set(
        Math.cos(angle) * radius,
        -1.2 + Math.sin(i * 2) * 0.5,
        Math.sin(angle) * 0.8
      );
      drop.scale.set(1, 1.4, 1); // Water drop elongation
      dropletsGroup.add(drop);
      dropletMeshes.push({
        mesh: drop,
        speed: 1.5 + Math.random() * 1.5,
        offset: i,
      });
    }

    // 3. Flowing Water Stream Particle Effect
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.3; // x
      positions[i * 3 + 1] = -0.3 - Math.random() * 2.5; // y falling
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3; // z
      velocities.push(0.04 + Math.random() * 0.05);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.07,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 2.0);
    rimLight.position.set(-5, 3, -4);
    scene.add(rimLight);

    const warmLight = new THREE.PointLight(0xf59e0b, 1.0, 10);
    warmLight.position.set(0, 2, 2);
    scene.add(warmLight);

    // Mouse Interaction
    let targetRotationX = 0.15;
    let targetRotationY = -0.4;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = normX;
      mouseY = normY;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetRotationY = mouseX * 0.6 + (isRotating ? elapsedTime * 0.25 : 0);
      targetRotationX = mouseY * 0.4 + 0.15;

      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Valve wheel idle slow rotation
      valveWheel.rotation.z = Math.sin(elapsedTime * 1.2) * 0.2;

      // Floating water droplets
      dropletMeshes.forEach((d) => {
        d.mesh.position.y += Math.sin(elapsedTime * d.speed + d.offset) * 0.005;
        d.mesh.rotation.y += 0.01;
      });

      // Flowing water particles
      const pos = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] -= velocities[i];
        if (pos[i * 3 + 1] < -3.0) {
          pos[i * 3 + 1] = 0;
          pos[i * 3] = (Math.random() - 0.5) * 0.25;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isRotating, particleCount]);

  return (
    <div className={`relative group ${className}`}>
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full min-h-[320px] cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Control Pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/30 text-xs text-cyan-200 shadow-lg pointer-events-auto">
        <span className="flex items-center gap-1">
          <Droplet className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          Interactive 3D Valve
        </span>
        <span className="text-slate-600">|</span>
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="flex items-center gap-1 hover:text-white transition-colors"
          title="Toggle Auto Rotation"
        >
          <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
          {isRotating ? 'Auto' : 'Hold'}
        </button>
      </div>

      {/* Glow aura */}
      <div className="absolute inset-0 -z-10 bg-radial from-cyan-500/20 via-blue-600/5 to-transparent blur-2xl pointer-events-none" />
    </div>
  );
};
