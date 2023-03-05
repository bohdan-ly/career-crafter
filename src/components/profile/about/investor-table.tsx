import { Gallery } from "components/project/about/gallery";
import { roles } from "pages/profile";
import {
  BanknotesIcon,
  EditIcon,
  EmailIcon,
  GroupIcon,
  ProjectIcon,
  Star,
} from "shared/icons";
import { CCButton } from "shared/ui";

type Props = {
  type: string;
};

export const Table: React.FC<Props> = ({ type }) => {
  return (
    <div className="relative overflow-x-auto mt-20">
      <h2 className="text-md font-bold font-heading md:max-w-xl leading-none">
        Personal investmens
      </h2>
      <table className="w-full mt-5 text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="pr-6 py-3 border-r-2">
              Announced day
            </th>
            <th scope="col" className="px-6 py-3 text-indigo-600">
              Team name
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2"
            >
              Feb 10, 2022
            </th>
            <td className="px-6 py-4">Mira</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2"
            >
              Feb 21, 2022
            </th>
            <td className="px-6 py-4">Phoenix</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2"
            >
              Feb 25, 2022
            </th>
            <td className="px-6 py-4">Chaos</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2"
            >
              Feb 20, 2022
            </th>
            <td className="px-6 py-4">Gray</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-5">
        <CCButton title="Show more" />
      </div>
    </div>
  );
};
