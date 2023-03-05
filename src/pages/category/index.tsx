import {
  CategoryInformation,
  FinishedProjects,
  Investors,
  OngoingProjects,
} from "components/category";
import React from "react";
import { useParams } from "react-router-dom";
import { Section } from "shared/ui";

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();
  console.log(categoryId);

  return (
    <main className="w-full flex flex-col overflow-hidden pb-10">
      <CategoryInformation />
      <Section title="Successfully finished" content={<FinishedProjects />} />
      <Section title="Our investors" content={<Investors />} />
      <Section title={"Current Projects"} content={<OngoingProjects />} />
    </main>
  );
};

export default CategoryPage;
