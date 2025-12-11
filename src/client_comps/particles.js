import React from 'react';

const Particles = () => {
    return (
        <div>
            {/* Performant Visual Elements - Only 4 animated + CSS patterns */}

{/* CSS Background Pattern - Most Efficient */}
<div className="absolute inset-0 opacity-20">
  <div className="absolute inset-0" style={{
    backgroundImage: `
      radial-gradient(circle at 20% 30%, #4f46e5 1px, transparent 1px),
      radial-gradient(circle at 80% 70%, #06b6d4 1px, transparent 1px),
      radial-gradient(circle at 40% 80%, #8b5cf6 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px, 80px 80px, 100px 100px'
  }} />
</div>

{/* Static Decorative Elements - No Performance Cost */}
<div className="absolute top-16 right-16 w-8 h-1 bg-gradient-to-r from-indigo-400 to-transparent" />
<div className="absolute top-32 left-20 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
<div className="absolute bottom-32 right-32 w-6 h-6 border border-purple-300 rotate-45" />
<div className="absolute bottom-16 left-16 w-4 h-4 bg-indigo-300 rotate-12" />
<div className="absolute top-1/2 right-10 w-2 h-12 bg-gradient-to-b from-cyan-300 to-transparent" />
<div className="absolute top-1/3 left-10 w-12 h-2 bg-gradient-to-r from-purple-300 to-transparent" />

{/* Only 4 Animated Elements - Minimal Impact */}
<div className="absolute top-20 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}} />
<div className="absolute top-40 right-1/4 w-4 h-4 border border-cyan-400 animate-spin" style={{animationDelay: '1s', animationDuration: '8s'}} />
<div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}} />
<div className="absolute bottom-20 right-1/3 w-5 h-5 border-l-2 border-t-2 border-indigo-400 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}} />
        </div>
    );
}

export default Particles;
