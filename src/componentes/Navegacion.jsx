import {Link} from "react-router-dom"
import { UserContext } from "./context/UserContext"
import { useContext } from "react"
import { logout } from "../api/api"
import {useForm} from "react-hook-form"
import { useNavigate, useLocation } from "react-router-dom"
export function Navegacion() {
  const navigate = useNavigate()
  const location = useLocation()
  const ruta = location.pathname; // RUTA ACTUAL EN LA URL
  const {register, handleSubmit} = useForm()
  const {usuariog} = useContext(UserContext) // para el rol del usuario

  const onSubmit = handleSubmit(busqueda=>{
      if (ruta.includes('/casos')) {
        navigate(`/casos/${busqueda.busqueda}`) // es busqueda.busqueda porque el input del form del nav que es la barra de busqueda, esta registrado como busqueda y al obj de esta funcion le puse tambien busqueda
      }
      if (ruta.includes('/clientes')) {
        navigate(`/clientes/${busqueda.busqueda}`)
      }
      if (ruta.includes('/usuarios')) {
        navigate(`/usuarios/${busqueda.busqueda}`)
      }
      if (ruta.includes('/categorias')) {
        navigate(`/categorias/${busqueda.busqueda}`)
      }
      
  })
    return(
        <div style={{paddingTop:"6rem"}}> {/* padding para separar los componentes del nav, porque se pegan */}
            <nav className="navbar navbar-dark bg-dark fixed-top">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <form className="d-flex me-2" role="search" onSubmit={onSubmit}>
                      <input className="form-control me-2" type="search" placeholder="buscar" aria-label="Search" {...register("busqueda",{required:false})}></input>
                      <button className="btn btn-primary" type="submit">Buscar</button>
                </form>
                <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">{usuariog.nombre1} {usuariog.apellido1} ({usuariog.rol})</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="/casos">Casos</Link>
                      </li>
                      {/* opcion con condicion para mostrar */}
                      {usuariog.rol == "admin" && 
                        <li className="nav-item">
                          <Link className="nav-link" to="/form5">Nuevo Caso</Link>
                        </li>
                      } 
                      {/* opcion con condicion para mostrar */}
                      {usuariog.rol == "admin" && 
                        <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Nuevo Registro
                         </a>
                         <ul className="dropdown-menu dropdown-menu-dark">
                           <li><Link className="dropdown-item" to="/form2">Crear Usuario</Link></li>
                           <li><Link className="dropdown-item" to="/form3">Crear Cliente</Link></li>
                           <li><Link className="dropdown-item" to="/form4">Crear Categoria</Link></li>
                         </ul>
                       </li>
                      }
                     
                      <li className="nav-item">
                        <Link className="nav-link" to="/usuarios">Usuarios</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/clientes">Clientes</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/categorias">Categorias</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/politica" target="_blank">Política de privacidad</Link>
                      </li>
                      <li className="nav-item" onClick={()=>{logout()}}>
                        <Link className="nav-link">Cerrar Sesión</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </nav>
        </div>
    )
}