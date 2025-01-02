import * as React from "react";
import { useState } from "react";
import { Calendar } from "primereact/calendar"; // Import Calendar from PrimeReact
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function PatientDetails() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        date: new Date(), // Current date
        dateOfBirth: "1998-05-20", // Default Date of Birth
        age: "",
        gender: "",
        preOp: false,
        postOp: false,
    });
    console.log("formData",formData);

    // Function to calculate age based on Date of Birth
    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const handleInputChange = (name, value) => {
        if (name === "dateOfBirth") {
            const age = calculateAge(value);
            setFormData((prev) => ({
                ...prev,
                [name]: value,
                age: age,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };



    const genderOptions = [
        { value: "", label: "Select" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
    ];

   
    


    return (
        <form
         
            className="flex flex-col w-full max-w-[65rem] mt-40 px-8 py-6 bg-sky-100 rounded-xl sm:mx-4 max-md:px-4 max-sm:px-2 mx-4"
        >
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold text-zinc-800">Patient Details</h1>
            </div>

            <div className="flex justify-end items-center mb-4">
                <div className="flex flex-col w-[16rem] max-md:w-full">
                    <label htmlFor="date" className="text-sm font-medium text-zinc-800">Date</label>
                    <Calendar
                        id="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="h-12 px-3 mt-1 bg-white rounded-lg border border-zinc-300 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-full transition-all duration-300"
                        aria-label="Date"
                        dateFormat="yy-mm-dd"
                        showIcon
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col w-full lg:w-[47%]">
                    <label htmlFor="firstName" className="text-sm font-medium text-zinc-800">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="h-12 px-3 mt-1 bg-white rounded-lg border border-zinc-300 w-full"
                        aria-label="First Name"
                    />
                </div>
                <div className="flex flex-col w-full lg:w-[47%]">
                    <label htmlFor="lastName" className="text-sm font-medium text-zinc-800">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="h-12 px-3 mt-1 bg-white rounded-lg border border-zinc-300 w-full"
                        aria-label="Last Name"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-between mt-4">
                <div className="flex justify-between w-full lg:w-[47%]">
                    <div className="flex flex-col w-[76%]">
                        <label htmlFor="dateOfBirth" className="text-sm font-medium w-full text-zinc-800">Date of Birth</label>
                        <Calendar
                            id="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                            className="h-12 px-3 mt-1 bg-white rounded-lg border border-zinc-300 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-full transition-all duration-300"
                            aria-label="Date of Birth"
                            dateFormat="yy-mm-dd"
                            showIcon
                        />
                    </div>
                    <div className="flex flex-col w-[20%]">
                        <label htmlFor="age" className="text-sm font-medium text-zinc-800">Age</label>
                        <input
                            type="number"
                            id="age"
                            value={formData.age}
                            onChange={(e) => handleInputChange("age", e.target.value)}
                            className="h-12 px-3 mt-1 rounded-lg border border-zinc-300 bg-white w-full"
                            aria-label="Age"
                            readOnly
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full lg:w-[47%]">
                    <label htmlFor="gender" className="text-sm font-medium text-zinc-800">Gender</label>
                    <select
                        id="gender"
                        value={formData.gender}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        className="h-12 px-3 mt-1 rounded-lg border border-zinc-300 bg-white w-full"
                        aria-label="Gender"
                    >
                        {genderOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                </div>
            </div>

            <div className="flex justify-center gap-5 mt-6 flex-wrap">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="preOp"
                        checked={formData.preOp}
                        onChange={(e) => {
                            handleInputChange("preOp", e.target.checked);
                            handleInputChange("postOp", false);
                        }}
                        className="w-6 h-6 rounded-lg border border-zinc-300 bg-white"
                        aria-label="Pre Op"
                    />
                    <label htmlFor="preOp" className="text-sm font-medium text-zinc-800">Pre Op</label>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="postOp"
                        checked={formData.postOp}
                        onChange={(e) => {
                            handleInputChange("postOp", e.target.checked);
                            handleInputChange("preOp", false);
                        }}
                        className="w-6 h-6 rounded-lg border border-zinc-300 bg-white"
                        aria-label="Post Op"
                    />
                    <label htmlFor="postOp" className="text-sm font-medium text-zinc-800">Post Op</label>
                </div>
            </div>

            
        </form>
    );
}