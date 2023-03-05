import classNames from "classnames";
import { Github, LinkIcon } from "shared/icons";

type Props = {
  className?: string;
  src?: string;
};

export const Gallery: React.FC<Props> = ({ className, src }) => {
  return (
    <div
      className={classNames(className, {
        "flex flex-col w-full mt-12": !className,
      })}
    >
      <img
        src={
          src ||
          "https://cdn.discordapp.com/attachments/1038329663187062804/1079861524413288468/astronaut_4.png"
        }
      />
    </div>
  );
};
