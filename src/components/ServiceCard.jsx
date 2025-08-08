const ServiceCard = ({ service }) => (
  <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
    <div className="p-6 text-center">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-4">
        {service.description}
      </p>
      <p className="text-indigo-600 font-bold text-lg mb-4">{service.price}</p>
      <a href="#contacto" className="w-full inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors shadow-md">
        Reservar
      </a>
    </div>
  </div>
);

export default ServiceCard;