import { useState } from "react";
import { Send, MessageSquare, Phone, User as UserIcon } from "lucide-react";

export default function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const whatsappNumber = "584242355731"; 

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hola, soy ${name || "(sin nombre)"}.\n\nMensaje: ${message || "(sin mensaje)"}.\n\nTeléfono: ${phone || "(no proporcionado)"}`;
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section id="contacto" className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100 mb-10 mt-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Contacto</h2>
                <div className="h-1 w-20 bg-red-600 mx-auto mt-2 rounded-full"></div>
                <p className="text-gray-500 mt-4 italic text-sm">
                    ¿Quieres formar parte de nuestro equipo? ¡Escríbenos directamente a nuestro WhatsApp!
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo Nombre */}
                <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <UserIcon size={16} className="mr-2 text-red-600" /> Nombre
                    </label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre completo"
                        className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50/50 focus:bg-white"
                    />
                </div>

                {/* Campo Teléfono */}
                <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <Phone size={16} className="mr-2 text-red-600" /> Teléfono
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej: +58 424 0000000"
                        className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50/50 focus:bg-white"
                    />
                </div>

                {/* Campo Mensaje */}
                <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <MessageSquare size={16} className="mr-2 text-red-600" /> Mensaje
                    </label>
                    <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="¿En qué podemos ayudarte?"
                        rows={4}
                        className="w-full border-gray-200 border rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all bg-gray-50/50 focus:bg-white"
                    />
                </div>

                {/* Botón de envío */}
                <button
                    type="submit"
                    className="group w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-200 transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
                >
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Enviar a WhatsApp</span>
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                    Al hacer clic, se abrirá la aplicación de WhatsApp en tu dispositivo.
                </p>
            </form>
        </section>
    );
}