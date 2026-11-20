import { RecipeItem } from "./RecipeItem";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = () => {
    return (
        <div
        key={RecipeItem.map((item) => {item.id})}
        className="grid grid-cols-3 p-4 m-4 gap-3"
        >
            { RecipeCard }
        </div>
    );
}