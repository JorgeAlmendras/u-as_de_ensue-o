import ServiceCard from './ServiceCard';

const Services = () => {
  const servicesData = [
    { title: "Semipermanente", description: "Ideal para un look duradero y brillante de hasta 21 días.", price: "Desde $XXXX", image: "https://placehold.co/400x250/C1C9E0/64748B?text=Semipermanente" },
    { title: "Softgel", description: "Extensiones ligeras y flexibles para una apariencia natural.", price: "Desde $XXXX", image: "https://placehold.co/400x250/C1C9E0/64748B?text=Softgel" },
    { title: "Sip", description: "Técnica innovadora de inmersión para uñas fuertes y resistentes.", price: "Desde $XXXX", image: "https://placehold.co/400x250/C1C9E0/64748B?text=Sip" },
    { title: "Kapping", description: "Refuerzo de uñas naturales para evitar roturas y descascarillado.", price: "Desde $XXXX", image: "https://placehold.co/400x250/C1C9E0/64748B?text=Kapping" },
    { title: "Esculpidas", description: "Extensiones personalizadas que se adaptan a la forma de cada uña.", price: "Desde $XXXX", image: "https://placehold.co/400x250/C1C9E0/64748B?text=Esculpidas" },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">Nuestros Servicios a Domicilio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;