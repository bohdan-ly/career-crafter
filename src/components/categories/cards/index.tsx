import React from "react";
import CategoryCard from "./category-card";

export const Cards = () => {
  const [categories, setCategories] = React.useState([{}, {}, {}, {}]);

  return (
    <section className="py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full gap-y-8">
        {categories.map((category, idx) => (
          <CategoryCard key={idx} />
        ))}
      </div>
    </section>
  );
};
