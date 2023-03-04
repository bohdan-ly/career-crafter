import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/hooks/global";
import { Checkmark } from "shared/icons";
import { CCAvatar, CCButton, CCInput, Rating } from "shared/ui";
import { selectFridgeProducts } from "store/fridge/selector";
import { setRecipe } from "store/recipes/slice";

export const FinishedCard = () => {
  return (
    <div className="flex flex-col">
      <div className="ml-1 flex items-center w-full">
        <CCAvatar
          className="h-8 w-8"
          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
        />
        <p className="w-full ml-4 text-ellipsis overflow-hidden">Kate</p>
      </div>
      <img
        className="rounded-lg mt-3.5"
        src="https://cdn.discordapp.com/attachments/1038329663187062804/1080567104052404294/tropical_1.png"
        alt="finished project image"
      />
      <div className="mt-3.5 flex items-center w-full">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 text-ellipsis overflow-hidden whitespace-nowrap">
          Landing page
        </h5>
        <Rating className="ml-2" rating={4.5} />
      </div>
      <p className="text-xs font-normal text-gray-700 mt-2">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  );
};
