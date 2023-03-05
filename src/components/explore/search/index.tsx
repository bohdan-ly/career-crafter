import { Project } from "components/category/ongoing/project";
import { Tags } from "components/project/settings/tags";
import React from "react";
import { CCInput } from "shared/ui";

export const ExploreSearch = () => {
  const [results, setResults] = React.useState([{}, {}, {}, {}]);

  return (
    <section className="relative py-10 px-4">
      <CCInput clearable placeholder="Search" className="rounded-xl py-2" />
      <Tags clear className="mt-6" />
      <div className="flex flex-col mt-10">
        {results.map((res, idx) => (
          <Project key={idx} />
        ))}
      </div>
    </section>
  );
};
