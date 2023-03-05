import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/hooks/global";
import { Checkmark } from "shared/icons";
import { CCAvatar, CCButton, CCInput, Rating } from "shared/ui";
import { selectFridgeProducts } from "store/fridge/selector";
import { setRecipe } from "store/recipes/slice";
import { FinishedCard } from "./card";

export const FinishedProjects = () => {
  return (
    <div className="flex flex-col pt-5">
      <FinishedCard />
      <div className="flex items-center mt-4 justify-between">
        <div>
          <CCButton title="Review" className="py-1 px-8" />
        </div>
        <div className="space-x-2">
          <CCButton title="<-" className="rounded-full w-8 h-8" />
          <CCButton title="->" className="rounded-full w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
