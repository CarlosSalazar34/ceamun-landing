import { useEffect, useState, useRef } from "react"

export default function VisionSection(){
    const [visible, setVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisible(true); // Se queda visible una vez que entra
        }, { threshold: 0.1 });

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            id="vision" 
            className="relative min-h-screen flex flex-col items-center justify-center bg-[url('assets/images/PHOTO-2026-01-15-23-37-28_2.jpg')] bg-cover bg-center bg-fixed p-6 md:p-20 overflow-hidden"
        >
            {/* Capa de superposición (Overlay) para mejorar legibilidad */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
                <h2 className={`text-6xl md:text-8xl mb-16 text-white/80 transition-all duration-1000`}>
                    VISIÓN
                </h2>
                
                <article 
                    ref={containerRef}
                    className="flex flex-col md:flex-row gap-10 items-stretch justify-center w-full"
                >
                    {/* Primer Cuadro */}
                    <div className={`group relative p-8 rounded-3xl bg-white/95 shadow-2xl transition-all duration-1000 transform flex-1 border-b-8 border-red-600
                        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                    >
                        <div className="absolute -top-6 left-8 bg-red-600 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <p className="text-md md:text-2xl leading-relaxed text-slate-800">
                            La visión de <span className="text-red-600 font-bold italic">CEAMUN </span>
                             la formación académica convencional; aspiramos a ser el epicentro donde la 
                             <span className="underline decoration-red-500/40">maestría intelectual</span> 
                             se encuentra con la cohesión humana. No entendemos la excelencia como un logro individual,
                              sino como un estándar colectivo que solo se alcanza cuando cada delegado se siente respaldado 
                              por una estructura de apoyo incondicional.
                        </p>
                    </div>

                    <div className={`group relative p-8 rounded-3xl bg-white/95 shadow-2xl transition-all duration-1000 transform flex-1 border-b-8 border-red-600
                        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                        style={{ transitionDelay: '100ms' }} 
                    >
                        <div className="absolute -top-6 left-8 bg-red-600 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <p className="text-xl md:text-2xl leading-relaxed text-slate-800">
                            Nuestro norte es consolidar una comunidad de líderes que vean en la <span className="text-red-600 font-bold italic">unión</span>
                             su mayor ventaja competitiva. En CEAMUN, proyectamos un futuro donde la lealtad y el trabajo en equipo 
                             sean el motor que impulse a la delegación del Colegio El Ángel a superar sus propios límites. Nuestra meta
                              no es solo liderar el circuito a través de premios, sino transformarlo mediante el ejemplo de una familia que
                               debate con rigor y convive con mística.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}