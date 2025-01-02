import React from "react";

const PeriodontalLegend = () => {
  return (
    <div className="flex flex-col overflow-hidden justify-start items-start w-full border border-solid border-stone-500 rounded-xl max-w-[1047px]" role="region" aria-label="Periodontal Legend">
      <div className="flex justify-start items-stretch flex-wrap gap-0 w-full max-md:max-w-full">
        {/* Tooth Presence */}
        <div className="flex flex-col grow shrink self-stretch w-36 text-xs font-medium">
          <div className="overflow-hidden px-2 py-2 w-full text-xs font-bold tracking-tighter text-white bg-sky-500 border border-solid border-stone-500">
            Tooth Presence
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-3 w-full whitespace-nowrap bg-white border border-solid border-neutral-400 max-md:px-5">
            <div className="flex gap-1 justify-center items-center">
              <div className="self-stretch my-auto font-bold text-sky-500">P</div>
              <div className="self-stretch my-auto text-zinc-800">-</div>
              <div className="self-stretch my-auto text-stone-500">present</div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-3 w-full whitespace-nowrap bg-white border border-solid border-neutral-400 max-md:px-5">
            <div className="flex gap-0.5 justify-center items-center">
              <div className="self-stretch my-auto font-bold text-sky-500">M</div>
              <div className="self-stretch my-auto text-zinc-800">-</div>
              <div className="self-stretch my-auto text-stone-500">missing</div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-3 w-full whitespace-nowrap bg-white border border-solid border-neutral-400 max-md:px-5">
            <div className="flex gap-1.5 justify-center items-center">
              <div className="self-stretch my-auto font-bold text-sky-500">I</div>
              <div className="self-stretch my-auto text-zinc-800">-</div>
              <div className="self-stretch my-auto text-stone-500">implant</div>
            </div>
          </div>
        </div>

        {/* Mobility */}
        <div className="flex flex-col grow shrink self-stretch min-w-[240px] w-[344px] h-auto">
          <div className="overflow-hidden px-2 py-2 mt-0 w-full text-xs font-bold tracking-tighter text-white whitespace-nowrap bg-sky-500 border border-solid border-stone-500">
            Mobility
          </div>
          <div className="flex overflow-hidden flex-col items-start pt-3 pr-9 h-36 pl-2.5 w-full text-xs font-medium bg-white border border-solid border-neutral-400 text-stone-500 max-md:pr-5">
            <div><span className="font-bold text-sky-500">0</span> : No mobility.</div>
            <div className="mt-2"><span className="font-bold text-sky-500">1</span> : Slight mobility (&lt; 1 mm horizontally).</div>
            <div className="mt-2"><span className="font-bold text-sky-500">2</span> : Moderate mobility (&gt; 1 mm horizontally but no vertical movement).</div>
            <div className="mt-2.5"><span className="font-bold text-sky-500">3</span> : Severe mobility (vertical movement present).</div>
          </div>
        </div>

        {/* Furcation */}
        <div className="flex flex-col grow shrink self-stretch min-w-[240px] w-[353px] h-auto">
          <div className="overflow-hidden px-2 py-2 w-full text-xs font-bold tracking-tighter text-white whitespace-nowrap bg-sky-500 border border-solid border-stone-500">
            Furcation
          </div>
          <div className="flex overflow-hidden flex-col items-start pr-9 h-36 pl-3 w-full text-xs font-medium bg-white border border-solid border-neutral-400 text-stone-500 max-md:pr-5">
            <div className="mt-2" ><span className="font-bold  text-sky-500">0</span> : No furcation involvement</div>
            <div className="mt-2"><span className="font-bold text-sky-500">1</span> : Furcation can be felt with a probe but not fully entered</div>
            <div className="mt-2"><span className="font-bold text-sky-500">2</span> : Probe can partially enter the furcation but not pass through</div>
            <div className="mt-2"><span className="font-bold text-sky-500">3</span> : Probe can pass entirely through the furcation</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-start items-start w-full max-md:max-w-full">
        {/* Gingival Margin */}
        <div className="flex flex-col grow shrink self-stretch min-w-[240px] w-[236px]">
          <div className="overflow-hidden px-2 py-2 w-full text-xs font-bold tracking-tighter text-center text-white bg-sky-500 border border-solid border-stone-500">
            Gingival Margin
          </div>
          <div className="flex overflow-hidden flex-col items-start px-6 py-4 w-full h-[8.3rem] text-xs font-medium bg-white rounded-none border border-solid border-neutral-400 text-stone-500 max-md:px-5">
            <div><span className="font-bold text-sky-500">0</span> : Normal position at the CEJ</div>
            <div className="mt-4"><span className="font-bold text-sky-500">0&lt;</span> : Gingival recession (e.g., +2 mm)</div>
            <div className="mt-4"><span className="font-bold text-sky-500">0&gt;</span> : Gingival overgrowth (e.g., -2 mm)</div>
          </div>
        </div>

        {/* Probing Depth */}
        <div className="flex flex-col grow shrink self-stretch text-xs font-medium w-[145px]">
          <div className="overflow-hidden px-2 py-2 w-full text-xs font-bold tracking-tighter text-center text-white bg-sky-500 border border-solid border-stone-500">
            Probing Depth
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center px-6 py-4 w-full bg-white border border-solid border-neutral-400 min-h-[42px] max-md:px-5">
            <div className="flex gap-1 px-px w-[83px]">
              <div className="grow font-bold text-sky-500">0 mm</div>
              <div className="text-zinc-800">-</div>
              <div className="text-stone-500">healthy</div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center px-6 py-4 w-full bg-white border border-solid border-neutral-400 min-h-[53px] max-md:px-5">
            <div className="flex gap-0.5 items-center w-[95px]">
              <div className="grow self-stretch my-auto font-bold text-sky-500">0 mm&lt;</div>
              <div className="self-stretch my-auto text-zinc-800">-</div>
              <div className="self-stretch text-xs text-stone-500">periodontal pockets</div>
            </div>
          </div>
        </div>

        {/* Bleeding on Probing */}
        <div className="flex flex-col grow shrink self-stretch w-36">
          <div className="overflow-hidden px-0.5 py-2 w-full text-xs font-bold tracking-tighter text-center text-white bg-sky-500 border border-solid border-stone-500 min-h-[32px]">
            Bleeding on Probing
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center px-6 py-4 w-full text-xs font-medium bg-white border border-solid border-neutral-400 min-h-[48px] max-md:px-5">
            <div className="flex gap-1.5 items-center w-[83px]">
              <div className="grow self-stretch my-auto font-bold text-sky-500">True</div>
              <div className="self-stretch my-auto text-zinc-800">-</div>
              <div className="self-stretch my-auto text-stone-500">on probing</div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center px-6 py-4 w-full text-xs font-medium bg-white border border-solid border-neutral-400 min-h-[36px] max-md:px-5">
            <div className="flex gap-1.5 items-center w-[100px]">
              <div className="grow self-stretch my-auto font-bold text-sky-500">False</div>
              <div className="self-stretch my-auto text-zinc-800">-</div>
              <div className="self-stretch my-auto text-stone-500">not on probing</div>
            </div>
          </div>
        </div>

        {/* Plaque Index */}
        <div className="flex flex-col grow shrink self-stretch min-w-[150px] w-36">
          <div className="overflow-hidden px-2 py-2 w-full text-xs font-bold tracking-tighter text-center text-white bg-sky-500 border border-solid border-stone-500">
            Plaque Index
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center px-6 py-4 w-full text-xs font-medium bg-white border border-solid border-neutral-400 min-h-[40px] max-md:px-5">
            <div className="flex gap-1.5 items-center w-[70px]">
              <div className="grow self-stretch my-auto font-bold text-sky-500">0</div>
              <div className="self-stretch my-auto text-zinc-800">-</div>
              <div className="self-stretch my-auto text-stone-500">no plaque</div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center px-6 py-4 w-full text-xs font-medium bg-white border border-solid border-neutral-400 min-h-[40px] max-md:px-5">
            <div className="flex gap-0.5 items-center w-[75px]">
              <div className="grow self-stretch my-auto font-bold text-sky-500">1</div>
              <div className="self-stretch my-auto text-zinc-800">-</div>
              <div className="self-stretch my-auto text-stone-500">light plaque</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodontalLegend;
