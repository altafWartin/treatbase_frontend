import React from 'react';
import Chart from './components/Chart';
import { Header } from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PatientDetails from './components/PatientDetails';
import PropertyIndex from './components/PropertyIndex/PropertyIndex';
import PropertyIndexTable from './components/PropertyIndex/PropertyIndex';
import MainTable from './components/MainTable/MainTable';
import SideNavigation from './components/Sidebar/Sidebar';

function App() {
  return (

    <div>
      <Header />
      <SideNavigation />
      <div className=" flex  justify-center ">
        <div className='w-full flex flex-col justify-center items-center  gap-10'>

          <PatientDetails />
          <PropertyIndexTable />
          {/* <MainTable/> */}
          <MainTable/>
        </div>
        {/* <h1 className="text-4xl font-semibold text-gray-800 mb-8">Periodontal Chart</h1> */}
        {/* <Chart /> */}
      </div>
    </div>
  );
}

export default App;
