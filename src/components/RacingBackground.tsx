import NeonGrid from "./NeonGrid";
import Scanlines from "./Scanlines";
import ParticleField from "./ParticleField";

const RacingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Neon Grid */}
      <NeonGrid />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Scanlines */}
      <Scanlines />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/60" />
    </div>
  );
};

export default RacingBackground;
