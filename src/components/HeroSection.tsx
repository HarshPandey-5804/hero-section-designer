
import { ArrowRight } from "lucide-react";

const portraits = [
  { color: "bg-accent-teal", type: "shape" },
  { color: "bg-accent-orange", type: "image", src: "/lovable-uploads/09f1a4e2-7757-4d28-a06d-a287595f6640.png" },
  { color: "bg-accent-green", type: "shape" },
  { color: "bg-accent-purple", type: "shape" },
  { color: "bg-accent-yellow", type: "shape" },
  { color: "bg-accent-pink", type: "shape" },
  { color: "bg-accent-orange", type: "shape" },
  { color: "bg-accent-green", type: "shape" },
  { color: "bg-accent-teal", type: "shape" },
];

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-navy px-4 py-12 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 animate-fade-up [animation-delay:200ms]">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-accent-green">Grow</span>
            <br />
            <span className="text-accent-teal">Professionally</span>
            <br />
            <span className="text-white">with the Best</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            In a world filled with opportunities, having a mentor can make all the
            difference. Explore why people turn to this invaluable resource to
            unlock their potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              type="email"
              placeholder="example@domain.com"
              className="flex-1 px-6 py-3 rounded-lg bg-navy-light text-white border border-gray-700 focus:outline-none focus:border-accent-teal transition-colors"
            />
            <button
              className="px-8 py-3 rounded-lg bg-accent-green text-white font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all group"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column - Portrait Grid */}
        <div className="grid grid-cols-3 gap-4 animate-fade-up [animation-delay:400ms]">
          {portraits.map((portrait, index) => (
            <div
              key={index}
              className={`aspect-square rounded-2xl overflow-hidden ${portrait.color} transition-transform hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {portrait.type === "image" && portrait.src && (
                <img
                  src={portrait.src}
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
