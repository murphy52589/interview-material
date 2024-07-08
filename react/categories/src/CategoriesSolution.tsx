import  { useState } from "react";
import "./CategoriesSolution.css";
import categories, { Category } from "./Categories";

export default function CategoriesSolution() {
  const [categoriesData, setCategoriesData] = useState<Category[]>(categories);

  const toggleExpand = (index: number) => {
    const newCategories = [...categoriesData];
    newCategories[index].expanded = !newCategories[index].expanded;
    setCategoriesData(newCategories);
  };

  const renderCategories = (categories: Category[]) => {
    return (
      <ul>
        {categories.map((category, index) => (
          <li key={category.title}>
            <div
              className={`category ${
                category.enabled ? "enabled" : "disabled"
              }`}
              onClick={() => toggleExpand(index)}
            >
              {category.title}
              <span className="status">{category.enabled ? "✅" : "❌"}</span>
            </div>
            {category.expanded && category.subcategories.length > 0 && (
              <div className="subcategories">
                {renderCategories(category.subcategories)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>Call Suggestions</h1>
      {renderCategories(categoriesData)}
    </div>
  );
}
