import React from 'react'

const NameSide = () => {
  return (
    <div>
         <div className="flex flex-col justify-center items-end text-sm mr-5">
        <div className="h-10 flex items-center text-blue-500 font-medium text-sm">Tooth No</div>
        <div className="h-10 flex items-center text-blue-500 font-medium text-sm">Tooth Presence</div>
        <div className="h-10 flex items-center text-blue-500 font-medium text-sm">Mobility</div>
        <div className="h-10 flex items-center text-blue-500 font-medium text-sm">Furcation</div>
        <div className="h-10 flex items-center text-blue-500 font-medium text-sm">Gingival Margin</div>
        <div className="h-10 flex items-center text-blue-500 font-medium text-sm">Probing Depth</div>
        <div className="h-10 flex items-center text-blue-500 font-medium text-sm">Bleeding on Probing</div>
        <div className="h-10 flex items-center text-blue-500 font-medium text-sm">Plaque Index</div>
    </div>
    </div>
  )
}

export default NameSide
