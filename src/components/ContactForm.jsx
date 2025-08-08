const ContactForm = () => (
  <section id="contacto" className="py-16 md:py-24 bg-white text-center">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Agenda tu Cita</h2>
      <p className="text-lg md:text-xl text-gray-600 mb-10">
        Reserva tu turno de manera rápida y sencilla. ¡Te esperamos!
      </p>
      {/* Enlace de WhatsApp - Reemplaza '1234567890' con el número de teléfono real */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full hover:bg-green-600 transition-colors shadow-lg text-lg inline-flex items-center">
        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2.04c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96c5.5 0 9.96-4.46 9.96-9.96s-4.46-9.96-9.96-9.96zm0 18.25c-4.57 0-8.29-3.72-8.29-8.29 0-4.57 3.72-8.29 8.29-8.29 4.57 0 8.29 3.72 8.29 8.29 0 4.57-3.72 8.29-8.29 8.29zm2.46-5.88l-.94.75c-1.39 1.12-3.13 1.74-4.83 1.74-1.7 0-3.44-.62-4.83-1.74l-.94-.75c-.27-.22-.32-.61-.13-.9l.71-1.07c.18-.27.57-.32.85-.12l.62.47c1.39 1.12 3.13 1.74 4.83 1.74s3.44-.62 4.83-1.74l.62-.47c.27-.22.66-.18.85.12l.71 1.07c.19.29.14.68-.13.9z"/></svg>
        Contactar por WhatsApp
      </a>
    </div>
  </section>
);

export default ContactForm;