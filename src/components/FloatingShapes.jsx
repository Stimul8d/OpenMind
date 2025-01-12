import React from 'react';

const FloatingShapes = () => {
  // Layer configs - bigger = further back
  const layers = [
    { size: 'w-96 h-96', opacity: 'opacity-5', count: 3, speed: 30, scale: 1.2 },
    { size: 'w-64 h-64', opacity: 'opacity-10', count: 5, speed: 25, scale: 1 },
    { size: 'w-32 h-32', opacity: 'opacity-20', count: 7, speed: 20, scale: 0.8 },
    { size: 'w-16 h-16', opacity: 'opacity-30', count: 4, speed: 15, scale: 0.6 }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {layers.map((layer, layerIndex) => (
        Array(layer.count).fill().map((_, i) => (
          <div
            key={`${layerIndex}-${i}`}
            className={`absolute rounded-full blur-sm ${layer.size} ${layer.opacity} bg-white`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${layer.scale})`,
              animation: `float-${layerIndex}-${i} ${layer.speed + Math.random() * 10}s infinite ease-in-out`
            }}
          />
        ))
      ))}

      <style>
        {layers.map((layer, layerIndex) =>
          Array(layer.count).fill().map((_, i) => `
            @keyframes float-${layerIndex}-${i} {
              0%, 100% { transform: translate(0, 0) scale(${layer.scale}); }
              50% { transform: translate(
                ${(Math.random() * 200 - 100) * (1 + layerIndex * 0.5)}px,
                ${(Math.random() * 200 - 100) * (1 + layerIndex * 0.5)}px
              ) scale(${layer.scale}); }
            }
          `).join('\n')
        )}
      </style>
    </div>
  );
};

export default FloatingShapes;