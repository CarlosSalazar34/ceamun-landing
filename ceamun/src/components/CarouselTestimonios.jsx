import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { User } from 'lucide-react';
import img1 from '../owners/darla.jpg';
import img2 from '../owners/diego.jpg';
import img3 from '../owners/samantha.jpg';
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
        image: img2
    },
    {
        id: 2,
        text: `Si MUN, solo es ir a delegar a modelos y ganar,
        porque son necesarias las delegaciones? Fácil, porque MUN no es solo eso..
        Una delegación es crucial en el desarrollo de un delegado, ya que genera un sentido
        de pertenencia, orgullo, lealtad y sobretodo te enseña a preocuparte por el bienestar 
        del otro y no solo el tuyo. Cuando fui delegada me enfoqué mucho en superarme a mí misma
         y divertirme, pero como Faculty y autoridad ahora mi prioridad es otra…Esta es buscar 
         el bien común de todos los integrantes de CEAMUN y preservar el legado de excelencia.
        En este cambio está la diferencia. Tener un cargo en MUN no está para hacerte la vida más fácil,
        imponerse o pasar por encima de las normas, en realidad es todo lo contrario. Si uno es autoridad, 
        uno debe usar ese poder para servir a los demás, impulsarlos y dar ejemplo.  
        Por esto…CEAMUN como delegada me enseñó disciplina y resiliencia, pero como persona me enseñó lealtad, amistad y como servir a los demás.`,
        name: '-Darla Andrade',
        cargo: 'Faculty Advisor 2025-2026',
        image: img1
    },
    {
        id: 3,
        text: 'Ceamun me cambio la vida',
        name: '-Samantha Gomes',
        cargo: 'Vice-secretaria general',
        image: img3
    }
];

export default function CarouselTestimonios() {
    return (
        <div className="max-w-4xl mx-auto">
            <Swiper
                // modules={[Pagination, Autoplay]}
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                }}
            >
                {testimonios.map((item) => (
                    <SwiperSlide key={item.id} className="pb-12">
                        {/* Cambiamos justify-center por justify-start y añadimos un padding superior fijo */}
                        <div className="group bg-white p-8 rounded-lg shadow-xl border border-gray-100 text-center flex flex-col justify-center items-center min-h-[500px] justify-start transition-all duration-500">

                            {/* IMAGEN: Usamos scale en lugar de h-10 para que el contenedor mantenga su espacio original */}
                            <div className="w-60 h-60 bg-red-50 rounded-full flex items-center justify-center mb-4 text-red-500 transition-all duration-500 transform group-hover:w-15 group-hover:h-15 origin-center">
                                {item.image ? (
                                    <img src={item.image} alt={item.name} className='rounded-full h-full w-full object-cover shadow-md' />
                                ) : (
                                    <User size={40} />
                                )}
                            </div>

                            {/* NOMBRE Y CARGO: Movimiento sutil hacia arriba */}
                            <div className="transition-all duration-500 transform group-hover:-translate-y-4">
                                <h4 className="font-bold text-lg">{item.name}</h4>
                                <span className="text-sm text-red-600 font-semibold">{item.cargo}</span>
                            </div>

                            <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[250px] group-hover:opacity-100 group-hover:mt-2">
                                <p className="text-gray-600 italic text-sm px-2 border-t pt-4 mt-2">
                                    "{item.text}"
                                </p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}