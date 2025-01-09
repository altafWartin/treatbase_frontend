import React from 'react';
import UpperBuccalTable from './UpperBuccal/UpperBuccalTable';
import UpperPalatalTable from './UpperPalatal/UpperPalatalTable';
import LowerLingualTable from './LowerLingual/LowerLingualTable';
import LowerBuccalTable from './LowerBuccal/LowerBuccalTable';

const MainTable = () => {
    return (
        <div className="w-full mt-[61px]   px-3 mb-24 flex overflow-x-auto">
            <div className="w-[13%]  min-w-[120px]">
                <div className="flex text-sm flex-col mr-5 justify-center items-end ">



                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Tooth No</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Tooth Presence</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Mobility</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Furaction</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Gingival Margin</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Probing Depth</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Bleeding on Probing</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Plaque Index</div>


                    <div className='mt-16 mb-12  text-[#1890FF] [font-family:Montserrat] text-2xl font-bold leading-[normal]'>BUCCAL</div>
                    <div className='mt-16 mb-12 text-[#1890FF] [font-family:Montserrat] text-2xl font-bold leading-[normal]'>PALATAL</div>


                    <div className="h-10 mt-[5.5rem]  flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Probing Depth</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Gingival Margin</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Plaque Index</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Bleeding on Probing</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Furaction</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Note</div>


                    <div className="h-10 mt-[2.7rem] flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Note</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Furaction</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Bleeding on Probing</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Plaque Index</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Gingival Margin</div>
                    <div className="h-10  flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Probing Depth</div>

                    <div className='mt-16 mb-12 text-[#1890FF] [font-family:Montserrat] text-2xl font-bold leading-[normal]'>LINGUAL</div>
                    <div className='mt-16 mb-12 text-[#1890FF] [font-family:Montserrat] text-2xl font-bold leading-[normal]'>BUCCAL</div>


                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Plaque Index</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Bleeding on Probing</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Probing Depth</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Gingival Margin</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Furaction</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Mobility</div>
                    <div className="h-10 flex items-center justify-center text-[#1890FF] [font-family:Montserrat] text-[14px] font-medium leading-[normal]">Tooth Presence</div>

                </div>
            </div>
            <div className="w-[82%] min-w-[600px]">
                <UpperBuccalTable />
                <UpperPalatalTable />
                {/* <LowerLingualTable /> */}
                {/* <LowerBuccalTable /> */}
            </div>
            <div className="w-[5%] pt-[27rem] h-full flex flex-col justify-center items-center gap-[45rem]">

                <div className='w-[5%] h-full flex flex-col justify-center items-center gap-32'>
                    <span className="rotate-90 text-[#333] [font-family:Montserrat] text-xl font-bold leading-[normal] tracking-[17.2px]">
                        UPPER
                    </span>
                    <span className="rotate-90 text-[#333] [font-family:Montserrat] text-xl font-bold leading-[normal] tracking-[17.2px]">
                        JAW
                    </span>
                </div>
                <div className='w-[5%] h-full flex flex-col justify-center items-center gap-32'>
                    <span className="rotate-90 text-[#333] [font-family:Montserrat] text-xl font-bold leading-[normal] tracking-[17.2px]">
                        LOWER
                    </span>
                    <span className="rotate-90 text-[#333] [font-family:Montserrat] text-xl font-bold leading-[normal] tracking-[17.2px]">
                        JAW
                    </span>
                </div>

            </div>
        </div>
    );
};

export default MainTable;
