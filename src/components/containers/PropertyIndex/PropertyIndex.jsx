import React from 'react';
import  PeriodontalLegend  from './PeriodontalLegend';

const PropertyIndexTable = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center p-4 rounded-md ">
      <h2 className="text-lg font-semibold mb-4 text-center">Property Index</h2>
      <PeriodontalLegend/>
    </div>
  );
};

export default PropertyIndexTable;
