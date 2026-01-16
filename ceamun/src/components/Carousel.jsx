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
        <article className="p-6 flex justify-center">
            {/* Contenedor relativo para poder encimar las imágenes */}
            <div className="relative w-full max-w-2xl h-[60vh] overflow-hidden rounded-2xl shadow-xl bg-black">
                {IMAGENES.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Foto ${index}`}
                        className={`
                            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                            ${selectedImage === index ? "opacity-100" : "opacity-0"}
                        `}
                    />
                ))}
                
                {/* Overlay opcional para ver el número de foto */}
                <div className="absolute bottom-4 right-4 bg-black/40 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {selectedImage + 1} / {IMAGENES.length}
                </div>
            </div>
        </article>
    );
}