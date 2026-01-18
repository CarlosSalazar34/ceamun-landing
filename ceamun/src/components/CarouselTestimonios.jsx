import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { User, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../owners/darla.jpg';
import img2 from '../owners/diego.jpg';
import img3 from '../owners/samantha.jpg';
import img4 from '../owners/maria.jpeg';
import img5 from '../owners/ricardo.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonios = [
    {
        id: 1,
        text: `CEAMUN fue lo primero que conocí al ingresar a la institución, y desde
    entonces ha sido una fuente de conocimiento y felicidad constante estos dos años,
    mi delegación se ha vuelto mi familia todo este tiempo y eso es lo que representa
    CEAMUN la unión, y valores compartidos que hacen de esta actividad algo mejor y
    mas allá de solo lo académico`,
        name: '-Diego Ojeda',
        cargo: 'Faculty Advisor 2025-2026',
        image: img2,
    },
    {
        id: 2,
        text: `Una delegación es crucial en el desarrollo de un delegado, ya que genera un sentido de 
        pertenencia, orgullo, lealtad y sobretodo te enseña a preocuparte por el bienestar del otro y no
         solo el tuyo. Cuando fui delegada me enfoqué mucho en superarme a mí misma y divertirme, pero como 
         Faculty y autoridad ahora mi prioridad es otra…Esta es buscar el bien común de todos los integrantes
        de CEAMUN y preservar el legado de excelencia. En este cambio está la diferencia. Si uno es autoridad,
        uno debe usar ese poder para servir a los demás, impulsarlos y dar ejemplo.`,
        name: '-Darla Andrade',
        cargo: 'Faculty Advisor 2025-2026',
        image: img1,
    },
    {
        id: 3,
        text: `Más allá de ser una simple delegación, aquí inicié con conocimientos básicos y hoy
        me enorgullece decir que me han formado hasta convertirme en el delegado que soy. Para mí, 
        CEAMUN siempre será ese lugar donde me siento escuchada y apoyada, manteniendo siempre la 
        responsabilidad como nuestro pilar fundamental. La delegación me enseñó que los problemas 
        van de la mano con el compañerismo, en donde cada debate son nuevas experiencias. Así mismo
         que somos una familia, para mí, la más linda.`,
        name: '-Samantha Gomes',
        cargo: 'Vice-secretaria general',
        image: img3,
    },
    {
        id: 4,
        text: `Siete años atrás, en 6to grado, entré a mi primer comité con una carpeta llena de dudas y muchísimo miedo. Hoy,
        como Secretaria General de CEAMUN 2026, miro hacia atrás y veo que este modelo no solo fue una actividad; fue donde crecí. 
        De esa niña que apenas se atrevía a hablar, a estar hoy aquí dando todo de mí por la delegación que me formó. Han sido seis 
        años de aprendizaje, esfuerzo y una pasión que, lejos de agotarse, hoy está más fuerte que nunca.
        Más allá de los debates y las resoluciones, lo que realmente me mantuvo aquí todo este tiempo fue la familia que encontré. `,
        name: '-Maria Isabella Castelo',
        cargo: 'Secretaría General',
        image: img4,
    },
    {
        id: 5,
        text: `Mun. Mun es una actividad exigente, intelectual y físicamente, que requiere disciplina y sacrificio. 
        Y, de lo más importante para que está actividad sea amena es poseer apoyo y dirección intelectual, es decir,
         una delegacion. En mi caso, mi delegacion, Ceamun, ha sido no solo un destacable apoyo para mí en esta actividad, 
         si no que también una familia, traspasando factores como edad, grado académico y el tiempo conociéndonos. Sin importar
        que, nunca cambiaría haber sido participe de Ceamun, ha sido una de mis experiencias más enriquecedoras y me formo como 
        la persona que soy hoy.`,
        name: '-Ricardo Marcano',
        cargo: 'Head Delegate',
        image: img5,
    },
];

export default function CarouselTestimonios() {
    const [activeId, setActiveId] = useState(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const toggleActive = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="max-w-4xl mx-auto px-5 relative">

            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                }}
            >
                {testimonios.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                        <SwiperSlide key={item.id} className="pb-12">
                            <div
                                onClick={() => toggleActive(item.id)}
                                className={`group bg-white p-8 rounded-lg shadow-xl border border-gray-100 text-center flex flex-col items-center min-h-[520px] justify-start transition-all duration-500 cursor-pointer
                ${isActive ? 'ring-2 ring-red-500 shadow-2xl' : ''}`}
                            >
                                {/* IMAGEN */}
                                <div
                                    className={`bg-red-50 rounded-full flex items-center justify-center mb-4 text-red-500 transition-all duration-500
                  ${isActive ? 'w-20 h-20' : 'w-60 h-60 group-hover:w-20 group-hover:h-20'}`}
                                >
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded-full h-full w-full object-cover shadow-md"
                                        />
                                    ) : (
                                        <User size={40} />
                                    )}
                                </div>

                                {/* NOMBRE Y CARGO */}
                                <div
                                    className={`transition-all duration-500 transform
                  ${isActive ? '-translate-y-4' : 'group-hover:-translate-y-4'}`}
                                >
                                    <h4 className="font-bold text-lg">{item.name}</h4>
                                    <span className="text-sm text-red-600 font-semibold">
                                        {item.cargo}
                                    </span>
                                </div>

                                {/* TEXTO */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isActive
                                            ? 'max-h-[300px] opacity-100 mt-2'
                                            : 'max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 group-hover:mt-2'
                                        }`}
                                >
                                    <p className="text-gray-600 italic text-sm px-2 border-t pt-4 mt-2">
                                        "{item.text}"
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* BOTONES DE NAVEGACIÓN */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    ref={prevRef}
                    className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition shadow-lg"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    ref={nextRef}
                    className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition shadow-lg"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
