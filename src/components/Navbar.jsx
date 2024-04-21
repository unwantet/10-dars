import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { GlobalContext } from "../context/useContextGlobal";
import { useContext } from "react";


 function Navbar() {
    const {navbarBgColor} = useContext( GlobalContext );

    console.log(navbarBgColor);
    return (
        <div className="bg-base-300 duration-300 transition" style={{backgroundColor: navbarBgColor}}>
            <div className="navbar align-element">
                <div className="navbar-start">
                    <Link to='/' className='btn btn-secondary hidden lg:flex'>
                        Nation-F
                    </Link>
                    <div className="dropdown lg:btn-lg flex lg:hidden">
                    <button tabIndex={0} role="button" className="btn btn-secondary lg:btn-lg ">N-F</button>
                    <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLinks/>
                    </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <NavLinks/>
                </div>
                <div className="navbar-end">
                <div className="dropdown dropdown-end ">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Logout</a></li>
                </ul>
                </div>
                 </div>
            </div>
        </div>
    )
}
export default Navbar;
