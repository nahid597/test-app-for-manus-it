import React from 'react';

const initialState = {
    numberOfProducts: 0,
};

const AppContext = React.createContext(initialState);

export default AppContext;
