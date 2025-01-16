import React from 'react';

const ToothGrid = ({ toothPresence, index, buccalImages, buccalImplantImages }) => {
  return (
    <div
      className="relative flex flex-col my-5 justify-center items-center py-1"
      style={{ height: '90px' }}
    >
      {/* Render Static Grid Lines */}
      {Array.from({ length: 17 }).map((_, idx) => (
        <hr
          key={idx}
          className="absolute w-full border-t-2 border-[#666] z-10"
          style={{ top: `${(idx / 16) * 100}%` }}
        />
      ))}

      {/* Conditional Image Rendering */}
      {toothPresence[index] === 'P' ? (
        <div className="relative flex gap-2 mt-7 justify-center items-center py-1">
          {/* Show Buccal Image for 'Present' */}
          <img
            src={buccalImages[index]}
            alt={`Buccal ${index + 1}`}
            className="relative w-12 top-6 h-[6rem] z-0"
          />
        </div>
      ) : toothPresence[index] === 'I' ? (
        <div className="relative flex gap-2 justify-center items-center py-1">
          {/* Show Implant Image for 'Implant' */}
          <img
            src={buccalImplantImages[index].src}
            alt={`Implant ${index + 1}`}
            className={`relative w-12 h-[6rem] z-0 ${buccalImplantImages[index].className}`}
          />
        </div>
      ) : (
        <div className="relative flex gap-2 justify-center items-center py-1">
          {/* Hide Both Images for 'Missing' */}
        </div>
      )}
    </div>
  );
};

export default ToothGrid;
