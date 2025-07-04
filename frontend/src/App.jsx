
import React, { useState } from 'react';
import './index.css';

//require('dotenv').config();


const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  </div>
);

function App() {
  const [businessData, setBusinessData] = useState({
    name: '',
    location: '',
    rating: null,
    reviews: null,
    headline: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    return businessData.name.trim() !== '' && businessData.location.trim() !== '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/business-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: businessData.name,
          location: businessData.location,
        }),
      });
      const data = await response.json();
      setBusinessData((prevData) => ({
        ...prevData,
        rating: data.rating,
        reviews: data.reviews,
        headline: data.headline,
      }));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/regenerate-headline?name=${businessData.name}&location=${businessData.location}`
      );
      const data = await response.json();
      setBusinessData((prevData) => ({ ...prevData, headline: data.headline }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg bg-white p-6 rounded-lg shadow-md m-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Business Name</label>
            <input
              type="text"
              name="name"
              value={businessData.name}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={businessData.location}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex justify-center"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : 'Submit'}
          </button>
        </form>

        {businessData.rating !== null && (
          <div className="mt-6 bg-gray-50 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Business Data</h3>
            <p>Rating: {businessData.rating}</p>
            <p>Reviews: {businessData.reviews}</p>
            <p>Headline: {businessData.headline}</p>
            <button
              onClick={regenerateHeadline}
              className="bg-green-500 text-white mt-3 py-1 px-4 rounded hover:bg-green-600"
            >
              Regenerate SEO Headline
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;