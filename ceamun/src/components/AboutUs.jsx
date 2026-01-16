import Carousel from "./Carousel";

export default function AboutUs() {
    return (
        <section id="nosotros" className="min-h-screen bg-slate-50 py-16 px-6 md:px-12">
            <h2 className="text-6xl md:text-8xl font-medium mb-16 flex items-center justify-center text-black/80">
                Nosotros
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <article className="p-8 border-2 rounded-3xl border-red-400 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-center">
                    <h3 className="text-4xl font-bold text-red-500 mb-6">
                        ¿Quiénes somos?
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                        La delegación <span className="font-semibold text-red-600">CEAMUN</span> es mucho más que un equipo de debate; somos el corazón del Colegio El Ángel volcado a la arena diplomática intercolegial.
                        Nos definimos como una familia de delegados unidos por una lealtad inquebrantable y el deseo compartido de superación.
                    </p>
                    <p className="text-slate-700 text-lg leading-relaxed mt-4">
                        Nuestra visión trasciende las aulas: trabajamos para formar integralmente a nuestros integrantes. Este vínculo de hermandad es el motor que nos impulsa a alcanzar una meta histórica: organizar el mejor modelo externo que CEAMUN haya visto jamás.
                    </p>
                </article>

                <Carousel />
            </div>
        </section>
    );
}