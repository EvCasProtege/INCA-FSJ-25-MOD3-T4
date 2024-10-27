import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Hero } from "./Hero";
import { Cards } from "./Cards";
import bootcampService from "../../services/bootcams/bootcampService";

export const LandingPage = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCourses = async () => {
        try {
            setIsLoading(true);
            const response = await bootcampService.getBootcamps();
            setCourses(response); // Asume que response.data contiene la lista de cursos
        } catch (err) {
            setError("Error al obtener los Bootcamps!!");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
                <Hero />
                <section id="courses" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Cursos</h2>
                        {isLoading ? (
                            <p className="text-center">Cargando cursos...</p>
                        ) : error ? (
                            <p className="text-center text-red-600">{error}</p>
                        ) : (
                            <div className="grid md:grid-cols-3 gap-8">
                                {courses.map((course) => (
                                    <Cards key={course.id} title={course.name} description={course.description} technologies={course.technologies} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};
