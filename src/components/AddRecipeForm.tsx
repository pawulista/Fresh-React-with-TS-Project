
import { useState } from "react";

import type {
  NewRecipe,
  RecipeCategory,
} from "../types/recipe";

interface AddRecipeFormProps {
  onAddRecipe: (recipe: NewRecipe) => void;
  onCancel: () => void;
}

type RecipeFormData = {
  name: string;
  category: Exclude<RecipeCategory, "All">;
  prepTime: string;
  calories: string;
  isVegetarian: boolean;
};

const AddRecipeForm = ({
  onAddRecipe,
  onCancel,
}: AddRecipeFormProps) => {

  // 1. Manage form data
  const [formData, setFormData] = useState<RecipeFormData>({
    name: "",
    category: "Breakfast",
    prepTime: "",
    calories: "",
    isVegetarian: false,
  });

  // 2. Manage validation error
  const [error, setError] = useState<string>("");

  // 3. Handle input changes
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checkbox = event.target as HTMLInputElement;

      setFormData((previousData) => ({
        ...previousData,
        [name]: checkbox.checked,
      }));

      return;
    }

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // 4. Handle form submission
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Validate recipe name
    if (!formData.name.trim()) {
      setError("Please enter a recipe name.");
      return;
    }

    // Convert string inputs into numbers
    const prepTime = Number(formData.prepTime);
    const calories = Number(formData.calories);

    if (
      !Number.isFinite(prepTime) ||
      !Number.isFinite(calories) ||
      prepTime <= 0 ||
      calories <= 0
    ) {
      setError("Preparation time and calories must be positive numbers.");
      return;
    }

    // Create a new recipe object
    const newRecipe: NewRecipe = {
      name: formData.name.trim(),
      category: formData.category,
      prepTime,
      calories,
      isVegetarian: formData.isVegetarian,
    };

    // Send the recipe to the parent component
    onAddRecipe(newRecipe);

    // Reset the form
    setFormData({
      name: "",
      category: "Breakfast",
      prepTime: "",
      calories: "",
      isVegetarian: false,
    });

    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
    >

      {/* Form heading */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Add a New Recipe 🍲
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter your recipe information below.
        </p>
      </div>

      {/* Recipe name */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Recipe Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Vegetable Pizza"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
      </div>

      {/* Category */}
      <div className="mb-5">
        <label
          htmlFor="category"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Category
        </label>

        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>

      {/* Preparation time and calories */}
      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

        <div>
          <label
            htmlFor="prepTime"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Preparation Time (minutes)
          </label>

          <input
            id="prepTime"
            name="prepTime"
            type="number"
            min="1"
            value={formData.prepTime}
            onChange={handleChange}
            placeholder="e.g. 30"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div>
          <label
            htmlFor="calories"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Calories (kcal)
          </label>

          <input
            id="calories"
            name="calories"
            type="number"
            min="1"
            value={formData.calories}
            onChange={handleChange}
            placeholder="e.g. 350"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

      </div>

      {/* Vegetarian checkbox */}
      <div className="mb-6">
        <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-green-50 p-4">

          <input
            type="checkbox"
            name="isVegetarian"
            checked={formData.isVegetarian}
            onChange={handleChange}
            className="h-5 w-5 accent-green-600"
          />

          <span className="text-sm font-semibold text-green-800">
            This is a vegetarian recipe 🥗
          </span>

        </label>
      </div>

      {/* Validation error */}
      {error && (
        <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">

        <button
          type="submit"
          className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          + Add Recipe
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          Cancel
        </button>

      </div>

    </form>
  );
};

export default AddRecipeForm;
