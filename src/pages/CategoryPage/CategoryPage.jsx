import React, {useEffect} from 'react';
import "./CategoryPage.css";
import { useMealContext } from '../../context/meal/MealContext';
import MealList from '../../components/MealList/MealList';
import { useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actionTypes/actions';

const CategoryPage = () => {
  const {name} = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  let catDescription = "";

  if(categories){
    categories.forEach(category => {
      if(category?.strCategory === name) catDescription = category?.strCategoryDescription;
    })
  }

  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className='main-content'>
      <div className='container'>
        <div className='section-title'>category description (<span className='category-title'>{name}</span>)</div>
        <p className='category-description'>{catDescription}</p>
      </div>
      {
        (categoryMeals?.length) ? <MealList meals = { categoryMeals } /> : null
      }
    </main>
  )
}

export default CategoryPage
