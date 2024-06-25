import React from 'react';
import "./MealItem.css";
import { FaUtensilSpoon } from "react-icons/fa";

const MealItem = ({meal}) => {
  let tags = meal?.tags?.split(',');
  let instructions = meal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);

  return (
    <div className="container">
      <div className="recipe-detail">
        <div className="recipe-header">
          <img src={meal.thumbnail} alt={meal.title} className="recipe-image" />
          <div className="recipe-title-desc">
            <h1 className="meal-title">{meal.title}</h1>
            <p className="meal-category">{meal.category} | {meal.area}</p>
          </div>
        </div>
        <div className="meal-content">
          <div className="meal-tags">
            Tags:
            {tags ? tags?.map((tag, index) => (
              <span key={index} className="meal-tag">{tag}</span>
            )) : <span className='not-found'> no tags found</span>}
          </div>
            <div className="ingredients">
              <h2>Ingredients:</h2>
              <div className="ingredients-grid">
                {meal.ingredients?.map((ingredient, index) => (
                  <div key={index} className="ingredient-item">{ingredient}</div>
                ))}
              </div>
            </div>
          <div className="instructions">
            <h2>Instructions:</h2>
            <ol className='instructions-list'>
              {meal.instructions?.split(/[\r\n]+/g).map((instruction, index) => (
                instructions && 
                <div className='instructions-item' key={index}>
                  <span className='count'>{index+1}</span>
                  <span key={index}>{instruction}</span>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealItem