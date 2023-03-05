import classNames from "classnames";
import React from "react";

type Props = {
  title: string;
  icon?: JSX.Element | null;
  className?: string;
};

export const CCButton: React.FC<Props> = ({
  title,
  icon = null,
  className,
}) => {
  return (
    <button
      className={classNames(
        "w-full font-semibold border border-gray-300 hover:border-gray-400 focus:ring focus:ring-gray-50 hover:bg-gray-100 transition ease-in-out duration-200",
        className,
        {
          "py-4 px-9": !className,
          "rounded-xl": !className?.includes("rounded"),
        }
      )}
      type="button"
    >
      <div className="flex flex-wrap justify-center items-center -m-1">
        {!!icon && <div className="w-auto p-1">{icon}</div>}
        <div className="w-auto p-1">
          <span>{title}</span>
        </div>
      </div>
    </button>
  );
};
