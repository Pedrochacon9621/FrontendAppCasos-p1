import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export function ModalPrivacidad() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setVisible(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (!visible) return null;

  return createPortal(
    <div className="modal-backdrop-custom">
      <div className="modal-content-custom">
        <button
          onClick={() => setVisible(false)}
          className="modal-close-button"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <p>
          Este sistema es solo de prueba y no recopila datos reales ni con fines comerciales. Los formularios solicitan información básica como nombre, usuario y contraseña, pero no es obligatorio ingresar datos verdaderos.
        </p>
        <p>
          Se utilizan cookies técnicas para mantener la sesión activa y garantizar la seguridad, sin fines publicitarios ni de rastreo.
        </p>
        <p>
          <Link to="/politica" target="_blank">Click aquí para leer política de privacidad completa</Link>
        </p>
        <p className="text-dark">
          <strong>También puede acceder en el menú de la aplicación.</strong>
        </p>
      </div>
    </div>,
    document.body
  );
}
