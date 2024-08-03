"use client";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";

export default function HomePage() {
  return (
    <div className="flex absolute h-screen items-center justify-center top-[50px] right-0">
      <Canvas camera={{ position: [0, 2, 5], fov: 70 }}>
        <ambientLight intensity={2} />
        <Avatar />
      </Canvas>
    </div>
  );
}
