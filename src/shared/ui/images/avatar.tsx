import classNames from "classnames";
import React from "react";

type Props = {
  src?: string;
  className?: string;
};

export const CCAvatar: React.FC<Props> = ({ src, className }) => {
  return (
    <img
      className={classNames(
        "p-[1px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500",
        className,
        {
          "w-10": !className,
          "h-10": !className,
        }
      )}
      src={
        src || "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      }
      alt="user avatar"
    />
  );
};
