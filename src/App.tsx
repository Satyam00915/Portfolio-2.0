import Particles from "./Components/UI/Particles";
import Hero from "./Pages/Hero";

function App() {
  return (
    <div className="h-screen w-screen bg-black relative">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export default App;
