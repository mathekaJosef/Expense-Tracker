import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {id: 1, text: 'flower', amount: -20},
        {id: 2, text: 'salary', amount: 300},
        {id: 3, text: 'book', amount: -10},
        {id: 4, text: 'camera', amount: 150}
    ]
}

//Create context
const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider
        value={{transactions: state.transactions}}
    >
       {children} 
    </GlobalContext.Provider>) 
}

export default GlobalProvider