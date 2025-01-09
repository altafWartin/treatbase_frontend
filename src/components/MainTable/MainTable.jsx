import React from 'react';
import Table from './Table';

const MainTable = () => {
    return (
        <div className="w-full h-[50rem]  px-3 mb-24 flex overflow-x-auto">
            <div className="w-[13%]  min-w-[120px]">
                <div className="flex text-sm flex-col mr-5 justify-center items-end mt-2 gap-[1.07rem]">
                    <div>Tooth No</div>
                    <div>Tooth Presence</div>
                    <div>Mobility</div>
                    <div>Furaction</div>
                    <div>Gingival Margin</div>
                    <div>Probing Depth</div>
                    <div>Bleeding on Probing</div>
                    <div>Plaque Index</div>
                    <div className='mt-16 mb-12 text-2xl'>Buccal</div>
                </div>
            </div>
            <div className="w-[82%] min-w-[600px]">
                <Table />
            </div>
            <div className="w-[5%] h-full flex flex-col justify-center items-center gap-32">
                <span className="rotate-90 text-[#333] [font-family:Montserrat] text-xl font-bold leading-[normal] tracking-[17.2px]">
                    UPPER
                </span>
                <span className="rotate-90 text-[#333] [font-family:Montserrat] text-xl font-bold leading-[normal] tracking-[17.2px]">
                    JAW
                </span>
            </div>
        </div>
    );
};

export default MainTable;
