import React from "react";
import { CCButton } from "shared/ui";

const CategoryCard = () => {
  return (
    <div className="relative group flex justify-center items-center h-full w-full">
      <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform rounded-lg cursor-pointer m-auto">
        <a href="#" className="w-full block h-full relative">
          <div className="bg-white/60 w-full p-4 relative z-[1]">
            <p className="text-indigo-500 text-2xl font-medium">Front-end</p>
            <p className="text-gray-800 text-sm font-medium mb-2">
              A comprehensive guide about online education.
            </p>
            <p className="text-gray-600 font-light text-md">
              It is difficult to believe that we have become so used to having
              instant access to information at...
              <a className="inline-flex text-indigo-500" href="#">
                Read More
              </a>
            </p>
            <div className="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-medium">
              <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                #online
              </span>
              <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                #internet
              </span>
              <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                #education
              </span>
            </div>
            <div className="flex items-center mt-2">
              <CCButton title="Explore" className="py-2" />
            </div>
          </div>
          <img
            alt="blog photo"
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            className="max-h-24 w-full object-cover absolute top-0 -z-1"
          />
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
