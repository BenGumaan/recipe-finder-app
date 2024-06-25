import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from '../../components/CategoryList/CategoryList';
import MealItem from "../../components/MealItem/MealItem";
import { useMealContext } from '../../context/meal/MealContext';
import { startFetchMealItem } from '../../actionTypes/actions';
import Loader from '../../components/Loader/Loader';

const MealPage = () => {
  const {id} = useParams();
  const { categories, dispatch, meal, categoryLoading, mealLoading} = useMealContext();

  useEffect(() => {
    startFetchMealItem(dispatch, id);
  }, [id, dispatch]);

  let ingredientsArr = [], measuresArr = [], mealItem = {};
  if(meal && meal?.length > 0){
    for(let props in meal[0]){
      if(props.includes('strIngredient')){
        if(meal[0][props]) ingredientsArr.push(meal[0][props]);
      }

      if(props.includes('strMeasure')){
        if(meal[0][props]){
          if(meal[0][props].length > 1){
            measuresArr.push(meal[0][props]);
          }
        }
      }
    }

    mealItem = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      instructions: meal[0]?.strInstructions,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr
    }
  }

  return (
    <main className='main-content bg-whitesmoke'>
      { (mealLoading) ? <Loader /> : <MealItem meal = {mealItem} /> }
      { (categoryLoading) ? <Loader /> : <CategoryList categories={categories} /> }
    </main>
  )
}

export default MealPage
