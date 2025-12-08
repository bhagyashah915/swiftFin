# Install Three.js Dependencies

Run the following command to install the required packages:

```bash
npm install three @react-three/fiber @react-three/drei
```

Or if you prefer yarn:

```bash
yarn add three @react-three/fiber @react-three/drei
```

Or if you prefer pnpm:

```bash
pnpm add three @react-three/fiber @react-three/drei
```

## What this adds:

- **three**: The core Three.js 3D library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Helpful utilities and abstractions for React Three Fiber

## After installation:

The TypeScript errors will disappear and your 3D hero section will be ready!

## Features included:

✅ Wallet 3D model on the left with teal particle blob
✅ Smartphone 3D model on the right with blue particle blob
✅ Animated particle line connecting both models
✅ Smooth floating animations for both models
✅ Interactive camera controls (drag to rotate)
✅ Dark gradient background
✅ Optional text overlay

You can customize:
- Particle colors in the `ParticleBlob` components
- Model positions, rotations, and scales
- Animation speeds in `useFrame` callbacks
- Lighting colors and intensities
- Camera position and field of view
