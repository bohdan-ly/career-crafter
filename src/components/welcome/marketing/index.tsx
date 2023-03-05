import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/hooks/global";
import { CCButton, CCInput } from "shared/ui";
import { selectFridgeProducts } from "store/fridge/selector";
import { setRecipe } from "store/recipes/slice";
import { RecipeDetails } from "store/recipes/types";
import CategoryCard from "./category-card";

export const Marketing = () => {
  const [categories, setCategories] = React.useState([
    {
      title: "Crate your resume",
      desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.',
      src: "public/resume.png",
      cta: "Create",
    },
    {
      title: "Choose a category",
      desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.',
      src: "public/category.png",
      cta: "Choose",
    },
    {
      title: "Search a team",
      desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.',
      src: "public/find.png",
      cta: "Find",
    },
  ]);

  return (
    <section className="bg-blueGray-50 mt-12">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                Experience working in a team
              </h1>
              <p className="w-full mt-4 md:text-center">
                A simple plan to learn new skills
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full gap-y-8">
              {categories.map((category, idx) => (
                <CategoryCard key={idx} {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
