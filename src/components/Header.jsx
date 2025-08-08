const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-xl font-bold text-gray-800">Uñas de Ensueño</a>
        <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-indigo-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-indigo-600 transition-colors">Servicios</a>
            <a href="#portafolio" className="text-gray-600 hover:text-indigo-600 transition-colors">Portafolio</a>
            <a href="#contacto" className="text-gray-600 hover:text-indigo-600 transition-colors">contacto</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;