import React, { useState } from "react";
import Lottie from "react-lottie-player";
import micAnimation from "../assets/micAnimation.json"; // Add your Lottie file

const MicSpeakingEffect = ({isRecording, onStartRecording, onStopRecording }) => {
    // Default props for backward compatibility
    const handleStartRecording = () => {
        if (onStartRecording) onStartRecording();
    };

    const handleStopRecording = () => {
        if (onStopRecording) onStopRecording();
    };

    return (
        <div className="fixed z-50 flex justify-end items-center w-16 h-16 right-3">
            <button
                type="button"
                onClick={isRecording ? handleStopRecording : handleStartRecording}
                className={`w-16 h-16 flex items-center justify-center ${
                    isRecording ? "bg-red-500" : "bg-blue-500"
                } text-white rounded-full shadow-lg`}
            >
                {isRecording ? (
                    <Lottie
                        animationData={micAnimation}
                        play
                        loop
                        style={{ width: 60, height: 60 }}
                    />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-mic"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                    </svg>
                )}
            </button>
        </div>
    );
};

// Define default props for flexibility
MicSpeakingEffect.defaultProps = {
    onStartRecording: null,
    onStopRecording: null,
    isRecording: false,
};

export default MicSpeakingEffect;
