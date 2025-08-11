
const ServiceCard = ({ service, isAdmin, onEdit, onDelete }) => (
  <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
    <div className="p-6 text-center">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-4">
        {service.description}
      </p>
      <p className="text-indigo-600 font-bold text-lg mb-4">{service.price}</p>
      {/* Botones de administración, solo visibles si el usuario es admin */}
      {(
        isAdmin ? (
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => onEdit(service)}
              className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors shadow-md"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(service.id)}
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
            >
              Eliminar
            </button>
          </div>
        ) : (
          <a href="#contacto" className="w-full inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors shadow-md">
            Reservar
          </a>
        )
      )}
    </div>
  </div>
);

export default ServiceCard;