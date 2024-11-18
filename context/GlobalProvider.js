import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then(res => {
                if(res) {
                    setUser(res)
                    setIsLoggedIn(true)
                } else {
                    setUser(null)
                    setIsLoggedIn(false)
                }
            }).catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <GlobalContext.Provider value={{
            user,
            setUser,
            isLoggedIn,
            isLoading,
            setIsLoggedIn
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider