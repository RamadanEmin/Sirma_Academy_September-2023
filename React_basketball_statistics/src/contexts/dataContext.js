import { createContext, useState } from 'react';

export const dataContext = createContext();

function ContextProvider({ children }) {
    const [data, setData] = useState([]);

    return (
        <dataContext.Provider value={{ data, setData }}>
            {children}
        </dataContext.Provider>
    );
}

export default ContextProvider;