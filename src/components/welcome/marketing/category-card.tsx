import React from "react";
import { CCButton } from "shared/ui";

const CategoryCard: React.FC<{
  title: string;
  desc: string;
  src: string;
  cta: string;
}> = ({ title, desc, src, cta }) => {
  console.log(src);

  return (
    <div className="relative group flex justify-center items-center h-full w-full">
      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg cursor-pointer m-auto">
        <a href="#" className="w-full block h-full">
          <img
            alt="home image"
            src={src}
            className="max-h-40 w-full object-contain"
          />
          <div className="w-full p-4 h-full">
            <p className="text-black text-2xl font-medium">
              {title || "Should You Get Online Education?"}
            </p>
            <p className="text-gray-800 text-sm font-medium mb-2 mt-4">
              {desc || "A comprehensive guide about online education."}
            </p>

            <div className="mt-auto">
              <CCButton className="bg-white text-indigo-600 py-2" title={cta} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
