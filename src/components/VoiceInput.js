import React, { useState } from 'react';

function VoiceInput({ field, onChange }) {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceCommand = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition is not supported in this browser');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      onChange(field, command);
    };

    recognition.start();
  };

  return (
    <div className="mt-2">
      <button
        onClick={handleVoiceCommand}
        className={`px-4 py-2 text-white rounded-md ${isListening ? 'bg-gray-400' : 'bg-indigo-500'} focus:outline-none`}
        disabled={isListening}
      >
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
    </div>
  );
}

export default VoiceInput;
