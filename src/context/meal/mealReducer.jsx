import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_MEAL_ITEM_BEGIN,
    FETCH_MEAL_ITEM_ERROR,
    FETCH_MEAL_ITEM_SUCCESS
} from "../../actionTypes/types";

const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,
    meals: [],
    mealsLoading: false,
    mealsError: false,
    meal: [],
    mealLoading: false,
    mealError: false
}
const mealReducer = (state, action) => {
    switch(action.type){
        case FETCH_CATEGORY_BEGIN:
            return {
                ...state,
                categoryLoading: true
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryLoading: false,
                categories: action.payload
            }
        case FETCH_CATEGORY_ERROR: 
            return {
                ...state,
                categoryLoading: false,
                categoryError: true
            }
        case FETCH_MEALS_BEGIN:
            return {
                ...state,
                mealsLoading: true
            }
        case FETCH_MEALS_SUCCESS:
            return {
                ...state,
                mealsLoading: false,
                meals: action.payload
            }
        case FETCH_MEALS_ERROR:
            return {
                ...state,
                mealsLoading: false,
                mealsError: true
            }
        case FETCH_MEAL_ITEM_BEGIN:
            return {
                ...state,
                mealLoading: true
            }
        case FETCH_MEAL_ITEM_SUCCESS:
            return {
                ...state,
                mealLoading: false,
                meal: action.payload
            }
        case FETCH_MEAL_ITEM_ERROR:
            return {
                ...state,
                mealLoading: false,
                mealError: true
            }
        case FETCH_CATEGORY_MEALS_BEGIN:
            return {
                ...state,
                categoryMealsLoading: true
            }
        case FETCH_CATEGORY_MEALS_SUCCESS:
            return {
                ...state,
                categoryMealsLoading: false,
                categoryMeals: action.payload
            }
        case FETCH_CATEGORY_MEALS_ERROR:
            return {
                ...state,
                categoryMealsLoading: false,
                categoryMealsError: false
            }
        default: 
            return state;
    }
}

export { mealReducer, initialState };
