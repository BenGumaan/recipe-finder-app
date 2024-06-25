import React from 'react';
import { useMealContext } from '../../context/meal/MealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/CategoryList/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/MealList/MealList";

const HomePage = () => {
  const {categories, meals, categoryLoading, mealsLoading} = useMealContext();

  return (
    <main className='main-content'>
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
    </main>
  )
}

export default HomePage;
