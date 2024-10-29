import { useState, useEffect, useRef, useContext } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import tecAcademyLogo from "../../assets/logo/tecacademy.png";
import { BootcampContext } from "../../provider/BootcampContext";

export const BootcampCard = ({ id, title, description, technologies }) => {
    const [isExpandMenu, setIsExpandMenu] = useState(false);
    const menuRef = useRef(null);

    const navigate = useNavigate();

    const { deleteBootcamp } = useContext(BootcampContext);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsExpandMenu(!isExpandMenu);
    };

    const handleEdit = (id) => {
        navigate(`/edit-bootcamp/${id}`);
    };

    const handleDelete = async (id) => {
        deleteBootcamp(id);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsExpandMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-gray-700 rounded-lg overflow-visible shadow-lg">
            <img src={tecAcademyLogo} alt={title} className="w-full object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="mb-4">{description}</p>
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-grow">
                        {technologies.map((technology, index) => (
                            <span key={index} className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                {technology}
                            </span>
                        ))}
                    </div>
                    <div className="relative ml-2" ref={menuRef}>
                        <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none p-1" aria-label="Mas opciones">
                            <AiOutlineMore size={24} />
                        </button>
                        {isExpandMenu && (
                            <div className="absolute right-1 mt-1 w-48 bg-gray-800 rounded-md overflow-hidden shadow-xl z-20">
                                <button
                                    onClick={() => {
                                        handleEdit(id);
                                        setIsExpandMenu(false);
                                    }}
                                    className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left"
                                >
                                    Actualizar bootcamp
                                </button>
                                <button
                                    onClick={() => {
                                        handleDelete(id);
                                        setIsExpandMenu(false);
                                    }}
                                    className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left"
                                >
                                    Eliminar bootcamp
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
