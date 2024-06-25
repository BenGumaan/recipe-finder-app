import React, {createContext, useContext, useEffect, useReducer} from "react";
import { mealReducer, initialState } from "./mealReducer";
import { startFetchCategories } from "../../actionTypes/actions";

const MealContext = createContext({});
export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(mealReducer, initialState);

    useEffect(() => {
        startFetchCategories(dispatch);
    }, []);

    return (
        <MealContext.Provider value = {{
            ...state,
            dispatch,
            startFetchCategories
        }}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext);
}