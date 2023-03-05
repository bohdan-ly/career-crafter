import classNames from "classnames";
import { CCAvatar, CCInput, CCTextarea, Rating } from "shared/ui";

type Props = {
  clear?: boolean;
  className?: string;
};

export const Tags: React.FC<Props> = ({ clear, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-wrap justify-starts items-center py-2 text-xs font-medium gap-3",
        className
      )}
    >
      <span
        className={classNames("px-2 py-1 rounded-full", {
          "border border-gray-900 text-gray-900": clear,
          "bg-indigo-500 text-white": !clear,
        })}
      >
        #online
      </span>
      <span
        className={classNames("px-2 py-1 rounded-full", {
          "border border-gray-900 text-gray-900": clear,
          "bg-indigo-500 text-white": !clear,
        })}
      >
        #internet
      </span>
      <span
        className={classNames("px-2 rounded-full py-1", {
          "border border-gray-900 text-gray-900": clear,
          "bg-indigo-500 text-white": !clear,
        })}
      >
        #education
      </span>
      <span className="px-2 py-1 rounded-full border border-gray-900 text-gray-900">
        #artificial intelligence
      </span>
      <span className="px-2 py-1 rounded-full border border-gray-900 text-gray-900">
        #machine learning
      </span>
      <span className="px-2 py-1 rounded-full border border-gray-900 text-gray-900">
        #cybersecurity
      </span>
      <span className="px-2 py-1 rounded-full border border-gray-900 text-gray-900">
        #UI/UX design
      </span>
      <span className="px-2 py-1 rounded-full border border-gray-900 text-gray-900">
        #quantum computing
      </span>
    </div>
  );
};
