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


import LB1 from "../../../../assets/LowerBuccal/LB1.svg";
import LB2 from "../../../../assets/LowerBuccal/LB2.svg";
import LB3 from "../../../../assets/LowerBuccal/LB3.svg";
import LB4 from "../../../../assets/LowerBuccal/LB4.svg";
import LB5 from "../../../../assets/LowerBuccal/LB5.svg";
import LB6 from "../../../../assets/LowerBuccal/LB6.svg";
import LB7 from "../../../../assets/LowerBuccal/LB7.svg";
import LB8 from "../../../../assets/LowerBuccal/LB8.svg";
import LB9 from "../../../../assets/LowerBuccal/LB9.svg";
import LB10 from "../../../../assets/LowerBuccal/LB10.svg";
import LB11 from "../../../../assets/LowerBuccal/LB11.svg";
import LB12 from "../../../../assets/LowerBuccal/LB12.svg";
import LB13 from "../../../../assets/LowerBuccal/LB13.svg";
import LB14 from "../../../../assets/LowerBuccal/LB14.svg";
import LB15 from "../../../../assets/LowerBuccal/LB15.svg";
import LB16 from "../../../../assets/LowerBuccal/LB16.svg";

import LBI1 from "../../../../assets/LowerBuccal/LBI1.svg";
import LBI2 from "../../../../assets/LowerBuccal/LBI2.svg";
import LBI3 from "../../../../assets/LowerBuccal/LBI3.svg";
import LBI4 from "../../../../assets/LowerBuccal/LBI4.svg";
import LBI5 from "../../../../assets/LowerBuccal/LBI5.svg";
import LBI6 from "../../../../assets/LowerBuccal/LBI6.svg";
import LBI7 from "../../../../assets/LowerBuccal/LBI7.svg";
import LBI8 from "../../../../assets/LowerBuccal/LBI8.svg";
import LBI9 from "../../../../assets/LowerBuccal/LBI9.svg";
import LBI10 from "../../../../assets/LowerBuccal/LBI10.svg";
import LBI11 from "../../../../assets/LowerBuccal/LBI11.svg";
import LBI12 from "../../../../assets/LowerBuccal/LBI12.svg";
import LBI13 from "../../../../assets/LowerBuccal/LBI13.svg";
import LBI14 from "../../../../assets/LowerBuccal/LBI14.svg";
import LBI15 from "../../../../assets/LowerBuccal/LBI15.svg";
import LBI16 from "../../../../assets/LowerBuccal/LBI16.svg";




const LowerBuccalTable = ({ toothPresenceLower, setToothPresenceLower }) => {
    // const [toothPresenceLower, setToothPresenceLower] = useState(Array(16).fill('P'));
    const [furcationStatus, setFurcationStatus] = useState(Array(16).fill(''));
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

    const LowerBuccalImages = [LB1, LB2, LB3, LB4, LB5, LB6, LB7, LB8, LB9, LB10, LB11, LB12, LB13, LB14, LB15, LB16];

    const LowerBuccalImplantImages = [LBI1, LBI2, LBI3, LBI4, LBI5, LBI6, LBI7, LBI8, LBI9, LBI10, LBI11, LBI12, LBI13, LBI14, LBI15, LBI16];

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

    const toggleToothPresence = (index) => {
        setToothPresenceLower((prev) => {
            const updated = [...prev];
            updated[index] =
                updated[index] === 'P' ? 'M' : updated[index] === 'M' ? 'I' : 'P';
            return updated;
        });
    };

    const toggleFurcationStatus = (index) => {
        setFurcationStatus((prev) => {
            const updated = [...prev];
            updated[index] =
                updated[index] === ''
                    ? 'Empty'
                    : updated[index] === 'Empty'
                        ? 'Half'
                        : updated[index] === 'Half'
                            ? 'Full'
                            : '';
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
        <div className="w-full border  bg-[#F2F9FF] flex items-center justify-center">
            <div className="flex w-full h-full">
                {Array.from({ length: 16 }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-full border h-full ${index === 7 ? 'mr-[25px]' : ''}`}
                    >

                        <div className="relative flex flex-col my-5 justify-center items-center py-1 " style={{ height: '90px' }}>


                            {/* Render Static Grid Lines */}




                            {Array.from({ length: 17 }).map((_, idx) => (
                                <hr
                                    key={idx}
                                    className="absolute w-full border-t-2 border-[#666] z-10"
                                    style={{ top: `${(idx / 16) * 100}%` }}
                                />


                            ))}


                            <div className='absolute w-full h-full z-10'>

                                {/* Conditional Image Rendering */}
                                {toothPresenceLower[index] === 'P' ? (
                                    <div className="relative flex gap-2 mt-7 justify-center items-center py-1">
                                        {/* Show Buccal Image for 'Present' */}
                                        <img

                                            src={LowerBuccalImages[index]}

                                            alt={`Buccal ${index + 1}`}
                                            className="relative w-12 bottom-[4.5rem] h-[6rem] z-0"
                                        />
                                    </div>
                                ) : toothPresenceLower[index] === 'I' ? (
                                    <div className="relative flex gap-2 justify-center items-center py-1">
                                        {/* Show Implant Image for 'Implant' */}
                                        <img
                                            src={LowerBuccalImplantImages[index]}
                                            alt={`Implant ${index + 1}`}
                                            className="relative w-12 bottom-8 h-[5rem] z-0"
                                        />
                                    </div>
                                ) : (
                                    <div className="relative flex gap-2 justify-center items-center py-1">
                                        {/* Hide Both Images for 'Missing' */}
                                    </div>
                                )}



                            </div>



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


                        <div className="flex h-10 gap-1 justify-center items-center py-1">
                            {['left', 'center', 'right'].map((position) => (
                                <button
                                    key={position}
                                    onClick={() => toggleBleedingStatus(index, position)}
                                    className={`w-[1rem] h-3 p-1.5 rounded-sm  ${bleedingStatus[index][position] === 'Yes' ? 'bg-red-500' : 'bg-[#E6EDFD]'}`}
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
                        <div className="flex h-10 justify-center items-center py-1">
                            {(index < 3 || index >= 13) && (
                                <button
                                    onClick={() => toggleFurcationStatus(index)}
                                    className="flex w-10 h-3 justify-center items-center [background:#E6EDFD] p-2.5 rounded-lg"
                                >
                                    {furcationStatus[index] === 'Full' && <img src={FullCircle} alt="Full Circle" />}
                                    {furcationStatus[index] === 'Half' && <img src={HalfCircle} alt="Half Circle" />}
                                    {furcationStatus[index] === 'Empty' && <img src={EmptyCircle} alt="Empty Circle" />}
                                </button>
                            )}
                        </div>


                        <div className="flex h-10 justify-center items-center py-1">
                            <input
                                className="w-4  bg-transparent border-2 rounded-md"
                                type="text"
                                inputMode="numeric"
                                pattern="[1-3]"
                                maxLength="1"
                                title="Please enter 0, 1, 2, or 3"
                                onInput={(e) => (e.target.value = e.target.value.replace(/[^0-3]/g, ''))}
                            />
                        </div>

                        <div className="flex h-10 justify-center items-center py-1">
                            <button
                                onClick={() => toggleToothPresence(index)}
                                className={`flex w-7 h-7 justify-center items-center p-2.5 rounded-[20px] ${toothPresenceLower[index] === 'P'
                                    ? '[background:#E6EDFD]' // Blue color for 'P'
                                    : toothPresenceLower[index] === 'M'
                                        ? '[background:#FFC2C2]' // Red color for 'M'
                                        : toothPresenceLower[index] === 'I'
                                            ? '[background:#D9D9D9]' // Gray color for 'I'
                                            : ''
                                    }`}
                            >
                                {toothPresenceLower[index]}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LowerBuccalTable;
