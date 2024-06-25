import React from 'react';
import "./MealList.css";
import { Link } from 'react-router-dom';

const MealList = ({ meals }) => {

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='section-title'>category meals</div>
        <section className='section-meal-grid'>
          {
            meals?.map(mealItem => {
              const {idMeal:id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: imgUrl } = mealItem;

              return (
                <Link to = {`/meal/${id}`} className = "meal-item" key={id}>
                  <div className="meal-item-container">
                    <div className="meal-item-body">
                      <img src={imgUrl} alt={meal} className="meal-item-img" />
                    </div>
                    <div className="meal-item-footer">
                      <div className="meal-item-info">
                        <span className="item-title">{meal}</span>
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

export default MealList