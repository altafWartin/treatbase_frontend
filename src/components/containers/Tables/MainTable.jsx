import React,{useState} from 'react';
import UpperBuccalTable from './UpperBuccal/UpperBuccalTable';
import UpperPalatalTable from './UpperPalatal/UpperPalatalTable';
import LowerLingualTable from './LowerLingual/LowerLingualTable';
import LowerBuccalTable from './LowerBuccal/LowerBuccalTable';

// Reusable component for header sections
const HeaderSection = ({ items }) => {
    return (
        <div className="flex flex-col justify-center items-end text-sm mr-5">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="h-10 flex items-center justify-center text-[#1890FF] font-[Montserrat] text-[14px] font-medium leading-[normal]"
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

// Reusable component for section titles
const SectionTitle = ({ title }) => {
    return (
        <div className="mt-16 mb-12 text-[#1890FF] font-[Montserrat] text-2xl font-bold leading-[normal]">
            {title}
        </div>
    );
};

// Reusable component for vertical text labels
const VerticalTextLabel = ({ labels }) => {
    return (
        <div className="w-[5%] h-full flex flex-col justify-center items-center gap-32">
            {labels.map((label, index) => (
                <span
                    key={index}
                    className="rotate-90 text-[#333] [font-family:Montserrat] text-xl font-bold leading-[normal] tracking-[17.2px]"
                >
                    {label}
                </span>
            ))}
        </div>
    );
};

const MainTable = () => {
    const [toothPresence, setToothPresence] = useState(Array(16).fill('P'));

    const upperBuccalHeaders = [
        'Tooth No',
        'Tooth Presence',
        'Mobility',
        'Furaction',
        'Gingival Margin',
        'Probing Depth',
        'Bleeding on Probing',
        'Plaque Index'
    ];

    const buccalHeaders = [
        'Probing Depth',
        'Gingival Margin',
        'Plaque Index',
        'Bleeding on Probing',
        'Furaction',
        'Note'
    ];

    return (
        <div className="w-full mt-[61px] px-3 mb-24 flex overflow-x-auto">
            {/* Header Section */}
            <div className="w-[13%] min-w-[120px]">
                <HeaderSection items={upperBuccalHeaders} />

                {/* Sections Titles */}
                <SectionTitle title="BUCCAL" />
                <SectionTitle title="PALATAL" />
                <HeaderSection items={buccalHeaders} />
                <SectionTitle title="LINGUAL" />
                <SectionTitle title="BUCCAL" />
            </div>

            {/* Content Section */}
            <div className="w-[82%] min-w-[600px]">
                <UpperBuccalTable
                    toothPresence={toothPresence}
                    setToothPresence={setToothPresence} // Pass the updater function
                />
                <UpperPalatalTable
                    toothPresence={toothPresence} // Pass the updated state
                />
                <LowerLingualTable />
                <LowerBuccalTable />
            </div>

            {/* Vertical Labels */}
            <div className="w-[5%] pt-[27rem] h-full flex flex-col justify-center items-center gap-[45rem]">
                <VerticalTextLabel labels={['UPPER', 'JAW']} />
                <VerticalTextLabel labels={['LOWER', 'JAW']} />
            </div>
        </div>
    );
};

export default MainTable;
