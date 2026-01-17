import { FaArrowDown } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function MainSection() {
    const title = "CEAMUN".split("")
    const [responsive, setResponsive] = useState(false);
    useEffect(() => {
    const handleResize = () => {
        setResponsive(window.innerWidth < 620);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
}, []);

    return (
        <section id="inicio" class="h-screen bg-gradient-to-tl to-red-400 from-black/80 w-full flex flex-col items-center justify-center">
            <h1 className={`${responsive? 'text-[3rem]': 'title'} text-white flex gap-1`}>
                {title.map((value, index) => (
                    <span
                        key={index}
                        data-text={value}
                        className="inline-flex flex-col items-center hover:text-red-400 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
                    >
                        {value}
                    </span>
                ))}
            </h1>
            <p className="mt-4 text-center text-xl font-medium bg-gradient-to-r from-red-200 to-white bg-clip-text text-transparent">
                "Volando con alas de esfuerzo hacia el mañana"
            </p>
            <FaArrowDown className="scale-200 mt-10 text-white animate-bounce"/>
            <button className="mt-5 bg-white/80 text-red-400 p-4 font-medium rounded-2xl text-md
            cursor-pointer hover:scale-102 transition-all transition-300
            " onClick={()=> {
                document.getElementById('nosotros').scrollIntoView({behavior: 'smooth'})
            }}>Saber más de nosotros</button>
        </section>
    )
}