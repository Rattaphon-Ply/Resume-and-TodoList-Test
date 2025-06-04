const ExperienceCard = ({ head, title, description, image, onMoreClick}) => {

    const CardContent = (
    <div className="block max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-gray-600">
        <h1 className="text-3xl text-white font-semibold mb-2">{head}</h1>
        <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
        <p className="text-white text-sm w-ful truncate">{description}</p>
        <button
          className="mt-2 px-4 py-2 bg-[#3498DB] text-white rounded hover:bg-blue-600"
          onClick={onMoreClick}
        >
          แสดงเพิ่มเติม
        </button>
      </div>
    </div>
  );
    
  return (
    <div>{CardContent}</div>
  )
}
export default ExperienceCard