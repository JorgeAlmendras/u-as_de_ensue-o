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
                
            </div>

            {/* Listado de servicios */}
            <Services 
            servicesData={services}
            isAdmin={true}
            onEdit={(services) => {
                window.scrollTo({ top:0, behavior: 'smooth' });
                setEditingService(services);
            }}
            onDelete={handleDeleteService}
            />

        </div>
    )
}
