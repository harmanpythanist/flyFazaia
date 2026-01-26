'use client';

export default function ObjectDetectionUI() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-66">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-indigo-600">
            OBJECT DETECTION
          </h1>
          <p className="text-xs text-slate-500 tracking-widest mt-1">
            REAL-TIME VISION SYSTEM
          </p>
        </div>
        
        <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
          ▶ START DETECTION
        </button>
      </div>

      {/* Main Detection Box */}
      <div className="relative w-full max-w-6xl mx-auto aspect-video bg-white border-4 border-indigo-600 rounded-lg overflow-hidden shadow-2xl">
        {/* Corner brackets */}
        <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-purple-500"></div>
        <div className="absolute top-3 right-3 w-10 h-10 border-t-4 border-r-4 border-purple-500"></div>
        <div className="absolute bottom-3 left-3 w-10 h-10 border-b-4 border-l-4 border-purple-500"></div>
        <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-purple-500"></div>

        {/* Video feed placeholder */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="text-center text-slate-400">
            <div className="text-8xl mb-4 opacity-40">📹</div>
            <p className="text-sm tracking-widest font-semibold">CAMERA FEED STANDBY</p>
          </div>
        </div>

        {/* Grid overlay matching your custom grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 20px 20px, 20px 20px',
            backgroundPosition: '0 0, 0 0, 25px 25px, 25px 25px'
          }}
        />
      </div>
    </div>
  );
}