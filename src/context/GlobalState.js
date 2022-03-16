import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
// Inital State

const initalState = {
    transaction:[
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

// Create context

export const GlobalContext = createContext(initalState);

// provider component

export const GlobalProvider = ({children})=> {
  const[state,dispatch] = useReducer(AppReducer,initalState);

  return (<GlobalContext.Provider value={{
      transaction: state.transaction
  }}>
      {children}
  </GlobalContext.Provider>)
}