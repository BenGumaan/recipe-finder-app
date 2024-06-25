import React, {useState, useEffect} from 'react';
import "./SearchForm.css";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/meal/MealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actionTypes/actions';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
  }

  return (
    <>
        <div className="navbar-search">
          <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
              <input type="text" className='form-input' placeholder="Search for Recipes, Ingredients, and Tags" onChange={(e) => handleSearchTerm(e)}/>
              <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'>
                <BsSearch className='btn-icon' size = {20} />
              </button>
          </form>
        </div>
    </>
  )
}

export default SearchForm