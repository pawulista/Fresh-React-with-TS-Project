import { RecipeItem } from "./RecipeItem";

export const RecipeCard = () => {
    return (
        RecipeItem.map((item) => {
            <div className="bg-amber-500">
                <h4 className="">{item.name}</h4>
                <p>{item.category}</p>
                <div className="flex">
                    <p>⌚<span>{item.prepTime}</span>min</p>
                    <p>🔥<span>{item.calories}</span>kcal</p>
                </div>
                <span>{item.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>

            </div>
        })
    );
}