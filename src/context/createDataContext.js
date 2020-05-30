import React, { useReducer } from "react";
//tällä komponentilla siis luodaan Contexteja (joissa on statet ja funktiot joilla stateja voi muuttaa)



export default (reducer, actions, defaultValue) =>{
    const Context = React.createContext();


    //dispatchia kutsutaan jollain actionilla ja päivittää tilan..


    const Provider = ({ children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue); //provider on niinku wrapperi eri stateille ja niitä muuttaville funktioille.

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions}}>
                {children}
            </Context.Provider>
        )
    };


    return { Context, Provider};
};

