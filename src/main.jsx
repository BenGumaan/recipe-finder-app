import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MealProvider } from './context/meal/MealContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MealProvider>
      <App />
    </MealProvider>
);

