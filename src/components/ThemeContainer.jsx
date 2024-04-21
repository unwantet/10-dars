const colors = ["#1E0342", "#912BBC", "#A5DD9B"];

import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";

import { GlobalContext } from "../context/useContextGlobal";
import { useContext } from "react";



function ThemeContainer() {

    const {dispatch} = useContext(GlobalContext);

    const changeColor = (color) => {
        dispatch({
            type: 'CHANGE_NAVBAR_BG',
            payload: color
        })
    }

    return (
        <div className="mb-10 py-3">
            <div className="align-element flex justify-between items-center">
                {/* colors */}
                <div className="flex flex-row gap-2">
                    {colors.map((color) => {
                        return <div onClick={() => changeColor(color)} key={color} className="h-5 w-5 rounded-full cursor-pointer" style={{backgroundColor:color}}></div>
                    })}
                </div>
                {/* theme */}
                <div>
                <label className="swap swap-rotate">
  
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />
                
                {/* sun icon */}
                <FaSun  className="swap-on fill-current w-8 h-8"/>

                {/* moon icon */}
                <IoMdMoon className="swap-off fill-current w-8 h-8" />
                </label>
                </div>
            </div>
        </div>
    )
    
}

export default ThemeContainer;