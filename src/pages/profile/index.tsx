import { Investors, OngoingProjects } from "components/category";
import {
  About,
  Actions,
  Administrations,
  ProfileHeader,
  Tabs,
} from "components/profile";
import {
  Owner,
  ProjectHeader,
  Reviews,
  Skills,
  Team,
} from "components/project";
import React from "react";
import { useParams } from "react-router-dom";
import { Section } from "shared/ui";

const ProfilePage: React.FC = () => {
  const { userId } = useParams();
  console.log(userId);

  return (
    <main className="w-full flex flex-col overflow-hidden pb-10">
      <ProfileHeader />

      <Section
        title="About me"
        content={<About />}
        titleClassName="text-md font-bold font-heading md:max-w-xl leading-none"
        className="pt-5 px-4"
      />
      <Actions />
      <Tabs />
      <Administrations />
    </main>
  );
};

export default ProfilePage;
