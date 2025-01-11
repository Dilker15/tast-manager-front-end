import { NavLink,Link } from "react-router-dom"
import '../styles/landing.css'

export function NavBarPageLanding(){
    return (<>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                            <li className="nav-item">
                                    <NavLink 
                                        to="/"
                                        className={({ isActive }) => 
                                            `nav-link ${isActive ? "active" : ""}`
                                        }
                                        >
                                        Home
                                    </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                to="/create"
                                className={({ isActive }) => 
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                >
                                Create Account
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                to="/login"
                                className={({ isActive }) => 
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                                >
                                Login
                                </NavLink>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}