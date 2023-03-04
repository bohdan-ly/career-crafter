import {
  Cards,
  CategoryInformation,
  CategorySection,
  FinishedProjects,
} from "components/category";
import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();
  console.log(categoryId);

  return (
    <main className="w-full flex flex-col overflow-hidden">
      {/* <FloatingSidebar /> */}
      <CategoryInformation />
      <CategorySection
        title="Successfully finished"
        content={<FinishedProjects />}
      />
      <CategorySection
        title="Successfully finished"
        content={<FinishedProjects />}
      />
      <CategorySection
        title="Successfully finished"
        content={<FinishedProjects />}
      />
    </main>
  );
};

export default CategoryPage;
