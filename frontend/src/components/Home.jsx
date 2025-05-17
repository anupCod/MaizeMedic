import { useState, useRef } from 'react';
import imgUpload from '../assets/imageUpload.svg';
import axios from 'axios';

function Home() {
  const [fileName, setFileName] = useState('Upload file');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResult, setShowResult] = useState(false); // New state to control result visibility

  const fileInputRef = useRef(null);
  const accessToken = localStorage.getItem('accessToken');

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setImage(file);
      setIsImageUploaded(true);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredictClick = async (event) => {
    event.preventDefault();

    if (!isImageUploaded) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    setError(null);
    setPrediction(null);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/predict/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data[0]);
      setPrediction((prev) => ({
        ...prev,
        symptoms: response.data[1]?.symptoms,
        prevention: response.data[1]?.prevention,
        treatment: response.data[1]?.treatment,
      }));
      setShowResult(true); // Show the result box after successful prediction
    } catch (error) {
      setError(error?.response?.data?.detail || error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderPredictionResult = () => {
    if (!prediction || loading || !showResult) return null; // Check showResult state
    return (
      <div className=" w-[50rem] text-left bg-white rounded-md shadow-md p-4 mb-4">
        {previewImage && (
          <img
            src={previewImage}
            alt="Uploaded preview"
            className="w-full h-auto max-h-[200px] object-contain rounded-md mb-4"
          />
        )}
       <h1 className="font-bold text-center mb-4">Prediction Result</h1>
<div className="grid grid-cols-2 gap-2"> {/* Reduced gap to 2 */}
  <div className="font-semibold">Predicted Class:</div>
  <div>{prediction.predicted_class}</div>
  <div className="font-semibold">Symptoms:</div>
  <div>{prediction.symptoms}</div>
  <div className="font-semibold">Prevention:</div>
  <div>{prediction.prevention}</div>
  <div className="font-semibold">Treatment:</div>
  <div>{prediction.treatment}</div>
</div>
      </div>
    );
  };
  return (
    <section className="w-full flex flex-col items-center my-12 z-2">
      {!showResult && ( 
        <form className="w-[26rem] h-[15rem] rounded-md shadow-neumorphism flex flex-col items-center justify-center bg-slate-100 px-5">
          <div className="flex items-center">
            <img
              src={imgUpload}
              alt="image-upload-icon"
              className="cursor-pointer"
              onClick={handleImageClick}
            />
            <p className="mx-3 font-semibold text-wrap">{fileName}</p>
            <input
              type="file"
              name="myfile"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
          <div className="flex gap-8">
            <input
              type="submit"
              value="Upload"
              className="border-0 mt-5 px-4 py-[0.4rem] bg-success font-semibold text-white rounded-md cursor-pointer"
            />
            <input
              type="button"
              value="Predict"
              className={`${
                accessToken ? 'block' : 'hidden'
              } border-0 mt-5 px-4 py-[0.4rem] bg-secondary font-semibold text-white rounded-md cursor-pointer`}
              onClick={handlePredictClick}
            />
          </div>
        </form>
      )}
      {loading && <div className="mt-4">Loading...</div>}
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {renderPredictionResult()}
    </section>
  );
}
export default Home;