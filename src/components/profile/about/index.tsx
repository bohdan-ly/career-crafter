import { Gallery } from "components/project/about/gallery";
import { roles } from "pages/profile";
import {
  EditIcon,
  EmailIcon,
  GroupIcon,
  ProjectIcon,
  Star,
} from "shared/icons";
import { CCButton } from "shared/ui";
import { Panel } from "./investor-panel";
import { Table } from "./investor-table";

type Props = {
  type: string;
};

export const About: React.FC<Props> = ({ type }) => {
  return (
    <div className="flex flex-col relative">
      {/* <EditIcon className="absolute right-0 -top-5 w-5 h-5" /> */}
      {type !== roles.investor && (
        <p className="mt-2">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua`}
        </p>
      )}
      {type === roles.investor && <Panel type={type} />}
      {type === roles.investor && <Table type={type} />}
      {!type && (
        <div className="flex items-center mt-4 space-x-5">
          <div className="flex items-center">
            <ProjectIcon className="h-5 w-5" />
            <span className="ml-3">
              <b>2</b> projects
            </span>
          </div>
          <div className="flex items-center">
            <ProjectIcon className="h-5 w-5" />
            <span className="ml-3">
              <b>2</b> projects
            </span>
          </div>
        </div>
      )}
      {type === roles.recruiter && (
        <>
          <div className="flex flex-col mt-4 space-y-2">
            <div className="flex items-center">
              <GroupIcon className="h-5 w-5" />
              <span className="ml-3">1000+ candidates</span>
            </div>
            <div className="flex items-center">
              <EmailIcon className="h-5 w-5" />
              <a
                href="mailto:kate@gmail.com"
                className="ml-3 font-normal underline text-indigo-600 hover:underline hover:text-indigo-600"
              >
                oleh_ma@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-none" />
              <span className="ml-3">100+ reviews on projects</span>
            </div>
          </div>
          <h2 className="text-md font-bold font-heading md:max-w-xl leading-none mt-5">
            Resources
          </h2>
          <div className="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-medium space-x-4">
            <span className="px-2 py-1 rounded bg-indigo-500">#online</span>
            <span className="px-2 py-1 rounded bg-indigo-500">#internet</span>
            <span className="px-2 py-1 rounded bg-indigo-500">#education</span>
          </div>
          <h2 className="text-lg font-bold font-heading md:max-w-xl leading-none mt-5">
            Our team
          </h2>
          <Gallery
            className="w-full mt-2"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <div className="space-x-5 mt-2 mx-auto">
            <CCButton title="<-" className="rounded-full w-8 h-8" />
            <CCButton title="->" className="rounded-full w-8 h-8" />
          </div>
        </>
      )}
      {!type && (
        <div className="flex items-center mt-5">
          <EmailIcon className="h-5 w-5" />
          <a
            href="mailto:kate@gmail.com"
            className="ml-2 font-normal underline text-indigo-600 hover:underline hover:text-indigo-600"
          >
            anna@gmail.com
          </a>
        </div>
      )}
    </div>
  );
};
