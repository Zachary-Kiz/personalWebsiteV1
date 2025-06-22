import { Children, createContext, useContext, useState } from "react";

const PopupContext = createContext(null);

export function usePopupContext() {
    const context = useContext(PopupContext);

    if (!context) {
        throw new Error("usePopupContext must be used within the PopupProvider")
    }

    return context;
}

export const PopupProvider = ({children}) => {

    const [openPopup, setOpenPopup] = useState("None");

    const closePopup = () => {
        setOpenPopup("None")
    }

    return (
        <PopupContext.Provider value={{openPopup, setOpenPopup, closePopup}}>
            {children}
        </PopupContext.Provider>
    )
}