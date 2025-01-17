import * as React from "react";

function IconCard({ backgroundColor, images }) {
  return (
    <div className={`flex overflow-hidden gap-10 justify-center items-center self-stretch px-2.5 py-5 my-auto bg-${backgroundColor} rounded-2xl min-h-[82px] shadow-[0px_2px_5px_rgba(0,0,0,0.25)] w-[472px] max-md:max-w-full`} role="group" aria-label={`Icon group with ${images.length} items`}>
      {images.map((src, index) => (
        <button key={index} className={`flex flex-col justify-center items-center self-stretch px-3.5 py-2.5 my-auto bg-sky-100 rounded-xl min-h-[41px] shadow-[1px_3px_5px_rgba(0,0,0,0.25)] w-[${index === 4 ? '31px' : '45px'}]`}>
          <img
            loading="lazy"
            src={src}
            alt={`Icon ${index + 1}`}
            className="object-contain  w-8  aspect-[1.41] "
          />
        </button>
      ))}
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col max-w-[1136px]" role="main">
      <form className="flex flex-col w-full text-xs font-semibold max-md:max-w-full" aria-labelledby="noteFormHeader">
        <h2 id="noteFormHeader" className="text-zinc-800 max-md:max-w-full">Add notes</h2>
        <div className="flex overflow-hidden flex-col px-4 py-2.5 mt-1.5 w-full rounded border border-solid border-stone-300 max-md:max-w-full">
          <textarea 
            type="text" 
            id="noteInput" 
            placeholder="Type here..." 
            aria-label="Type your note here" 
            className="self-start text-neutral-400 w-full p-2 h-20" 
          />
          <div className="flex gap-1.5 items-center self-end mt-2 text-white whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/82976a9f614b717822f169ee15e79856ed881a38af4dc00f4f3037fffb1541b6?apiKey=b84dd30bad284682bdd2468de5480c9b&"
              alt="Save icon"
              className="object-contain shrink-0 self-stretch my-auto w-5 rounded-xl aspect-square"
            />
            <button className="gap-2.5 self-stretch px-2.5 py-1 my-auto bg-sky-500 rounded min-h-[20px]">
              Save
            </button>
          </div>
        </div>
      </form>
      <div className="flex flex-wrap gap-10 justify-between items-center mt-9 w-full max-md:max-w-full" role="complementary" aria-labelledby="iconCardsGroupHeader">
        <h2 id="iconCardsGroupHeader" className="sr-only">Icon Cards Group</h2>
        <IconCard 
          backgroundColor="white" 
          images={[
            "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/32a16c4a1574b4ceb23d54fbe4c5f5026f62014efcd47395cf372a9309e5887c?apiKey=b84dd30bad284682bdd2468de5480c9b&", 
            "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/f2d0fe67f2515d0e1c38f6c6b4a927c8eeb32532b4164b2c60cc460fe9b18a4a?apiKey=b84dd30bad284682bdd2468de5480c9b&", 
            "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/1e6ce495fa47d12c6655ad759f93b23a372f5e5b211b1619fcc783a47e8f0290?apiKey=b84dd30bad284682bdd2468de5480c9b&", 
            "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/ee0a48f1794f4296e2b5b95c519a43dcc4e7613306e760895f76535e2a434f66?apiKey=b84dd30bad284682bdd2468de5480c9b&", 
            "https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/08f304dcf09e5a8250e42ae24e8f00a4f1bf71e64dc2a82ffdfa4919448d19cd?apiKey=b84dd30bad284682bdd2468de5480c9b&"
          ]}
        />
        <div className="flex overflow-hidden gap-8 justify-center items-center self-stretch px-2.5 py-5 my-auto bg-white rounded-2xl min-h-[82px] shadow-[0px_2px_5px_rgba(0,0,0,0.25)] w-[188px]" role="group" aria-label="Small icon group">
          <div className="flex flex-col justify-center items-center self-stretch px-2 py-1 my-auto bg-lime-50 rounded-xl min-h-[41px] shadow-[1px_3px_5px_rgba(0,0,0,0.25)] w-[45px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/c5eadd56db74209520c86aea30fa48611e8da62602556bc8dc5c8fa5aeede52d?apiKey=b84dd30bad284682bdd2468de5480c9b&"
              alt="Small icon 1"
              className="object-contain w-8 aspect-[0.97]"
            />
          </div>
          <div className="flex flex-col justify-center items-center self-stretch px-2 py-1 my-auto bg-lime-50 rounded-xl min-h-[41px] shadow-[1px_3px_5px_rgba(0,0,0,0.25)] w-[45px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b84dd30bad284682bdd2468de5480c9b/8331384392217572d8ad12ed74f4117449e3ecfbd4802d284182a0d27c88c371?apiKey=b84dd30bad284682bdd2468de5480c9b&"
              alt="Small icon 2"
              className="object-contain w-8 aspect-[0.97]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;