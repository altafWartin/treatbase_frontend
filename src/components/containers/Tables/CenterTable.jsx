import React from 'react'

const CenterTable = () => {
    const [toothPresence, setToothPresence] = useState(Array(16).fill('P'));

    return (
        <div>
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
    )
}

export default CenterTable
