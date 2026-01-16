import Carousel from "./Carousel";

export default function AboutUs() {
    return (
        <section id="about-us" className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10 bg-white text-white">
            <article className="p-6 border-4 rounded-2xl border-red-400 bg-white/5 hover:bg-white/10 transition-colors h-[60vh]">
                <h2 className="text-5xl font-medium text-red-400 mb-4">¿Quiénes somos?</h2>
                <p className="text-black/80 leading-relaxed">
                    Buscamos formar líderes con capacidad crítica y diplomática, 
                    preparando a los jóvenes para los retos del mañana con esfuerzo y dedicación.
                </p>
            </article>
            <Carousel/>
        </section>
    )
}