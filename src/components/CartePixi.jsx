import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import worldMap from '../img/carte.png';

const CartePixi = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    
    // Initialize PixiJS application
    const initApp = async () => {
      try {
        // Create application - correct v8+ initialization
        const app = new PIXI.Application({
          width: 800,
          height: 600,
          background: 0xeeeeee,
          antialias: true,
          // Add this to ensure canvas is created
          canvas: document.createElement('canvas')
        });

        // IMPORTANT: In PixiJS v8, we need to wait for the app to initialize
        await app.init();

        // Add the canvas to DOM - this is the correct v8+ way
        containerRef.current.appendChild(app.canvas);

        // Load texture
        const texture = await PIXI.Assets.load(worldMap);
        const sprite = new PIXI.Sprite(texture);

        // Center sprite
        sprite.anchor.set(0.5);
        sprite.x = app.screen.width / 2;
        sprite.y = app.screen.height / 2;

        // Scale down if needed
        const scale = Math.min(
          app.screen.width / sprite.width,
          app.screen.height / sprite.height
        );
        sprite.scale.set(scale * 0.9);

        app.stage.addChild(sprite);

        // Handle cleanup
        return () => {
          app.destroy(true, {
            children: true,
            texture: true,
            baseTexture: true
          });
        };
      } catch (error) {
        console.error("PixiJS initialization failed:", error);
      }
    };

    initApp();
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        width: '800px',
        height: '600px',
        margin: '20px auto',
        border: '1px solid #ccc',
        backgroundColor: '#f0f0f0' // Added for better visibility
      }}
    />
  );
};

export default CartePixi;