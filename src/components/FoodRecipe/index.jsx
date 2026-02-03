import { useState } from "react";
import "./style.css";

export default function FoodRecipeApp() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    if (!query) return;

    try {
      setError("");
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      );
      const data = await res.json();

      if (!data.meals) {
        setRecipes([]);
        setError("No recipes found!");
        return;
      }

      setRecipes(data.meals);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="recipe-container">
      <h1>Food Recipe App</h1>

      <div className="search-group">
        <input
          type="text"
          placeholder="Search recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchRecipes}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="recipe-grid">
        {recipes.map((meal) => (
          <div key={meal.idMeal} className="recipe-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
