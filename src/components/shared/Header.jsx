import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
        return <Loading/>;
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
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <a>About Us</a>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        LunchBox
                    </Link>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <input
                        onChange={handleDarkMode}
                        type="checkbox"
                        className="toggle toggle-info"
                        checked={darkMode}
                    />

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
                                        <a>{user?.displayName}</a>
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
                            <Link
                                to="/register"
                                className="btn btn-outline mx-2"
                            >
                                Register
                            </Link>
                            <Link to="/login" className="btn btn-outline">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
