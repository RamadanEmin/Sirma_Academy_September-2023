import {createContext, useContext, useState} from 'react';

export const dataContext = createContext();

function ContextProvider({ children }) {
    const [data, setData] = useState([]);
    const [activePage , setActivePage] = useState(1);
    const values = { data, setData, activePage, setActivePage };
    return (
        <dataContext.Provider value={values}>
            {children}
        </dataContext.Provider>
    );
}

export default ContextProvider;


export const useSite = () =>  useContext(dataContext);
