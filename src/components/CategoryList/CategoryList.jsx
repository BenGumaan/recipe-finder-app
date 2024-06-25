import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./CategoryList.css";
import { useMealContext } from '../../context/meal/MealContext';

const CategoryList = ({categories}) => {

  const { categories: allCategories } = useMealContext();
  const [mealCounts, setMealCounts] = useState({});

  useEffect(() => {
    const fetchMealCounts = async () => {
      const counts = {};
      for (const category of allCategories) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);
        const data = await response.json();
        counts[category.strCategory] = data.meals.length;
      }
      setMealCounts(counts);
    };

    fetchMealCounts();
  }, [allCategories]);


  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='section-title'>Popular Recipes</div>
        <section className='section-category-grid'>
          {
            categories.map(category => {
              const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;

              return (
                <Link to={`/meal/category/${title}`} className="category-item" key={id}>
                  <div className="card">
                    <div className="card-body">
                      <img src={thumbnail} alt={title} className="card-img" />
                    </div>
                    <div className="card-footer">
                      <div className="card-info">
                        <span className="card-time"><i className="fa fa-clock-o"></i> {title}</span>
                        <span className="card-ingredients"><i className="fa fa-cutlery"></i> {mealCounts[title] || 0} Recipes</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default CategoryList