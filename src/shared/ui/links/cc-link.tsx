import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "shared/navigation";

type Props = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const CCLink: React.FC<Props> = ({
  href,
  className,
  children = null,
  onClick = () => {},
}) => {
  const navigate = useNavigate();

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (href) navigate(href);
    onClick();
  };
  return (
    <a className={className} onClick={(e) => handleNavigate(e)}>
      {children}
    </a>
  );
};
