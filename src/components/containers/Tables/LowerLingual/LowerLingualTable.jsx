import React, { useState } from 'react';
import FullCircle from '../../../../assets/FullCircle.svg';
import HalfCircle from '../../../../assets/HalfCircle.svg';
import EmptyCircle from '../../../../assets/EmptyCircle.svg';
import Buccal1 from '../../../../assets/UpparBuccal/Buccal1.svg'
import Buccal2 from '../../../../assets/UpparBuccal/Buccal2.svg'
import Buccal3 from '../../../../assets/UpparBuccal/Buccal3.svg'
import Buccal4 from '../../../../assets/UpparBuccal/Buccal4.svg'
import Buccal5 from '../../../../assets/UpparBuccal/Buccal5.svg'
import Buccal6 from '../../../../assets/UpparBuccal/Buccal6.svg'
import Buccal7 from '../../../../assets/UpparBuccal/Buccal7.svg'
import Buccal8 from '../../../../assets/UpparBuccal/Buccal8.svg'
import Buccal9 from '../../../../assets/UpparBuccal/Buccal9.svg'
import Buccal10 from '../../../../assets/UpparBuccal/Buccal10.svg'
import Buccal11 from '../../../../assets/UpparBuccal/Buccal11.svg'
import Buccal12 from '../../../../assets/UpparBuccal/Buccal12.svg'
import Buccal13 from '../../../../assets/UpparBuccal/Buccal13.svg'
import Buccal14 from '../../../../assets/UpparBuccal/Buccal14.svg'
import Buccal15 from '../../../../assets/UpparBuccal/Buccal15.svg'
import Buccal16 from '../../../../assets/UpparBuccal/Buccal16.svg'
import I1 from "../../../../assets/UpparBuccal/I1.svg";
import I2 from "../../../../assets/UpparBuccal/I2.svg";
import I3 from "../../../../assets/UpparBuccal/I3.svg";
import I4 from "../../../../assets/UpparBuccal/I4.svg";
import I5 from "../../../../assets/UpparBuccal/I5.svg";
import I6 from "../../../../assets/UpparBuccal/I6.svg";
import I7 from "../../../../assets/UpparBuccal/I7.svg";
import I8 from "../../../../assets/UpparBuccal/I8.svg";
import I9 from "../../../../assets/UpparBuccal/I9.svg";
import I10 from "../../../../assets/UpparBuccal/I10.svg";
import I11 from "../../../../assets/UpparBuccal/I11.svg";
import I12 from "../../../../assets/UpparBuccal/I12.svg";
import I13 from "../../../../assets/UpparBuccal/I13.svg";
import I14 from "../../../../assets/UpparBuccal/I14.svg";
import I15 from "../../../../assets/UpparBuccal/I15.svg";
import I16 from "../../../../assets/UpparBuccal/I16.svg";

import I1png from "../../../../assets/UpparBuccal/I1png.png";

import UP1 from "../../../../assets/UpparPalatalImages/UP1.svg";



import LL1 from "../../../../assets/LowerLingual/LL1.svg";
import LL2 from "../../../../assets/LowerLingual/LL2.svg";
import LL3 from "../../../../assets/LowerLingual/LL3.svg";
import LL4 from "../../../../assets/LowerLingual/LL4.svg";
import LL5 from "../../../../assets/LowerLingual/LL5.svg";
import LL6 from "../../../../assets/LowerLingual/LL6.svg";
import LL7 from "../../../../assets/LowerLingual/LL7.svg";
import LL8 from "../../../../assets/LowerLingual/LL8.svg";
import LL9 from "../../../../assets/LowerLingual/LL9.svg";
import LL10 from "../../../../assets/LowerLingual/LL10.svg";
import LL11 from "../../../../assets/LowerLingual/LL11.svg";
import LL12 from "../../../../assets/LowerLingual/LL12.svg";
import LL13 from "../../../../assets/LowerLingual/LL13.svg";
import LL14 from "../../../../assets/LowerLingual/LL14.svg";
import LL15 from "../../../../assets/LowerLingual/LL15.svg";
import LL16 from "../../../../assets/LowerLingual/LL16.svg";

import LLI1 from "../../../../assets/LowerLingual/LLI1.svg";
import LLI2 from "../../../../assets/LowerLingual/LLI2.svg";
import LLI3 from "../../../../assets/LowerLingual/LLI3.svg";
import LLI4 from "../../../../assets/LowerLingual/LLI4.svg";
import LLI5 from "../../../../assets/LowerLingual/LLI5.svg";
import LLI6 from "../../../../assets/LowerLingual/LLI6.svg";
import LLI7 from "../../../../assets/LowerLingual/LLI7.svg";
import LLI8 from "../../../../assets/LowerLingual/LLI8.svg";
import LLI9 from "../../../../assets/LowerLingual/LLI9.svg";
import LLI10 from "../../../../assets/LowerLingual/LLI10.svg";
import LLI11 from "../../../../assets/LowerLingual/LLI11.svg";
import LLI12 from "../../../../assets/LowerLingual/LLI12.svg";
import LLI13 from "../../../../assets/LowerLingual/LLI13.svg";
import LLI14 from "../../../../assets/LowerLingual/LLI14.svg";
import LLI15 from "../../../../assets/LowerLingual/LLI15.svg";
import LLI16 from "../../../../assets/LowerLingual/LLI16.svg"



const LowerLingualTable = () => {
    const [toothPresence, setToothPresence] = useState(Array(16).fill('P'));
    const [furcationStatus, setFurcationStatus] = useState(Array(16).fill({ left: '', right: '' }));
    const [bleedingStatus, setBleedingStatus] = useState(
        Array(16).fill({
            left: 'No',
            center: 'No',
            right: 'No',
        })
    );
    const [plaqueStatus, setPlaqueStatus] = useState(
        Array(16).fill({
            left: 'No',
            center: 'No',
            right: 'No',
        })
    );
    const [gingivalMargin, setGingivalMargin] = useState(Array(16).fill([0, 0, 0])); // 3 values per tooth
    const [probingDepth, setProbingDepth] = useState(Array(16).fill([0, 0, 0])); // 3 values per tooth


    console.log(gingivalMargin);


    // Update Gingival Margin
    const updateGingivalMargin = (toothIndex, pos, value) => {
        setGingivalMargin((prev) => {
            const updated = [...prev];
            updated[toothIndex] = [...updated[toothIndex]];
            updated[toothIndex][pos] = parseFloat(value) || 0;
            return updated;
        });
    };

    // Update Probing Depth
    const updateProbingDepth = (toothIndex, pos, value) => {
        setProbingDepth((prev) => {
            const updated = [...prev];
            updated[toothIndex] = [...updated[toothIndex]];
            updated[toothIndex][pos] = parseFloat(value) || 0;
            return updated;
        });
    };


    const [directionStatus, setDirectionStatus] = useState(Array(16).fill(''));

    const lowerLingual = [LL1, LL2, LL3, LL4, LL5, LL6, LL7, LL8, LL9, LL10, LL11, LL12, LL13, LL14, LL15, LL16];


    const lowerLingualImplant = [LLI1, LLI2, LLI3, LLI4, LLI5, LLI6, LLI7, LLI8, LLI9, LLI10, LLI11, LLI12, LLI13, LLI14, LLI15, LLI16];

    const toggleBleedingStatus = (toothIndex, position) => {
        setBleedingStatus((prev) => {
            const updated = [...prev];
            updated[toothIndex] = {
                ...updated[toothIndex],
                [position]: updated[toothIndex][position] === 'No' ? 'Yes' : 'No',
            };
            return updated;
        });
    };


    const toggleFurcationStatus = (index, position) => {
        setFurcationStatus((prev) => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                [position]:
                    updated[index][position] === ''
                        ? 'Empty'
                        : updated[index][position] === 'Empty'
                            ? 'Half'
                            : updated[index][position] === 'Half'
                                ? 'Full'
                                : ''
            };
            return updated;
        });
    };

    const togglePlaqueStatus = (toothIndex, position) => {
        setPlaqueStatus((prev) => {
            const updated = [...prev];
            updated[toothIndex] = {
                ...updated[toothIndex],
                [position]: updated[toothIndex][position] === 'No' ? 'Yes' : 'No',
            };
            return updated;
        });
    };




    return (
        <div className="w-full  border  bg-[#F2F9FF] flex items-center justify-center">
            <div className="flex w-full h-full">
                {Array.from({ length: 16 }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-full border  h-full ${index === 7 ? 'mr-[25px]' : ''}`}
                    >
                        <div className="flex h-10 border-b-2 justify-center items-center">{index + 17}</div>

                        <div className="flex h-10 justify-center items-center py-1">
                            <input type="text" className='w-16 rounded-md' />
                        </div>


                        <div className="flex h-10 justify-center items-center py-1 gap-2">
                            {(index < 3 || index >= 13) && ['left', 'right'].map((position) => (
                                <button
                                    key={position}
                                    onClick={() => toggleFurcationStatus(index, position)}
                                    className="flex w-6 h-6 justify-center items-center bg-[#E6EDFD]   rounded-lg"
                                >
                                    {furcationStatus[index]?.[position] === 'Full' && <img src={FullCircle} className='' alt="Full Circle" />}
                                    {furcationStatus[index]?.[position] === 'Half' && <img src={HalfCircle} className='' alt="Half Circle" />}
                                    {furcationStatus[index]?.[position] === 'Empty' && <img src={EmptyCircle} className='' alt="Empty Circle" />}
                                </button>
                            ))}
                        </div>

                        <div className="flex h-10 gap-1 justify-center items-center py-1">
                            {['left', 'center', 'right'].map((position) => (
                                <button
                                    key={position}
                                    onClick={() => toggleBleedingStatus(index, position)}
                                    className={`w-[1rem] h-3 p-1.5 rounded-sm  ${bleedingStatus[index][position] === 'Yes' ? 'bg-red-500' : 'bg-[#E6EDFD]'}`}
                                />
                            ))}
                        </div>






                        <div className="flex h-10 gap-1 justify-center items-center py-1 px-1">
                            {['left', 'center', 'right'].map((position) => (
                                <button
                                    key={position}
                                    onClick={() => togglePlaqueStatus(index, position)}
                                    className={`w-[1rem] h-3 p-1.5 rounded-sm ${plaqueStatus[index][position] === 'Yes' ? 'bg-sky-500' : 'bg-[#E6EDFD]'}`}
                                />
                            ))}
                        </div>


                        {/* Gingival Margin */}
                        <div className="flex h-10 justify-center items-center py-1 gap-1">
                            {gingivalMargin[index].map((value, pos) => (
                                <input
                                    key={pos}
                                    className="w-4 bg-transparent border-2 rounded-md"
                                    type="text"
                                    value={value}
                                    onChange={(e) => updateGingivalMargin(index, pos, e.target.value)}
                                />
                            ))}
                        </div>


                        {/* Probing Depth */}
                        <div className="flex h-10 justify-center items-center py-1 gap-1">
                            {probingDepth[index].map((value, pos) => (
                                <input
                                    key={pos}
                                    className="w-4 bg-transparent border-2 rounded-md"
                                    type="text"
                                    value={value}
                                    onChange={(e) => updateProbingDepth(index, pos, e.target.value)}
                                />
                            ))}
                        </div>




                        <div className="relative flex flex-col my-5 justify-center items-center py-1 " style={{ height: '90px' }}>


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
                                        src={lowerLingual[index]}
                                        alt={`Buccal ${index + 1}`}
                                        className="relative w-12 top-6 h-[6rem] z-0"
                                    />
                                </div>
                            ) : toothPresence[index] === 'I' ? (
                                <div className="relative flex gap-2 justify-center items-center py-1">
                                    {/* Show Implant Image for 'Implant' */}
                                    <img
                                        src={lowerLingualImplant[index]}
                                        alt={`Implant ${index + 1}`}
                                        className="relative w-12 top-6 h-[5rem] z-0"
                                    />
                                </div>
                            ) : (
                                <div className="relative flex gap-2 justify-center items-center py-1">
                                    {/* Hide Both Images for 'Missing' */}
                                </div>
                            )}
                        </div>

















                    </div>
                ))}
            </div>
        </div>
    );
};

export default LowerLingualTable;
