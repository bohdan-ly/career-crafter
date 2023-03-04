import { Header, Cards } from "components/categories";
import React from "react";

const CategoriesPage: React.FC = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      {/* <FloatingSidebar /> */}
      <Header />
      <Cards />
    </main>
  );
};

export default CategoriesPage;
