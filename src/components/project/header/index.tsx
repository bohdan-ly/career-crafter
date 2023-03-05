export const ProjectHeader = () => {
  return (
    <div className="overflow-hidden">
      <ul className="mt-1 flex items-center max-w-md text-gray-500 list-none space-x-6">
        <li className="flex items-center">20 members</li>
        <li className="flex items-center">20 members</li>
      </ul>
      <div className="flex flex-wrap justify-starts items-center mt-4 text-xs font-medium space-x-3">
        <span className="px-2 py-1 rounded-full border border-gray-900">
          #online
        </span>
        <span className="px-2 py-1 rounded-full border border-gray-900">
          #internet
        </span>
        <span className="px-2 py-1 rounded-full border border-gray-900">
          #education
        </span>
      </div>
    </div>
  );
};
