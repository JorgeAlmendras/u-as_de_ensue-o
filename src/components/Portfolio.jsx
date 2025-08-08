const Portfolio = () => (
  <section id="portafolio" className="py-16 md:py-24 bg-gray-100">
    <div className="container mx-auto px-6 max-w-7xl">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">Portafolio de Trabajos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(4).fill(null).map((_, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={`https://placehold.co/600x400/C1C9E0/64748B?text=Foto+${index + 1}`} alt={`Trabajo de uñas ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;