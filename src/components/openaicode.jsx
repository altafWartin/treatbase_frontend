import React, { useState } from "react";
import { Calendar } from "primereact/calendar"; // Calendar import from PrimeReact
import { v4 as uuidv4 } from "uuid"; // Unique ID generation
import axios from "axios";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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
    const currentDate = new Date(); // Get the current date


    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");
    const [uid, setUid] = useState(uuidv4());

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

    const handleInputChange = (field, value) => {
        setFormData((prev) => {
            const updatedData = { ...prev, [field]: value };

            // Dynamically calculate age when DOB changes
            if (field === "dateOfBirth") {
                updatedData.age = calculateAge(value);
            }

            return updatedData;
        });
    };

    const handleStartRecording = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert("Audio recording is not supported in this browser.");
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        source.connect(analyser);
        const dataArray = new Uint8Array(analyser.fftSize);
        let silenceTimer = null;

        let manualStop = false; // State to track manual stop

        setRecording(true); // Set recording state to true

        const sendAudioChunkInBackground = async (audioBlob) => {
            // Background upload
            handleUpload(audioBlob).catch((error) => {
                console.error("Error uploading audio chunk:", error);
            });
        };

        const checkSilence = () => {
            analyser.getByteFrequencyData(dataArray);
            const volume = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

            if (volume < 10) {
                // Silence detected
                if (!silenceTimer) {
                    silenceTimer = setTimeout(() => {
                        mediaRecorder.stop(); // Stop current recording
                    }, 1000); // 1 second silence threshold
                }
            } else {
                // Sound detected, clear silence timer
                if (silenceTimer) {
                    clearTimeout(silenceTimer);
                    silenceTimer = null;
                }
            }

            if (mediaRecorder.state === "recording") {
                requestAnimationFrame(checkSilence); // Continue checking for silence
            }
        };

        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            // Send audio chunk in the background
            if (audioChunks.length > 0) {
                const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
                sendAudioChunkInBackground(audioBlob); // Upload in the background
                audioChunks.length = 0; // Clear audio chunks
            }

            if (!manualStop) {
                // Restart recording automatically if not manually stopped
                mediaRecorder.start();
                checkSilence();
            }
        };

        mediaRecorder.start(); // Start the initial recording
        checkSilence(); // Start silence detection

        // Manual stop function
        const handleManualStop = () => {
            manualStop = true; // Mark as manually stopped
            setRecording(false); // Update state to reflect stopped recording
            mediaRecorder.stop(); // Stop recording
            stream.getTracks().forEach((track) => track.stop()); // Stop the microphone stream
            audioContext.close(); // Close the audio context
        };

        // Attach the stop function to a button or UI event
        window.handleStopRecording = handleManualStop;
    };



    const handleStopRecording = () => {
        console.log("30. handleStopRecording called, setting recording to false");
        setRecording(false); // This will stop the automatic loop of starting new recordings
    };

    const handleUpload = async (audioBlob) => {
        console.log("31. Start function handleUpload");

        if (!audioBlob) {
            console.log("32. No audio blob to upload");
            alert("No audio file to upload.");
            return;
        }

        try {
            const audioFile = new File([audioBlob], "recording.mp3", { type: "audio/mpeg" });

            // Create FormData and append the file and model name
            const transcriptFormData = new FormData();
            transcriptFormData.append("file", audioFile);
            transcriptFormData.append("model", "whisper-1"); // Specify the model name

            transcriptFormData.append("language", "en"); // Explicitly set transcription language to English

            // Make the API call to OpenAI Whisper API
            const transcriptResponse = await axios.post(
                "https://api.openai.com/v1/audio/transcriptions",
                transcriptFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer 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`, // Replace with your OpenAI API key
                    },
                }
            );


            // Step 1: Extract the transcript from the OpenAI response
            const transcript = transcriptResponse.data.text;
            console.log("34. Transcript received:", transcript);

            // Step 2: Prepare the transcript for your server
            console.log("35. Sending transcript to server...");
            const serverFormData = new FormData();
            serverFormData.append("transcript", transcript);

            // Step 3: Send transcript to the server API
            const response = await axios.post(
                `http://ec2-13-201-101-178.ap-south-1.compute.amazonaws.com:8000/api/v1/patient/extract_patient_info?uid=${uid}`,
                serverFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Specify multipart content type
                        accept: "application/json", // Accept JSON responses from the server
                    },
                }
            );

            // Step 4: Handle successful response
            console.log("36. Server responded successfully:", response.data);

            // Update your state or perform any other action based on the response
            const data = response.data;

            calculateAge(data.date_of_birth);
            setFormData((prev) => ({
                ...prev,
                firstName: data.first_name || "",
                lastName: data.last_name || "",
                dateOfBirth: data.date_of_birth || "",
                age: data.age || "",
                gender: data.gender || "",
                date: data.date_of_examination ? new Date(data.date_of_examination) : new Date(),
                preOp: data.examination_type?.toLowerCase() === "pre-op",
                postOp: data.examination_type?.toLowerCase() === "post-op",
            }));
            setUploadStatus("Upload successful!");
            console.log("37. Form data updated successfully");
        } catch (error) {
            console.error("38. Error during transcription or upload:", error);
            setUploadStatus("Upload failed.");
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
            <div className=" fixed z-50 flex justify-end items-center w-16 h-16   right-20">
                <button
                    type="button"
                    onClick={recording ? handleStopRecording : handleStartRecording}
                    className={`w-16 h-16 flex items-center justify-center ${recording ? "bg-red-500" : "bg-blue-500"
                        } text-white px-4 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50 gap-2 shadow-lg`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
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
                    <label htmlFor="date" className="text-sm font-medium text-zinc-800">Date</label>
                    <Calendar
                        id="date"
                        value={formData.date} // Ensure it's a Date object
                        onChange={(e) => {
                            const selectedDate = e.value; // e.value is a Date object
                            handleInputChange("date", selectedDate);
                        }}
                        className="h-12 px-3 mt-1 bg-white rounded-lg border border-zinc-300 hover:border-sky-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-full transition-all duration-300"
                        aria-label="Date"
                        dateFormat="yy-mm-dd" // Ensures display format
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

                <div className="flex justify-between items-center  mb-4">
                    <div className="flex w-[75%]  flex-col  max-md:w-full">
                        <label htmlFor="dateOfBirth" className="text-sm font-medium text-zinc-800">Date of Birth</label>

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
                            maxDate={currentDate} // Prevent future date selection
                        />
                    </div>
                    <div className="flex flex-col w-[20%]">
                        <label htmlFor="age" className="text-sm font-medium text-zinc-800">Age</label>
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