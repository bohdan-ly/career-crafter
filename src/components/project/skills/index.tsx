import { Checkmark } from "shared/icons";

export const Skills = () => {
  return (
    <ul className="mt-5 max-w-md list-inside gap-y-3 flex flex-wrap">
      <li className="flex items-center w-1/2 flex-wrap">
        <Checkmark className="h-5 w-5 fill-green-300" />
        Hard skill
      </li>
      <li className="flex items-center w-1/2 flex-wrap">
        <Checkmark className="h-5 w-5 fill-none" /> Hard skill
      </li>
      <li className="flex items-center w-1/2 flex-wrap">
        <Checkmark className="h-5 w-5 fill-none" />
        Hard skill
      </li>
      <li className="flex items-center w-1/2 flex-wrap">
        <Checkmark className="h-5 w-5 fill-none" />
        Hard skill
      </li>
    </ul>
  );
};
