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
import ToothGrid from './ToothGrid';





const UpperBuccalTable = ( { toothPresence, setToothPresence }) => {
    // const [toothPresence, setToothPresence] = useState(Array(16).fill('P'));
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

    const buccalImages = [Buccal1, Buccal2,
        Buccal3,
        Buccal4,
        Buccal5,
        Buccal6,
        Buccal7,
        Buccal8,
        Buccal9,
        Buccal10,
        Buccal11,
        Buccal12,
        Buccal13,
        Buccal14,
        Buccal15,
        Buccal16,
    ];

    const buccalImplantImages = [
        { src: I1, className: " top-7" },
        { src: I2, className: " top-8" },
        { src: I3, className: " top-8" },
        { src: I4, className: " top-8" },
        { src: I5, className: " top-8" },
        { src: I6, className: " top-10" },
        { src: I7, className: " top-9" },
        { src: I8, className: " top-10" },
        { src: I9, className: " top-[2.7rem]" },
        { src: I10, className: " top-9" },
        { src: I11, className: " top-10" },
        { src: I12, className: " top-8" },
        { src: I13, className: " top-8" },
        { src: I14, className: " top-8" },
        { src: I15, className: " top-8" },
        { src: I16, className: " top-8" },
    ];

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
        setToothPresence((prev) => {
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
        <div className="w-full  border  border-b-0 bg-[#F2F9FF] flex items-center justify-center">
            <div className="flex w-full h-full">
                {Array.from({ length: 16 }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-full border  h-full ${index === 7 ? 'mr-[25px]' : ''}`}
                    >
                        <div className="flex h-10 border-b-2 justify-center items-center">{index + 1}</div>

                        <div className="flex h-10 justify-center items-center py-1">
                            <button
                                onClick={() => toggleToothPresence(index)}
                                className={`flex w-7 h-7 justify-center items-center p-2.5 rounded-[20px] ${toothPresence[index] === 'P'
                                    ? '[background:#E6EDFD]' // Blue color for 'P'
                                    : toothPresence[index] === 'M'
                                        ? '[background:#FFC2C2]' // Red color for 'M'
                                        : toothPresence[index] === 'I'
                                            ? '[background:#D9D9D9]' // Gray color for 'I'
                                            : ''
                                    }`}
                            >
                                {toothPresence[index]}
                            </button>
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

                        {/* <div className="relative flex flex-col my-5 justify-center items-center py-1 " style={{ height: '90px' }}>
                            {Array.from({ length: 17 }).map((_, idx) => (
                                <hr
                                    key={idx}
                                    className="absolute w-full border-t-2 border-[#666] z-10"
                                    style={{ top: `${(idx / 16) * 100}%` }}
                                />


                            ))}
                            {toothPresence[index] === 'P' ? (
                                <div className="relative flex gap-2 mt-7 justify-center items-center py-1">
                                    <img
                                        src={buccalImages[index]}
                                        alt={`Buccal ${index + 1}`}
                                        className="relative w-12 top-6 h-[6rem] z-0"
                                    />
                                </div>
                            ) : toothPresence[index] === 'I' ? (
                                <div className="relative flex gap-2 justify-center items-center py-1">
                                    <img
                                        src={buccalImplantImages[index].src}
                                        alt={`Implant ${index + 1}`}
                                        className={`relative w-12  h-[6rem] z-0 ${buccalImplantImages[index].className}`}
                                    />

                                </div>
                            ) : (
                                <div className="relative flex gap-2 justify-center items-center py-1">
                                </div>
                            )}
                        </div> */}

                        <ToothGrid
                            key={index}
                            toothPresence={toothPresence}
                            index={index}
                            buccalImages={buccalImages}
                            buccalImplantImages={buccalImplantImages}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpperBuccalTable;
