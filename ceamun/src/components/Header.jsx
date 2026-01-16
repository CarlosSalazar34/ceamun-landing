export default function Header() {
    const options = ["¿Quienes somos?", "Vision", "Nuestros Exitos", "Contactanos"]
    return (
        <header className="bg-white flex items-center justify-evenly sticky top-0 z-10 shadow-lg">
            {
                options.map((value, index) => (
                    <div
                        key={index}
                        className="header-items text-lg font-medium p-5 text-black/60 cursor-pointer transition-transform duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <span className="subrayado">{value}</span>
                    </div>
                ))
            }
        </header>
    )
}