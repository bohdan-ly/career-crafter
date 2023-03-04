import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/hooks/global";
import { CCButton, CCInput } from "shared/ui";
import { selectFridgeProducts } from "store/fridge/selector";
import { setRecipe } from "store/recipes/slice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const products = useAppSelector(selectFridgeProducts);

  const handleCloseRecipe = () => {
    dispatch(setRecipe(null));
  };

  return (
    <section className="bg-blueGray-50">
      <div className="overflow-hidden pt-16">
        <div className="container px-4 mx-auto">
          <div className="w-full">
            <h1 className="mb-6 text-4xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
              Сategories
            </h1>
            <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">
              Here you can select a category that you are interested in If you
              need help, contact us
            </p>
            <div className="w-full md:w-auto">
              <div className="block">
                <CCInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
