import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/hooks/global";
import { Checkmark } from "shared/icons";
import { CCButton } from "shared/ui";
import { selectFridgeProducts } from "store/fridge/selector";
import { setRecipe } from "store/recipes/slice";

export const CategoryInformation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const products = useAppSelector(selectFridgeProducts);

  const handleCloseRecipe = () => {
    dispatch(setRecipe(null));
  };

  return (
    <section className="bg-blueGray-50">
      <div className="overflow-hidden pt-10 px-4">
        <div className="w-full">
          <h1 className="text-4xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
            Front-end
          </h1>

          <ul className="mt-5 max-w-md text-gray-500 list-inside dark:text-gray-400 space-y-4">
            <li className="flex items-center gap-2">
              <Checkmark className="h-5 w-5 fill-green-300" />
              Hard skill
            </li>
            <li className="flex items-center gap-2">
              <Checkmark className="h-5 w-5 fill-none" /> Hard skill
            </li>
            <li className="flex items-center gap-2">
              <Checkmark className="h-5 w-5 fill-none" />
              Hard skill
            </li>
          </ul>
          <div className="mt-6 flex items-center space-x-4">
            <p>208 projects</p>
            <p>3980 members</p>
          </div>
          <CCButton title="Create own project" className="py-2 mt-4" />
        </div>
      </div>
    </section>
  );
};
