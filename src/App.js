import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

const Title = () => {
  const [active, setActive] = useState(false);
  const group = useRef();
  const mesh = useRef();

  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        position={[0, 20, 0]}
        onClick={(e) => setActive(!active)}
      >
        <Html distanceFactor={0} position={[-1.5, -5, 0]} transform>
          <div className="title">
            <span>Oryan Homes</span>
          </div>
        </Html>
      </mesh>
    </group>
  );
};

const Model1 = () => {
  const [active, setActive] = useState(false);
  const group = useRef();
  const mesh = useRef();

  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        position={[0, -10, 0]}
        onClick={(e) => setActive(!active)}
      >
        <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
        <meshPhongMaterial
          attach="material"
          color={active ? "yellow" : "orange"}
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Html distanceFactor={0} position={[0, 0, 0]} transform>
          <span>model 2</span>
        </Html>
      </mesh>
    </group>
  );
};

const Model2 = () => {
  const [active, setActive] = useState(false);
  const group = useRef();
  const mesh = useRef();

  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        position={[10, -10, 0]}
        onClick={(e) => setActive(!active)}
      >
        <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
        <meshPhongMaterial
          attach="material"
          color={active ? "yellow" : "orange"}
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Html distanceFactor={0} position={[0, 0, 0]} transform>
          <span>model 2</span>
        </Html>
      </mesh>
    </group>
  );
};

const Model3 = () => {
  const [active, setActive] = useState(false);
  const group = useRef();
  const mesh = useRef();

  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        position={[17, -7, -10]}
        onClick={(e) => setActive(!active)}
      >
        <boxBufferGeometry attach="geometry" args={[5, 10, 8]} />
        <meshPhongMaterial
          attach="material"
          color={active ? "yellow" : "orange"}
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Html distanceFactor={0} position={[0, 0, 0]} transform>
          <span>model 3</span>
        </Html>
      </mesh>
    </group>
  );
};

const Model4 = () => {
  const [active, setActive] = useState(false);
  const group = useRef();
  const mesh = useRef();

  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        position={[0, -7, -8]}
        onClick={(e) => setActive(!active)}
      >
        <boxBufferGeometry attach="geometry" args={[5, 10, 8]} />
        <meshPhongMaterial
          attach="material"
          color={active ? "yellow" : "orange"}
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Html distanceFactor={0} position={[0, 0, 0]} transform>
          <span>model 4</span>
        </Html>
      </mesh>
    </group>
  );
};

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 25, position: [-30, 15, 100] }}>
      <color attach="background" args={["#f0f0f0"]} />
      <fog attach="fog" args={["#101010", 10, 300]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <Title />
      <Model4 />
      <Model1 />
      <Model2 />
      <Model3 />
      <OrbitControls />
    </Canvas>
  );
}
