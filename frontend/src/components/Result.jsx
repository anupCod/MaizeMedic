

const data = [
  {
    title: 'STRIPE DOWNY MILDEW',
    cause: [
      'Caused by fungal-like pathogens known as Peronosclerospora spp.',
      'Spreads through airborne spores, contaminated seeds, or infected plant residues.',
      'Thrives in warm, humid conditions, especially in areas with heavy rainfall or irrigation.',
      'Poorly drained soils and overcrowded planting increase the risk of infection.'
    ],
    preventiveMeasures: [
      'Use Resistant Varieties: Plant maize varieties that are bred to be resistant to stripe downy mildew.',
      'Seed Treatment: Treat seeds with appropriate fungicides to reduce the chances of early infection.',
      'Proper Crop Rotation: Avoid planting maize consecutively in the same field. Rotate crops with non-host plants like legumes or other grains.',
      'Maintain Field Hygiene: Remove and destroy infected plant debris to reduce the spread of spores.'
    ],
    imageUrl: 'https://source.unsplash.com/random/300x200?maize'
  }
];

const MildewInfo = () => {
  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-gray-100">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-blue-500 rounded-md p-6 w-3/5 h-auto shadow-lg flex flex-row items-start justify-center"
        >
          <img src={item.imageUrl} alt={item.title} className="w-1/3 h-auto rounded-md mr-6" />
          <div className="w-2/3">
            <h2 className="text-black font-bold text-2xl mb-4 text-center">{item.title}</h2>
            <div className="text-left">
              <p className="font-bold">Cause:</p>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                {item.cause.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="font-bold">Preventive Measures:</p>
              <ul className="list-decimal list-inside text-gray-800">
                {item.preventiveMeasures.map((measure, i) => (
                  <li key={i}>{measure}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MildewInfo;
