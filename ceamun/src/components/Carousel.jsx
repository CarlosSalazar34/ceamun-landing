import { useEffect, useState } from "react";

const imagesModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,JPG,webp}', { eager: true });
const IMAGENES = Object.values(imagesModules).map((mod) => mod.default);

export default function Carousel() {
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImage((prev) => (prev === IMAGENES.length - 1 ? 0 : prev + 1));
        }, 3000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full min-h-[450px] flex items-center justify-center p-2">
            <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl bg-slate-200">
                
                {IMAGENES.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Foto ${index}`}
                        className={`
                            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                            ${selectedImage === index ? "opacity-100 z-10" : "opacity-0 z-0"}
                        `}
                    />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20"></div>

                <div className="absolute bottom-6 right-6 z-30 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-2xl text-sm font-medium border border-white/30 shadow-lg">
                    {selectedImage + 1} <span className="text-white/60 mx-1">/</span> {IMAGENES.length}
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                    {IMAGENES.map((_, i) => (
                        <div 
                            key={i}
                            className={`h-1.5 transition-all duration-300 rounded-full ${selectedImage === i ? "w-6 bg-red-500" : "w-1.5 bg-white/50"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}