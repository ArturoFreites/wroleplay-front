import axios from 'axios';
import { useState } from 'react';

function RegisterUser() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://tudominio.com/api/xenforo/register', formData);

            if (response.status === 200) {
                // Usuario registrado con éxito, puedes redirigir o realizar otras acciones aquí.
                console.log('Usuario registrado con éxito:', response.data);
            }
        } catch (error) {
            // Maneja los errores de registro aquí.
            console.error('Error al registrar el usuario:', error);
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de usuario:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Correo electrónico:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                {/* Agrega otros campos de registro aquí */}
                <div>
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterUser;