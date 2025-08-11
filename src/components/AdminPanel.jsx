import { addDoc, collection, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import Services from "./Services";

const AdminPanel = ({ services, setServices }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [newService, setNewService] = useState({ title: '', description: '', price: 0, image: '' });
    const [ismessage, setIsMessage] = useState('');

    const fetchServices = async () => {
        try {
            const servicesColection = collection(db, 'services');
            const servicesSnapshot = await getDocs(servicesColection);
            const servicesList = servicesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setServices(servicesList);
            console.log("Servicios obtenidos:", servicesList);
        } catch (error) {
            console.error("Error al obtener los servicios:", error);
        }
    };

    const handleAddService = async (e) => {
        e.preventDefault();

        try {
            // Aquí iría la lógica para agregar un nuevo servicio a Firestore
            await addDoc(collection(db, 'services'), newService);
            setNewService({ title: '', description: '', price: 0, image: ''});
            setIsAdding(false);
            setIsMessage("Servicio agregado exitosamente");

            fetchServices(); // Refrescar la lista de servicios

        } catch (err) {
            console.error("Error al agregar el servicio:", err);
            setIsMessage("Error al agregar el servicio. Inténtalo de nuevo.");
        }
    };

    const handleUpdateService = async (e) => {
        e.preventDefault();

        try {
            // Aquí iría la lógica para actualizar el servicio en Firestore
            const serviceRef = doc(db, 'services', editingService.id);
            await updateDoc(serviceRef, newService);
            setEditingService(null);
            setIsMessage("Servicio actualizado exitosamente");

            fetchServices(); // Refrescar la lista de servicios

        } catch (err) {
            console.error("Error al actualizar el servicio:", err);
            setIsMessage("Error al actualizar el servicio. Inténtalo de nuevo.");
        }
    };

    const handleDeleteService = async (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este servicio?")) {
            try {
                // Aquí iría la lógica para eliminar el servicio de Firestore
                const serviceRef = doc(db, 'services', id);
                await deleteDoc(serviceRef);
                setIsMessage("Servicio eliminado exitosamente");

                fetchServices(); // Refrescar la lista de servicios

            } catch (err) {
                console.error("Error al eliminar el servicio:", err);
                setIsMessage("Error al eliminar el servicio. Inténtalo de nuevo.");
            }
        }
    };

    const handleLogout = async () => {
        try {
            // Aquí iría la lógica para cerrar sesión
            await signOut(auth);
            console.log("Sesión cerrada exitosamente");
        } catch (err) {
            console.error("Error al cerrar sesión:", err);
        }
    };

    useEffect(() => {
        if(editingService) {
            setNewService({
                title: editingService.title,
                description: editingService.description,
                price: editingService.price,
                image: editingService.image
            });
        }
    }, [editingService]);

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Panel de Administración</h1>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Cerrar Sesión
                </button>
            </div>

            { ismessage && (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                    {ismessage}
                </div>
            )}

            {/* Formulario para agregar/editar */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {editingService ? 'Editar Servicio' : 'Agregar nuevo servivio'}
                </h2>

                <form action="" onSubmit={ editingService ? handleUpdateService : handleAddService }>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Titulo</label>
                        <input 
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e) => setNewService({...newService, title: e.target.value})}
                        required
                         />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
                        <textarea
                        className="w-full px-3 py-2 border rounded-lg"
                        value={newService.description}
                        onChange={ (e) => setNewService({ ...newService, description: e.target.value})}
                        required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">Precio</label>
                        <input 
                        type="number"
                        className="w-full px-3 py-2 border rounded-lg"
                        value={newService.price}
                        onChange={ (e) => setNewService({ ...newService, price: e.target.value })}
                        required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">URL de imagen</label>
                        <input type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        value={ newService.image }
                        onChange={ (e) => setServices({ ...newService, image: e.target.value })}
                        required
                         />
                    </div>
                    <div className="flex space-x-4">
                        <button 
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
                        >
                            { editingService ? 'Guardar Cambios' : 'Agregar Servicio'}
                        </button>
                        { editingService && (
                            <button 
                            type="button"
                            onClick={ () => {
                                setEditingService = null;
                                setNewService({
                                    title:'',
                                    description: '',
                                    price: '',
                                    image: ''
                                });
                            }}
                            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full transition-colors"
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Listado de servicios */}
            <Services 
            servicesData={services}
            isAdmin={true}
            onEdit={(service) => {
                window.scrollTo({ top:0, behavior: 'smooth' });
                setEditingService(service);
            }}
            onDelete={handleDeleteService}
            />

        </div>
    )
}

export default AdminPanel