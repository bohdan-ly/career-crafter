import { EditIcon, EmailIcon, ProjectIcon } from "shared/icons";

type Props = {};

export const About: React.FC<Props> = () => {
  return (
    <div className="flex flex-col relative">
      {/* <EditIcon className="absolute right-0 -top-5 w-5 h-5" /> */}
      <p className="mt-2">
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua`}
      </p>
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
      <div className="flex items-center mt-5">
        <EmailIcon className="h-5 w-5" />
        <a
          href="mailto:kate@gmail.com"
          className="ml-2 font-normal underline text-indigo-600 hover:underline hover:text-indigo-600"
        >
          anna@gmail.com
        </a>
      </div>
    </div>
  );
};
