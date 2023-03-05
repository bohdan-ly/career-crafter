import { Github, LinkIcon } from "shared/icons";
import { Gallery } from "./gallery";

type Props = {
  resource: string;
  about: string;
  link: string;
};

export const About: React.FC<Props> = ({ resource, about, link }) => {
  const getResource = () => {
    switch (resource) {
      case "github":
        return <Github className="stroke-none" height="" />;
    }
  };

  return (
    <div className="overflow-hidden">
      <p className="mt-2">
        {about ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua`}
      </p>
      {(!!resource || !!link) && (
        <div className="flex flex-col justify-starts mt-4 space-y-2">
          <h2 className="text-md font-bold font-heading md:max-w-xl leading-none">
            Resources
          </h2>
          <div className="flex items-centered mt-3 space-x-4">
            {!!resource && <a href="/">{getResource()}</a>}
            {!!link && (
              <a href="/">
                <LinkIcon className="h-6 w-6 stroke-2" />
              </a>
            )}
          </div>
        </div>
      )}

      <Gallery />
    </div>
  );
};
