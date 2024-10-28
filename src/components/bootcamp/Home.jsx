import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../landing/Navbar";
import { Footer } from "../landing/Footer";
import { BootcampContext } from "../../provider/BootcampContext";
import { UserComponent } from "../UserComponent";
import { BootcampCard } from "./BootcampCard";

export const Home = () => {
    const navigate = useNavigate();
    const { bootcamps } = useContext(BootcampContext);

    const activeBootcamps = bootcamps.filter((bootcamp) => bootcamp.active);

    const handleRegisterClick = () => {
        navigate("/registro");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <UserComponent />
            <section id="bootcamps" className="py-20 bg-gray-800">
                <div className="container mx-auto px-4">
                    <button onClick={handleRegisterClick} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        Crear Bootcamp
                    </button>
                    <h2 className="text-3xl font-bold text-center mb-12">Bootcamps activos</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {activeBootcamps.length > 0 ? (
                            activeBootcamps.map((bootcamp) => <BootcampCard key={bootcamp.id} id={bootcamp.id} title={bootcamp.name} description={bootcamp.description} technologies={bootcamp.technologies} />)
                        ) : (
                            <p className="text-center text-white">No hay bootcamps disponibles.</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};
