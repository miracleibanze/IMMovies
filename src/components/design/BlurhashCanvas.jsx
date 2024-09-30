import React, { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";

const BlurhashImage = ({ hash, imageUrl, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Blurhash canvas as a placeholder */}
      {!imageLoaded && (
        <BlurhashCanvas
          hash={hash} // Your Blurhash string
          width={width}
          height={height}
          punch={1} // Optional: punch controls the contrast of the placeholder
        />
      )}

      {/* Actual image that replaces the Blurhash canvas once it's loaded */}
      <img
        src={imageUrl}
        alt="Loaded"
        style={{
          display: imageLoaded ? "block" : "none",
          width: `${width}px`,
          height: `${height}px`,
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default BlurhashImage;

const App = () => {
  const imageSrc = "https://example.com/your-background-image.jpg";
  const blurhash = "LEHV6nWB2yk8pyo0adR*.7kCM8oL"; // Replace with your Blurhash

  return (
    <div>
      <BackgroundImage imageSrc={imageSrc} blurhash={blurhash} />
    </div>
  );
};

export default App;
