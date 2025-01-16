import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// Correct import here! useSpeechRecognition is a named export
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function PatientDetails() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        date: new Date(),
        dateOfBirth: "",
        age: "",
        gender: "",
        preOp: false,
        postOp: false,
    });
    const currentDate = new Date();
    const [uid] = useState(uuidv4());

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const processTranscript = async (transcript) => {
        if (!transcript) return;

        try {
            const serverFormData = new FormData();
            serverFormData.append("transcript", transcript);

            const response = await axios.post(
                `http://ec2-13-201-101-178.ap-south-1.compute.amazonaws.com:8000/api/v1/patient/extract_patient_info?uid=${uid}`,
                serverFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        accept: "application/json",
                    },
                }
            );

            const data = response.data;
            setFormData((prev) => ({
                ...prev,
                firstName: data.first_name || "",
                lastName: data.last_name || "",
                dateOfBirth: data.date_of_birth || "",
                age: data.age || "",
                gender: data.gender || "",
                date: data.date_of_examination
                    ? new Date(data.date_of_examination)
                    : new Date(),
                preOp: data.examination_type?.toLowerCase() === "pre-op",
                postOp: data.examination_type?.toLowerCase() === "post-op",
            }));
        } catch (error) {
            console.error("Error processing transcript: ", error);
        }
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    };

    const handleInputChange = (field, value) => {
        setFormData((prev) => {
            const updatedData = { ...prev, [field]: value };

            if (field === "dateOfBirth") {
                updatedData.age = calculateAge(value);
            }

            return updatedData;
        });
    };

    useEffect(() => {
        if (listening) {
            console.log("Listening started");
        } else {
            console.log("Listening stopped");
            console.log("Transcript:", transcript);
            if (transcript) {
                processTranscript(transcript);
                resetTranscript();
                console.log("Start listening");
                SpeechRecognition.startListening({ language: 'en-US' });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listening]);

    const handleStartStopRecording = () => {
        if (listening && transcript) {
            console.log("Stop listening");
            SpeechRecognition.stopListening();
            processTranscript(transcript);
        } else {
            resetTranscript();
            if (browserSupportsSpeechRecognition && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                console.log("Start listening");
                SpeechRecognition.startListening({ language: 'en-US' });
            } else {
                alert("Speech recognition is not supported in your browser");
            }
        }
    };

    const genderOptions = [
        { value: "", label: "Select" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
    ];

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser does not support speech recognition.</span>;
    }

    return (
        <form
            className="flex flex-col w-full max-w-[65rem] mt-40 px-8 py-6 bg-sky-100 rounded-xl sm:mx-4 max-md:px-4 max-sm:px-2 mx-4"
        >
            <div className="fixed z-50 flex justify-end items-center w-16 h-16 right-20">
                <button
                    type="button"
                    onClick={handleStartStopRecording}
                    className={`w-16 h-16 flex items-center justify-center ${listening ? "bg-red-500" : "bg-blue-500"
                        } text-white px-4 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 gap-2 shadow-lg`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-mic"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold text-zinc-800">Patient Details</h1>
            </div>

            <div className="flex justify-end items-center mb-4">
                <div className="flex flex-col w-[16rem] max-md:w-full">
                    <label htmlFor="date" className="text-sm font-medium text-zinc-800">
                        Date
                    </label>
                    <Calendar
                        id="date"
                        value={formData.date}
                        onChange={(e) => {
                            const selectedDate = e.value;
                            handleInputChange("date", selectedDate);
                        }}
                        className="h-12 px-3 mt-1 bg-white rounded-lg border border-zinc-300 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-full transition-all duration-300"
                        aria-label="Date"
                        dateFormat="yy-mm-dd"
                        showIcon
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col w-full lg:w-[47%]">
                    <label htmlFor="firstName" className="text-sm font-medium text-zinc-800">
                        First Name
                    </label>
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
                    <label htmlFor="lastName" className="text-sm font-medium text-zinc-800">
                        Last Name
                    </label>
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
                <div className="flex justify-between items-center mb-4">
                    <div className="flex w-[75%] flex-col max-md:w-full">
                        <label
                            htmlFor="dateOfBirth"
                            className="text-sm font-medium text-zinc-800"
                        >
                            Date of Birth
                        </label>
                        <Calendar
                            id="dateOfBirth"
                            value={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
                            onChange={(e) => {
                                const selectedDate = e.value;
                                if (selectedDate) {
                                    const formattedDate = selectedDate.toISOString().split("T")[0];
                                    handleInputChange("dateOfBirth", formattedDate);
                                    handleInputChange("age", calculateAge(formattedDate));
                                }
                            }}
                            className="h-12 px-3 mt-1 bg-white rounded-lg border border-zinc-300 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-full transition-all duration-300"
                            aria-label="Date of Birth"
                            dateFormat="yy-mm-dd"
                            showIcon
                            maxDate={currentDate}
                        />
                    </div>
                    <div className="flex flex-col w-[20%]">
                        <label htmlFor="age" className="text-sm font-medium text-zinc-800">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            value={formData.age}
                            className="h-12 px-3 mt-1 rounded-lg border border-zinc-300 bg-white w-full"
                            readOnly
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full lg:w-[47%]">
                    <label htmlFor="gender" className="text-sm font-medium text-zinc-800">
                        Gender
                    </label>
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
                    <label htmlFor="preOp" className="text-sm font-medium text-zinc-800">
                        Pre Op
                    </label>
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
                    <label htmlFor="postOp" className="text-sm font-medium text-zinc-800">
                        Post Op
                    </label>
                </div>
            </div>
            {listening && <div>Listening...</div>}
        </form>
    );
}