import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import {  User } from 'lucide-react'; 
import img1 from '../owners/darla.jpg';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonios = [
  {
    id: 1,
    text: `Lo que realmente hace especial a CEAMUN es su grupo humano. 
    Es admirable ver cómo combinan su preparación con una actitud tan positiva y
    profesional. No solo destacan por su capacidad de debate, sino por su compañerismo 
    y el respeto que muestran hacia todos. Son personas comprometidas, educadas y, sobre 
    todo, un ejemplo de cómo trabajar en equipo con sencillez.`,
    name: '-Sahara Parilli',
    cargo: 'Vice secretaria General VAMUN 2025',
    image: null
  },
  {
    id: 2,
    text: '',
    name: '-Darla Andrade',
    cargo: '',
    image: img1
  }
];

export default function CarouselTestimonios() {
  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 }, 
        }}
      >
        {testimonios.map((item) => (
          <SwiperSlide key={item.id} className="pb-12"> {/* Añadido padding abajo para que no choque con los puntos */}
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 text-center flex flex-col items-center">
              
              {/* 2. Contenedor del Icono */}
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 text-red-500">
                <User size={40} />
              </div>

              <p className="text-gray-600 italic mb-4">"{item.text}"</p>
              <h4 className="font-bold text-lg">{item.name}</h4>
              <span className="text-sm text-red-600 font-semibold">{item.cargo}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}