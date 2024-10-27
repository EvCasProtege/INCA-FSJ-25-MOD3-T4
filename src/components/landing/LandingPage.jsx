import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Hero } from "./Hero";
import { Cards } from "./Cards";
import bootcampService from "../../services/bootcams/bootcampService";

export const LandingPage = () => {
    const [bootcamps, setBootcamps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBootcamps = async () => {
        try {
            setIsLoading(true);
            const response = await bootcampService.getBootcamps();
            setBootcamps(response); // Asume que response.data contiene la lista de cursos
        } catch (err) {
            setError("Error al obtener los Bootcamps!!");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBootcamps();
    }, []);

    const activeBootcamps = bootcamps.filter(bootcamp => bootcamp.active);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
                <Hero />
                <section id="bootcamps" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Cursos</h2>
                        {isLoading ? (
                            <p className="text-center">Cargando cursos...</p>
                        ) : error ? (
                            <p className="text-center text-red-600">{error}</p>
                        ) : (
                            <div className="grid md:grid-cols-3 gap-8">
                                {activeBootcamps.map((bootcamps) => (
                                    <Cards key={bootcamps.id} title={bootcamps.name} description={bootcamps.description} technologies={bootcamps.technologies} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};
