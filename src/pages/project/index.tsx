import { Investors, OngoingProjects } from "components/category";
import {
  About,
  Owner,
  ProjectHeader,
  Reviews,
  Skills,
  Team,
} from "components/project";
import React from "react";
import { useParams } from "react-router-dom";
import { Section } from "shared/ui";

const ProjectPage: React.FC = () => {
  const { projectId } = useParams();
  console.log(projectId);

  return (
    <main className="w-full flex flex-col overflow-hidden pb-10">
      <Section
        title="Film website"
        titleClassName="text-4xl font-bold font-heading md:max-w-xl leading-none"
        content={<ProjectHeader />}
      />

      <Section
        title="About project"
        content={<About resource="github" link="/categories" about="" />}
        titleClassName="text-md font-bold font-heading md:max-w-xl leading-none"
      />

      <Section
        title="Necessary skills"
        content={<Skills />}
        titleClassName="text-md font-bold font-heading md:max-w-xl leading-none"
        className="px-4 pt-6"
      />
      <Section
        title="Team"
        content={<Team />}
        titleClassName="text-md font-bold font-heading md:max-w-xl leading-none"
        className="px-4 pt-5"
      />
      <Section
        title="Owner"
        content={<Owner />}
        titleClassName="text-md font-bold font-heading md:max-w-xl leading-none"
        className="px-4 pt-12"
      />
      <Section
        title="Reviews"
        content={<Reviews />}
        titleClassName="text-md font-bold font-heading md:max-w-xl leading-none"
        className="px-4 pt-12"
      />
    </main>
  );
};

export default ProjectPage;
