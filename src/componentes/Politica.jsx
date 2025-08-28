export function Politica() {
    return(
        <div className="mx-auto p-5 rounded" style = {{ background:"rgb(230,230,230)", width:"70%", margin:"0 auto", }}>
            <h1>🛡️ Política de Privacidad</h1>
            <p><strong>Última actualización:</strong> [2025]</p>

            <p>Este proyecto es una iniciativa personal con fines exclusivamente demostrativos. Su propósito es mostrar las capacidades técnicas del desarrollador y no está destinado a un uso comercial ni a la recopilación de datos reales de usuarios.</p>

            <h2>📋 Información que se solicita</h2>
            <p>El sistema incluye formularios que solicitan los siguientes datos:</p>
            <ul>
                <li>Nombre</li>
                <li>Apellido</li>
                <li>Cédula</li>
                <li>Nombre de usuario</li>
                <li>Contraseña</li>
                <li>Tipo de usuario</li>
            </ul>
            <p><strong>Importante:</strong> Los usuarios no están obligados a proporcionar información real. Todos los datos ingresados son utilizados únicamente para fines de prueba y simulación dentro del sistema.</p>

            <h2>🍪 Uso de cookies</h2>
            <p>Este sistema utiliza cookies para garantizar el funcionamiento básico de la plataforma. En particular:</p>
            <ul>
                <li><strong>Cookie de sesión:</strong> Se emplea para mantener la sesión iniciada del usuario mientras navega por el sistema.</li>
                <li><strong>Cookies predeterminadas de Django:</strong> El sistema puede establecer cookies automáticamente generadas por el framework Django, como:
                <ul>
                    <li><code>sessionid</code>: identifica la sesión activa del usuario.</li>
                    <li><code>csrftoken</code>: protege contra ataques de tipo CSRF (Cross-Site Request Forgery).</li>
                </ul>
                </li>
                <li><strong>Cookies relacionadas con CORS:</strong> Dependiendo de la configuración del servidor y del entorno de prueba, pueden establecerse cookies para gestionar el intercambio de recursos entre distintos orígenes.</li>
            </ul>
            <p><strong>Importante:</strong> Estas cookies no se utilizan para rastrear al usuario ni para fines publicitarios. Su único propósito es garantizar la seguridad y funcionalidad del sistema de prueba.</p>

            <h2>🔐 Almacenamiento y seguridad</h2>
            <ul>
                <li>Los datos ingresados se almacenan únicamente en el entorno de prueba del sistema.</li>
                <li>No se comparten con terceros ni se utilizan para ningún propósito fuera del funcionamiento básico del sistema.</li>
                <li>Aunque se trata de un entorno de prueba, se recomienda no ingresar información personal real.</li>
            </ul>

            <h2>👤 Responsabilidad del usuario</h2>
            <p>Al utilizar este sistema, el usuario acepta que se trata de una plataforma de prueba y que cualquier dato proporcionado será tratado como ficticio y con fines demostrativos.</p>
        </div>
    )
}