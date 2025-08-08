const Hero = () => (
  <section id="inicio" className="hero-section min-h-screen flex items-center justify-center text-center bg-gray-200" style={{ backgroundImage: "url('https://placehold.co/1920x1080/D9D9E0/6B7280?text=Tu+imagen+de+fondo+aquí')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="bg-white bg-opacity-90 rounded-2xl p-8 md:p-16 shadow-xl max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Uñas a Domicilio
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        Belleza y cuidado profesional en la comodidad de tu hogar.
      </p>
      <a href="#servicios" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors shadow-lg">
        Ver Servicios
      </a>
    </div>
  </section>
);

export default Hero;