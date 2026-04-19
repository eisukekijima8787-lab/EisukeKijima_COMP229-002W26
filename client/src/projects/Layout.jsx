import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import image_logo from "../assets/aboutPicture1.jpg"
export default function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    {/* -- Brand/logo -- */}
                    <NavLink className="navbar-brand" to="#">
                        <img src={image_logo} alt="logo" style={{ width: 40 }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        {/* !-- Links -- */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <i className="fas fa-home"></i> Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/projects">
                                    <i className="fas fa-project-diagram"></i> Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutUs">
                                    <i className="fas fa-home"></i> About
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown">
                                    <i className="fa-solid fa-barcode"></i> Project
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to="/project/list">
                                            <i className="fa-regular fa-rectangle-list"></i> Project List
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/project/add">
                                            <i className="fa-solid fa-square-plus"></i> Add a new Item
                                        </NavLink>
                                    </li>
                                </ul>
                            </li >
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users/signin">
                                    <i className="fa-solid fa-right-to-bracket"></i> Signin
                                </NavLink>
                            </li >

                        </ul >
                    </div>
                </div>
            </nav >
        </>
    );
}