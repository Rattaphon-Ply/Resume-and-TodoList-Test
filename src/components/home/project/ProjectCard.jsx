

const ProjectCard = ({ title, description, image, projectUrl, onMoreClick }) => {

  const isExternal = projectUrl.startsWith("http");

  const CardContent = (
    <div className="block max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-gray-600">
        <h2 className="text-3xl text-white font-semibold mb-2">{title}</h2>

        <p className="text-white text-sm w-full truncate">
          {typeof description === "string"
            ? description
            : Array.isArray(description)
            ? description.join(" • ")
            : typeof description === "object"
            ? Object.values(description).flat().join(" • ") 
            : ""}
        </p>
        
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
export default ProjectCard