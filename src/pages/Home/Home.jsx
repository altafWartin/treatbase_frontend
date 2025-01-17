import React from 'react'
import PatientDetails from '../../components/PatientDetails'
import MainTable from '../../components/containers/Tables/MainTable'
import PropertyIndexTable from '../../components/containers/PropertyIndex/PropertyIndex'

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='w-full flex flex-col justify-center items-center  gap-10'>

        <PatientDetails />

        <PropertyIndexTable />

        <div className="w-full  ">
          <MainTable />
        </div>



      </div>
    </div>
  )
}

export default Home
