import { createContext, useReducer } from "react";

export const GlobalContext = createContext()
const changeState = (state,action) => {
    switch (action.type) {
        case "CHANGE_NAVBAR_BG":
            return {...state,navbarBgColor: action.payload};
        case "CHANGE_USER":
            return {...state,user: action.payload};
        default:
            return state;
}
}


export function GlobalContextProvider({children}){
    const [state,dispatch] = useReducer(changeState,{
        user:null,
        navbarBgColor:"",
    })


    return (

        <GlobalContext.Provider value={{...state , dispatch}}>
        {children}
        </GlobalContext.Provider>
        )
}
