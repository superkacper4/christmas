import React, { useState } from 'react';

import DataContext from './DataContext'

const DataProvider = ({ children }) => {
    const [contextData, setContextData] = useState({
        title: '',
        intro: '',
        main: '',
        ending: '',
        signature: '',
    })
    return (
        <DataContext.Provider value={{ contextData, setContextData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider