import tecAcademyLogo from "../../assets/logo/tecacademy.png";

export const Cards = ({ title, description, technologies }) => {
    return (
        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <img src={tecAcademyLogo} alt={title} className="w-full object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="mb-4">{description}</p>
                <div className="mb-4">
                    {technologies.map((technology, index) => (
                        <span key={index} className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                            {technology}
                        </span>
                    ))}
                </div>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Más Info</button>
            </div>
        </div>
    );
};
