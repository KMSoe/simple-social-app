//import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuthenticated, selectUser } from '../features/auth/authSlice';
import { signout } from '../features/auth/authSlice';

const Navbar = () => {
    const authenticated = useSelector(selectAuthenticated);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleSignout = (e) => {
        e.preventDefault();

        dispatch(signout());
    }
    return (
        <header className="bg-primary">
            <div className="container">
                <nav
                    className="d-flex pe-2 justify-content-between align-items-center"
                >

                    <Link to="/" className="navbar-brand ms-2 text-white bold">
                        <b>Blog</b>
                    </Link>

                    {authenticated ? (<ul className="nav py-1">
                        <li className="nav-item dropdown">
                            <a
                                id="navbarDropdown"
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                    src={require('../images/profile.jpg')}
                                    alt="Alice"
                                    className="img-fluid"
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%'
                                    }}
                                />
                                <span
                                    className="username text-white px-2 py-2 d-none d-lg-inline-block"
                                >{user.name}</span
                                >
                            </a>

                            <div
                                className="dropdown-menu dropdown-menu-right bg-main"
                                aria-labelledby="navbarDropdown"
                            >
                                <Link className="dropdown-item" to="/">
                                    Profile
              </Link>
                                <a className="dropdown-item" href="#" role="button" onClick={handleSignout}>
                                    Sign out
              </a>
                            </div>
                        </li>
                    </ul>) : (
                            <ul className="nav py-1">
                                <li className="nav-item me-2">
                                    <Link to="/signin" className="btn btn-success">Signin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="btn btn-outline-success text-white">Signup</Link>
                                </li>
                            </ul>
                        )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;