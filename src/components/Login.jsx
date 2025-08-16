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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-x1  w-fullmax-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
                
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Correo Electronico</label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="ejemplo@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">Contraseña</label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
                    <div className="flex items-center justify-between">
                        <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors w-full"
                        type="submit"
                        disabled={isSigningIn}
                        >
                            {isSigningIn ? 'Iniciando sesión...' : 'Ingresar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login