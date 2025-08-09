import { addDoc, collection, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";

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
        <></>
    )
}
