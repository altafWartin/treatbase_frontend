import * as React from "react";

export function Header() {
  return (
    <div className="flex absolute z-[9999] w-full flex-wrap gap-10 px-10 py-2 text-3xl font-semibold whitespace-nowrap bg-white shadow-lg text-zinc-800 max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/df46ee93abeac28a640e4a7791c2c31d301e4b3fddc32d251d9356b92374fdb0?apiKey=b84dd30bad284682bdd2468de5480c9b&"
        alt="Company Logo"
        className="object-contain shrink-0 aspect-square w-[58px]"
        aria-label="Company Logo"
      />
      <div
        className="flex justify-center items-center flex-grow my-auto max-md:max-w-full text-center"
        role="heading"
        aria-level="1"
      >
        Header
      </div>
    </div>
  );
}
