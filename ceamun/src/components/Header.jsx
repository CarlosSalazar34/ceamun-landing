export default function Header() {
    const options = [
        { name: "¿Quienes somos?", id: 'about-us'},
         {name: "Vision", id: 'vision'},
         {name: 'Testimonios', id: 'testimonios'},
         {name: 'Contactanos', id: 'contact'}
         ]
    return (
        <header className="bg-white flex items-center justify-evenly sticky top-0 z-10 shadow-lg">
            {
                options.map((value, index) => (
                    <div
                        key={index}
                        className="header-items text-lg font-medium p-5 text-black/60 cursor-pointer transition-transform duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={()=>{
                            document.getElementById(value.id).scrollIntoView({behavior: 'smooth'})
                        }}
                    >
                        <span className="subrayado">{value.name}</span>
                    </div>
                ))
            }
        </header>
    )
}