import { Gallery } from "components/project/about/gallery";
import { roles } from "pages/profile";
import {
  BanknotesIcon,
  EditIcon,
  EmailIcon,
  GroupIcon,
  Help,
  ProjectIcon,
  Star,
} from "shared/icons";
import { CCButton } from "shared/ui";

type Props = {
  type: string;
};

export const Panel: React.FC<Props> = ({ type }) => {
  return (
    <>
      <div className="flex relative justify-center gap-4 flex-wrap">
        <div>
          <div className="flex w-[200px] items-center bg-indigo-400 px-4 py-4 rounded-md overflow-hidden text-white">
            <ProjectIcon className="h-5 w-5" />
            <span className="ml-3">
              <b>590</b> contributions
            </span>
          </div>
        </div>
        <div>
          <div className="flex w-[200px] items-center bg-indigo-400 px-4 py-4 rounded-md overflow-hidden text-white">
            <BanknotesIcon className="h-5 w-5" />
            <span className="ml-3">200,100$</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 space-y-2">
        <div className="flex items-center">
          <EmailIcon className="h-5 w-5" />
          <a
            href="mailto:kate@gmail.com"
            className="ml-3 font-normal underline text-indigo-600 hover:underline hover:text-indigo-600"
          >
            martin_ma@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <Help className="h-5 w-5 fill-none" />
          <span className="ml-3">100+ success projects</span>
        </div>
      </div>
    </>
  );
};
