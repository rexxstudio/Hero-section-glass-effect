import { Shader, Swirl, ChromaFlow, FlutedGlass } from 'shaders/react';

// Hero section with shader background only - Full screen 1080x1920
export default function App() {
  return (
    <section className="relative w-full h-screen bg-[#EFEFEF] overflow-hidden">
      {/* Shader background - full screen coverage */}
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-full">
        <Shader className="w-full h-full">
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
        </Shader>
      </div>
    </section>
  );
}
