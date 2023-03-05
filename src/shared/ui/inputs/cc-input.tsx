import classNames from "classnames";
import React from "react";
import { CloseIcon, Search } from "shared/icons";

type Props = {
  label?: string;
  formClassName?: string;
  labelClasses?: string;
  className?: string;
  placeholder?: string;
  withIcon?: boolean;
  clearable?: boolean;
  children?: JSX.Element | null;
};

export const CCInput: React.FC<Props> = ({
  label = "Search",
  className,
  formClassName = "",
  labelClasses,
  placeholder,
  withIcon = true,
  clearable = false,
  children = null,
}) => {
  return (
    <form className={formClassName}>
      <label
        htmlFor="cc-input"
        className={classNames(labelClasses, {
          "mb-2 text-sm font-medium sr-only": !labelClasses,
        })}
      >
        {label}
      </label>
      <div className="relative">
        {withIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        )}
        <input
          type="search"
          id="cc-input"
          className={classNames(
            "block w-full p-4 pr-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500",
            className,
            { "pl-10": withIcon }
          )}
          placeholder={placeholder || "Search Members, Projects..."}
        />
        {clearable && (
          <div className="absolute inset-y-0 right-0 flex items-center pl-3 cursor-pointer justify-center pr-3">
            <CloseIcon className="w-5 h-5 text-gray-500" />
          </div>
        )}
        {children}
      </div>
    </form>
  );
};
