import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { GlobalContext } from "../context/useContextGlobal";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";


 function Navbar() {
    const {navbarBgColor , user} = useContext( GlobalContext );

    const signOutFunc = () => {
        signOut(auth).then(() => {
            console.log("Logout");
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="duration-300 transition border-b-2 border-gray-200" style={{backgroundColor: navbarBgColor}}>
            <div className="navbar align-element">
                <div className="navbar-start">
                    <Link to='/' className='btn btn-secondary hidden lg:flex'>
                        Nation-F
                    </Link>
                    <div className="dropdown lg:btn-lg flex lg:hidden">
                    <button tabIndex={0} role="button" className="btn btn-secondary lg:btn-lg ">N-F</button>
                    <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        
                    </div>
                    </div>
                </div>
                <div className="navbar-end">
                <div className="dropdown dropdown-end flex items-center gap-2">
                <h1 className="text-orange-500 font-semibold">{user ? user.displayName : ''}</h1>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt={user.displayName ? user.displayName : "user image"} src={user.photoURL} />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-52">
                    <NavLinks/>
                    <li><button onClick={signOutFunc} className="btn btn-sm">Logout</button></li>
                </ul>
                </div>
                 </div>
            </div>
        </div>
    )
}
export default Navbar;
