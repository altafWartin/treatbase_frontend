import React, { useState } from 'react';
import UpperBuccalTable from './UpperBuccal/UpperBuccalTable';
import UpperPalatalTable from './UpperPalatal/UpperPalatalTable';
import LowerLingualTable from './LowerLingual/LowerLingualTable';
import LowerBuccalTable from './LowerBuccal/LowerBuccalTable';
import NameSide from './NameSide';

import { ToggleButton } from 'primereact/togglebutton';
import MyComponent from './MyComponent';



const MainTable = () => {
    const [toothPresence, setToothPresence] = useState(Array(16).fill('P'));
    const [toothPresenceLower, setToothPresenceLower] = useState(Array(16).fill('P'));
    const [checked, setChecked] = useState(false);




    return (
        <div className="w-full mt-[61px] ">
            {/* Horizontal Scroll Container */}

            <div className="block sm:hidden card my-4 flex justify-center items-center border-0">
                <ToggleButton
                    onLabel="Full view"
                    offLabel="Mobile view"
                    checked={checked}
                    onChange={(e) => setChecked(e.value)}
                    className="w-[8rem] border-2 rounded-md"
                />
            </div>



            <div className="w-full overflow-x-auto">
                <div className="w-[86rem] flex">
                    {/* Header Section */}
                    <div className="w-[10rem]">
                        <NameSide />
                    </div>

                    {/* Content Section */}
                    <div className="w-[72rem]">
                        <div className="w-full">
                            <UpperBuccalTable
                                toothPresence={toothPresence}
                                setToothPresence={setToothPresence} // Pass the updater function
                            />
                            <UpperPalatalTable
                                toothPresence={toothPresence} // Pass the updated state
                            />
                            <LowerLingualTable toothPresenceLower={toothPresenceLower} />
                            <LowerBuccalTable
                                toothPresenceLower={toothPresenceLower}
                                setToothPresenceLower={setToothPresenceLower}
                            />
                        </div>
                    </div>

                    {/* Vertical Labels */}
                    <div className="w-[3rem]  pt-[27rem] flex flex-col justify-center items-center gap-[45rem]">
                        <span className="rotate-90 w-[20rem] text-[#333] font-montserrat text-xl font-bold leading-normal tracking-[17.2px]">
                            UPPER JAW
                        </span>
                        <span className="rotate-90 w-[20rem] text-[#333] font-montserrat text-xl font-bold leading-normal tracking-[17.2px]">
                            LOWER JAW
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[65rem] my-10 lg:ml-[10rem]">
                <MyComponent />
            </div>

        </div>


    );
};

export default MainTable;
