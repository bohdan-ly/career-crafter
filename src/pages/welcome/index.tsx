import { Hero, Marketing } from "components/welcome";
import React from "react";

const WelcomePage: React.FC = () => {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      {/* <FloatingSidebar /> */}
      <Hero />
      <Marketing />
    </main>
  );
};

export default WelcomePage;
