import { useForm } from "react-hook-form";
import { login, rolUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalPrivacidad } from "./ModalPrivacidad";

export function Form1() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(true); // ← estado de carga inicial

  useEffect(() => {
    async function verificarLogin() {
      try {
        const res = await rolUser();
        if (res) {
          navigate("/casos");
          window.location.reload();
        }
      } catch (error) {
        console.log("No autenticado");
      } finally {
        setLoading(false); // ← termina la verificación inicial
      }
    }
    verificarLogin();
  }, [navigate]);

  const onSubmit = handleSubmit(async (usuario) => {
    setLoading(true); // ← activa el modal al enviar
    try {
      const loger = await login(usuario);
      if (loger) {
        navigate("/casos");
        window.location.reload();
      }
    } catch (error) {
      alert(`Usuario o contraseña incorrecta. Detalles: ${error.message}`);
      console.error("Error durante el inicio de sesión:", error);
      setLoading(false); // ← desactiva el modal si hay error
    }
  });

  if (loading) {
    return (
      <div className="modal-loading">
        <div className="modal-content">
          <p>Verificando sesión...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-dark text-light d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="bg-secondary p-5 rounded" style={{ width: "30rem" }}>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="user" className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control shadow"
              id="user"
              {...register("user", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="clave" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control shadow-lg"
              id="clave"
              {...register("clave", { required: true })}
            />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
      </div>

      {/* Modal de privacidad persistente */}
      <ModalPrivacidad />
    </div>
  );
}

