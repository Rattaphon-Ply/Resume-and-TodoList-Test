import { Link } from "react-router";

const EducationCard = ({ head, title, description, image, projectUrl }) => {

    const isExternal = projectUrl.startsWith("http");

    const CardContent = (
    <div className="block max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-gray-600">
        <h1 className="text-xl text-white font-bold mb-2 w-full break-words whitespace-normal">{head}</h1>
        <h3 className="text-md text-white font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300  w-full break-words whitespace-normal">{description}</p>
      </div>
    </div>
  );
    
  return isExternal ? (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    <Link to={projectUrl}>{CardContent}</Link>
  )
}
export default EducationCard