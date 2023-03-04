import classNames from "classnames";
import React from "react";
import { Star } from "shared/icons";

type Props = {
  className?: string;
  rating: number;
};

export const Rating: React.FC<Props> = ({ className, rating }) => {
  const [stars, setStart] = React.useState([{}, {}, {}, {}, {}]);

  return (
    <div className={classNames("flex items-center", className)}>
      {stars.map((star, idx) => (
        <Star
          key={idx}
          className={classNames("w-5 h-5 fill-transparent", {
            "stroke-yellow-500": rating > idx + 1,
            "fill-yellow-500": rating > idx + 1,
          })}
        />
      ))}
    </div>
  );
};
