import CarouselTestimonios from "./CarouselTestimonios";

export default function Testimonios(){
    return (
        <section id="testimonios" className="h-auto pt-10 bg-slate-100">
            <h2 className="text-6xl md:text-8xl font-medium mb-16 flex items-center justify-center text-black/80">
                Testimonios
            </h2>
            <CarouselTestimonios/>
        </section>
    )
}