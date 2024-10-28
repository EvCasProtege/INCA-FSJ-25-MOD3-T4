import { UserComponent } from "../UserComponent";

export const Hero = () => {
    return (
        <>
            <section id="hero" className="text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-teal-400 mb-4">Desbloquea tu Potencial</h2>
                    <p className="text-xl md:text-2xl mb-8">Aprende las habilidades Tecnológicas del mañana</p>
                    <p className="text-lg mb-8">Rápido, Flexible e Innovador</p>
                </div>
            </section>
            <UserComponent />
        </>
    );
};
