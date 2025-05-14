import RecipeCard from "@/app/components/RecipeCard";
import data from "@/data/recipes";

const RecipesGrid = () => {

  console.log(data)

  return (
    <div className="recipes_grid">
      {data.recipes.map((recipe)=> ( // si el objeto no tiene id se pone index
        <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image}/>)
      )}
    </div>
  );
};

export default RecipesGrid;
