import { ExploreSearch } from "components/explore";
import React from "react";

const ExplorePage: React.FC = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden pb-10">
      <ExploreSearch />
    </main>
  );
};

export default ExplorePage;
