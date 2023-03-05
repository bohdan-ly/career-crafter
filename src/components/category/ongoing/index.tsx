import React from "react";
import { FilterIcon } from "shared/icons";
import { CCInput } from "shared/ui";
import { Project } from "./project";

export const OngoingProjects = () => {
  const [results, setResults] = React.useState([{}, {}, {}, {}]);

  return (
    <div className="flex flex-col pt-1.5 relative">
      <FilterIcon className="fill-none stroke-black stroke-2 w-4 h-4 absolute -top-[21.5px] right-0" />
      <CCInput className="py-1.5" placeholder="Search" />
      <div className="flex flex-col mt-10">
        {results.map((res, idx) => (
          <Project key={idx} />
        ))}
      </div>
    </div>
  );
};
