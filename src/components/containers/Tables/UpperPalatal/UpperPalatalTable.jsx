import React, { useState } from 'react';
import FullCircle from '../../../../assets/FullCircle.svg';
import HalfCircle from '../../../../assets/HalfCircle.svg';
import EmptyCircle from '../../../../assets/EmptyCircle.svg';

import UP1 from '../../../../assets/UpparPalatalImages/UP1.svg';
import UP2 from '../../../../assets/UpparPalatalImages/UP2.svg';
import UP3 from '../../../../assets/UpparPalatalImages/UP3.svg';
import UP4 from '../../../../assets/UpparPalatalImages/UP4.svg';
import UP5 from '../../../../assets/UpparPalatalImages/UP5.svg';
import UP6 from '../../../../assets/UpparPalatalImages/UP6.svg';
import UP7 from '../../../../assets/UpparPalatalImages/UP7.svg';
import UP8 from '../../../../assets/UpparPalatalImages/UP8.svg';
import UP9 from '../../../../assets/UpparPalatalImages/UP9.svg';
import UP10 from '../../../../assets/UpparPalatalImages/UP10.svg';
import UP11 from '../../../../assets/UpparPalatalImages/UP11.svg';
import UP12 from '../../../../assets/UpparPalatalImages/UP12.svg';
import UP13 from '../../../../assets/UpparPalatalImages/UP13.svg';
import UP14 from '../../../../assets/UpparPalatalImages/UP14.svg';
import UP15 from '../../../../assets/UpparPalatalImages/UP15.svg';
import UP16 from '../../../../assets/UpparPalatalImages/UP16.svg';

import UPI1 from '../../../../assets/UpparPalatalImages/UPI1.svg';
import UPI2 from '../../../../assets/UpparPalatalImages/UPI2.svg';
import UPI3 from '../../../../assets/UpparPalatalImages/UPI3.svg';
import UPI4 from '../../../../assets/UpparPalatalImages/UPI4.svg';
import UPI5 from '../../../../assets/UpparPalatalImages/UPI5.svg';
import UPI6 from '../../../../assets/UpparPalatalImages/UPI6.svg';
import UPI7 from '../../../../assets/UpparPalatalImages/UPI7.svg';
import UPI8 from '../../../../assets/UpparPalatalImages/UPI8.svg';
import UPI9 from '../../../../assets/UpparPalatalImages/UPI9.svg';
import UPI10 from '../../../../assets/UpparPalatalImages/UPI10.svg';
import UPI11 from '../../../../assets/UpparPalatalImages/UPI11.svg';
import UPI12 from '../../../../assets/UpparPalatalImages/UPI12.svg';
import UPI13 from '../../../../assets/UpparPalatalImages/UPI13.svg';
import UPI14 from '../../../../assets/UpparPalatalImages/UPI14.svg';
import UPI15 from '../../../../assets/UpparPalatalImages/UPI15.svg';
import UPI16 from '../../../../assets/UpparPalatalImages/UPI16.svg';

import I1png from "../../../../assets/UpparBuccal/I1png.png";

const UpperPalatalTable = ({ toothPresence }) => {
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

    const upparPalatal = [UP1, UP2, UP3, UP4, UP5, UP6, UP7, UP8, UP9, UP10, UP11, UP12, UP13, UP14, UP15, UP16];
    const upparPalatalImplant = [UPI1, UPI2, UPI3, UPI4, UPI5, UPI6, UPI7, UPI8, UPI9, UPI10, UPI11, UPI12, UPI13, UPI14, UPI15, UPI16];

    const updateGingivalMargin = (toothIndex, pos, value) => {
        setGingivalMargin((prev) => {
            const updated = [...prev];
            updated[toothIndex] = [...updated[toothIndex]];
            updated[toothIndex][pos] = parseFloat(value) || 0;
            return updated;
        });
    };

    const updateProbingDepth = (toothIndex, pos, value) => {
        setProbingDepth((prev) => {
            const updated = [...prev];
            updated[toothIndex] = [...updated[toothIndex]];
            updated[toothIndex][pos] = parseFloat(value) || 0;
            return updated;
        });
    };

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
                        : '',
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
        <div className="w-full border  border-t-0 bg-[#F2F9FF] flex items-center justify-center">
            <div className="flex w-full h-full">
                {Array.from({ length: 16 }).map((_, index) => (
                    <div key={index} className={`w-full border h-full ${index === 7 ? 'mr-[25px]' : ''}`}>
                        <div className="relative flex flex-col my-5 justify-center items-center py-1 mt-12" style={{ height: '90px' }}>
                            {Array.from({ length: 17 }).map((_, idx) => (
                                <hr key={idx} className="absolute w-full border-t-2 border-[#666] z-10" style={{ top: `${(idx / 16) * 100}%` }} />
                            ))}
                            <div className="absolute w-full h-full z-10">
                                {toothPresence[index] === 'P' ? (
                                    <div className="relative flex gap-2 mt-7 justify-center items-center py-1">
                                        <img src={upparPalatal[index]} alt={`Buccal ${index + 1}`} className="relative w-12 bottom-[4.5rem] h-[6rem] z-0" />
                                    </div>
                                ) : toothPresence[index] === 'I' ? (
                                    <div className="relative flex gap-2 justify-center items-center py-1">
                                        <img src={upparPalatalImplant[index]} alt={`Buccal ${index + 1}`} className="relative w-12 bottom-[2.5rem] h-[6rem] z-0" />
                                        </div>
                                ) : (
                                    <div className="relative flex gap-2 justify-center items-center py-1"></div>
                                )}
                            </div>
                        </div>
                        {/* Probing Depth */}
                        <div className="flex h-10 justify-center items-center py-1 gap-1">
                            {probingDepth[index].map((value, pos) => (
                                <input key={pos} className="w-4 bg-transparent border-2 rounded-md" type="text" value={value} onChange={(e) => updateProbingDepth(index, pos, e.target.value)} />
                            ))}
                        </div>
                        {/* Gingival Margin */}
                        <div className="flex h-10 justify-center items-center py-1 gap-1">
                            {gingivalMargin[index].map((value, pos) => (
                                <input key={pos} className="w-4 bg-transparent border-2 rounded-md" type="text" value={value} onChange={(e) => updateGingivalMargin(index, pos, e.target.value)} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpperPalatalTable;
