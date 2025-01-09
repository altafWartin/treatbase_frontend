import React from "react";

function Tutorial() {
  return (
    <div className="w-full flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-semibold text-gray-700">Tutorials</h1>

      {/* YouTube Video */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          Watch: Getting Started with Our App
        </h2>
        <div className="aspect-w-16 h-[30rem] aspect-h-9 relative w-full overflow-hidden rounded-md">
          <iframe
            className="w-full h-full border-none"
            src="https://www.youtube.com/embed/hgyK_ZAwjfA" // Updated YouTube video URL
            title="Tutorial Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
