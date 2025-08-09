import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsSigningIn(true);
        setError('');

        try {
            // Aquí iría la lógica de autenticación con Firebase
            await signInWithEmailAndPassword(auth, email, password);
            onLoginSuccess();
            console.log("Iniciando sesión con:", email, password);

            // Simulación de éxito
            setTimeout(() => {
                alert("Inicio de sesión exitoso");
                setIsSigningIn(false);
            }, 1000);
        } catch (err) {
            console.error("Error al iniciar sesión:", err);
            setError("Error al iniciar sesión. Verifica el correo y la contraseña.");
            
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-conter bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-x1  w-fullmax-w-md">
                <h2 className="text-3x1 font-bold text-center">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="">
                        <label htmlFor="" className=""></label>
                        <input type="email" />
                    </div>
                    <div className="">
                        <label htmlFor="">Contraseña</label>
                        <input type="password" />
                    </div>
                    {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
                    <div className="">
                        <button>
                            {isSigningIn ? 'Iniciando sesión...' : 'Ingresar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}