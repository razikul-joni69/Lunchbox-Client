import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "./Loading";
const Header = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleLogout = () => {
        logOut();
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="sticky bg-[#B1B2FF]">
            <div className="navbar lg:container mx-auto">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact z-50 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink
                        to="/"
                        className="btn btn-ghost normal-case text-xl"
                    >
                        LunchBox
                    </NavLink>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mr-2">
                        <span className="ml-[5px]"> Mode</span> <br />
                        <input
                            onChange={handleDarkMode}
                            type="checkbox"
                            className="toggle toggle-info"
                            checked={darkMode}
                        />
                    </div>

                    {user ? (
                        <div className={`dropdown  dropdown-end`}>
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full ring-2 ring-pink-600">
                                    {user?.photoURL ? (
                                        <img
                                            title={
                                                user.displayName
                                                    ? `Hello ${user?.displayName} Click For More`
                                                    : "Hello Mr. X Click For More"
                                            }
                                            src={`${user?.photoURL}`}
                                            alt="User"
                                        />
                                    ) : (
                                        <img
                                            title={
                                                user.displayName
                                                    ? `Hello ${user?.displayName} Click For More`
                                                    : "Hello Mr. X Click For More"
                                            }
                                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    )}
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    {user?.displayName ? (
                                        <a>Name: {user?.displayName}</a>
                                    ) : (
                                        <a>Name: Unknown</a>
                                    )}
                                </li>
                                <li>
                                    <a
                                        onClick={handleLogout}
                                        className="bg-yellow-200"
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <div className="flex">
                                <ul className="menu menu-horizontal px-1">
                                    <li>
                                        <NavLink to="/login">LogIn</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/register">
                                            Register
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
