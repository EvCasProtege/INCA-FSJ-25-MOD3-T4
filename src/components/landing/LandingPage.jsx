import { useContext } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Cards } from "./Cards";
import { Footer } from "./Footer";
import { BootcampContext } from "../../provider/BootcampContext";

export const LandingPage = () => {
    const { bootcamps } = useContext(BootcampContext);

    const activeBootcamps = bootcamps.filter((bootcamp) => bootcamp.active);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
                <Hero />
                <section id="bootcamps" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Bootcamps disponibles</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {activeBootcamps.length > 0 ? (
                                activeBootcamps.map((bootcamp) => <Cards key={bootcamp.id} title={bootcamp.name} description={bootcamp.description} technologies={bootcamp.technologies} />)
                            ) : (
                                <p className="text-center text-white ">No hay bootcamps disponibles...</p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
