import { useForm } from "react-hook-form";
import { login, rolUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ModalPrivacidad } from "./ModalPrivacidad";

export function Form1() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    async function verificarLogin() {
      const login = await rolUser();
      if (login) {
        navigate("/casos");
        window.location.reload();
      }
    }
    verificarLogin();
  }, []);

  const onSubmit = handleSubmit(async (usuario) => {
    try {
      const loger = await login(usuario);
      if (loger) {
        navigate("/casos");
        window.location.reload();
      }
    } catch (error) {
      alert(`Usuario o contraseña incorrecta. Detalles: ${error.message}`);
      console.error("Error durante el inicio de sesión:", error);
    }
  });

  return (
    <div
      className="bg-dark text-light d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="bg-secondary p-5 rounded" style={{ width: "30rem" }}>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="user" className="form-label">Usuario</label>
            <input type="text" className="form-control shadow" id="user" {...register("user", { required: true })}/>
          </div>
          <div className="mb-3">
            <label htmlFor="clave" className="form-label">Contraseña</label>
            <input type="password" className="form-control shadow-lg" id="clave" {...register("clave", { required: true })}/>
          </div>
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
      </div>

      {/* Modal sin ref */}
      <ModalPrivacidad />
    </div>
  );
}
