import { OngoingProjects } from "components/category";
import { Reviews } from "components/project";
import { OverviewIcon, ProjectIcon, Star } from "shared/icons";
import { CCTabs } from "shared/ui";
import { Overview } from "./overview";

type Props = {
  type: string;
};

export const Tabs: React.FC<Props> = ({ type }) => {
  return (
    <section className="overflow-hidden flex flex-col px-4 pt-12 space-y-5">
      <CCTabs
        tabs={
          !type
            ? [
                {
                  title: "Overview",
                  icon: <OverviewIcon className="h-5 w-5" />,
                  content: <Overview />,
                },
                {
                  title: "Projects",
                  icon: <ProjectIcon className="h-5 w-5" />,
                  content: (
                    <div className="mt-6">
                      <OngoingProjects />
                    </div>
                  ),
                },
                {
                  title: "Reviews",
                  icon: <Star className="h-5 w-5 fill-none" />,
                  content: <Reviews />,
                },
              ]
            : [
                {
                  title: "Overview",
                  icon: <OverviewIcon className="h-5 w-5" />,
                  content: <Overview />,
                },
                {
                  title: "Reviews",
                  icon: <Star className="h-5 w-5 fill-none" />,
                  content: <Reviews />,
                },
              ]
        }
      />
    </section>
  );
};
