import {Link} from "react-router-dom"

export function ModalPrivacidad({ modalRef }) {
  return (
    <div className="modal fade" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark">Política de Privacidad</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-dark">Este sistema es solo de prueba y no recopila datos reales ni con fines comerciales. Los formularios solicitan información básica como nombre, usuario y contraseña, pero no es obligatorio ingresar datos verdaderos. Se utilizan cookies técnicas para mantener la sesión activa y garantizar la seguridad, sin fines publicitarios ni de rastreo.</p> <Link to="/politica" target="_blank">Click aqui para leer política de privacidad completa</Link><p className="text-dark"><strong>Tambien puede acceder en el menú de la aplicación</strong></p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {const modal = bootstrap.Modal.getInstance(modalRef.current); modal.hide();}}>
              Cerrar
            </button>
            {/*<button type="button" className="btn btn-primary">Aceptar</button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
