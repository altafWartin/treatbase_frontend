import React, { useState } from 'react';
import VoiceInput from './VoiceInput';

function Chart() {
  const [formData, setFormData] = useState({
    toothNumber: '',
    condition: '',
    comments: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md space-y-4">
      <div className="space-y-2">
        <label htmlFor="toothNumber" className="block text-gray-700">Tooth Number:</label>
        <input
          id="toothNumber"
          type="text"
          value={formData.toothNumber}
          onChange={(e) => handleInputChange('toothNumber', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <VoiceInput field="toothNumber" onChange={handleInputChange} />
      </div>

      <div className="space-y-2">
        <label htmlFor="condition" className="block text-gray-700">Condition:</label>
        <input
          id="condition"
          type="text"
          value={formData.condition}
          onChange={(e) => handleInputChange('condition', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <VoiceInput field="condition" onChange={handleInputChange} />
      </div>

      <div className="space-y-2">
        <label htmlFor="comments" className="block text-gray-700">Comments:</label>
        <input
          id="comments"
          type="text"
          value={formData.comments}
          onChange={(e) => handleInputChange('comments', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <VoiceInput field="comments" onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default Chart;
