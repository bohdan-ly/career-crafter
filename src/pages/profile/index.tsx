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
  ProjectPopup,
  Reviews,
  Skills,
  Team,
} from "components/project";
import React from "react";
import { useParams } from "react-router-dom";
import { Section } from "shared/ui";

export const roles = {
  investor: "investor",
  recruiter: "recruiter",
};

const ProfilePage: React.FC = () => {
  const { userId } = useParams();

  const getType = () => {
    switch (userId) {
      case "investor": {
        return "investor";
      }
      case "recruiter": {
        return "recruiter";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <main className="w-full flex flex-col overflow-hidden pb-10">
      <ProfileHeader type={getType()} />

      <Section
        title={
          userId === roles.investor
            ? ""
            : roles.recruiter === "recruiter"
            ? "Looking for"
            : "About me"
        }
        content={<About type={getType()} />}
        titleClassName="text-md font-bold font-heading md:max-w-xl leading-none"
        className="pt-5 px-4"
      />
      {!getType() && <Actions />}
      <Tabs type={getType()} />
      <Administrations />
    </main>
  );
};

export default ProfilePage;
