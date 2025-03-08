import MaizeDiseaseDescription from './MaizeDescription';

const MaizeDisease = () => {
  return (
    <div className="p-4 flex justify-center items-center flex-col">
      {MaizeDiseaseDescription.map((item, index) => (
        <div
          key={index}
          className="bg-gray-300 border border-blue-500 rounded-md p-4 mb-4 h-52 w-3/4"
        >
          <h2 className="text-green-600 font-bold text-lg mb-2">{item.title}</h2>
          <p className="text-black">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MaizeDisease;