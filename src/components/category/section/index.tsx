import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/hooks/global";
import { Checkmark } from "shared/icons";
import { CCButton, CCInput } from "shared/ui";
import { selectFridgeProducts } from "store/fridge/selector";
import { setRecipe } from "store/recipes/slice";

type Props = {
  title: string;
  content: JSX.Element;
};

export const CategorySection: React.FC<Props> = ({ title, content = null }) => {
  return (
    <section className="bg-blueGray-50 mt-16 px-4">
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <div className="overflow-hidden pt-10">{content}</div>
    </section>
  );
};
