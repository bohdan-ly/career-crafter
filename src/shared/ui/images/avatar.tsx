import classNames from "classnames";
import React from "react";

type Props = {
  src?: string;
  className?: string;
};

export const CCAvatar: React.FC<Props> = ({ src, className }) => {
  return (
    <img
      className={classNames("rounded-full", className, {
        "w-10 h-10 p-[1px] ring-2 ring-gray-300 cursor-pointer": !className,
      })}
      src={
        src || "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      }
      alt="user avatar"
    />
  );
};
