import { useParams } from "react-router-dom";
import { PATHS } from "shared/navigation";
import { CCButton, CCLink } from "shared/ui";

export const Project = () => {
  const { categoryId } = useParams();

  return (
    <div className="flex flex-col border-b-2 pb-2.5 pt-4">
      <div className="flex items-center justify-between w-full">
        <h5 className="text-lg font-semibold text-ellipsis overflow-hidden">
          Film website
        </h5>
        <time className="ml-4 text-xs font-thin">1 week ago</time>
      </div>
      <p className="w-full text-ellipsis overflow-hidden">
        Lorem ipsum dolor sit amet
      </p>
      <div className="flex flex-wrap justify-starts items-center py-2 text-xs text-white font-medium space-x-3">
        <span className="px-2 py-1 rounded-full bg-indigo-500">#online</span>
        <span className="px-2 py-1 rounded-full bg-indigo-500">#internet</span>
        <span className="px-2 py-1 rounded-full bg-indigo-500">#education</span>
      </div>
      <div className="flex flex-wrap justify-starts items-center py-2 text-xs font-medium space-x-3">
        <span className="">10 members</span>
        <span className="">10 members</span>
        <span className="">10 members</span>
      </div>

      <CCLink
        href={PATHS.categories.root + `/${categoryId}` + "/1"}
        className="flex items-center ml-auto mt-2"
      >
        <span>In details</span>
        <CCButton
          title="->"
          className="rounded-full w-8 h-8 ml-2 text-gray-700"
        />
      </CCLink>
    </div>
  );
};
