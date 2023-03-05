import { EmailIcon, Github, LinkIcon, ProjectIcon } from "shared/icons";
import { CCButton } from "shared/ui";

type Props = {};

export const Actions: React.FC<Props> = () => {
  return (
    <section className="overflow-hidden flex flex-col px-4 pt-12 space-y-5">
      <CCButton
        title="Projects"
        className="py-2.5 border-indigo-600 text-indigo-600 font-normal"
      />
      <CCButton
        title="Resume"
        className="py-2.5 border-indigo-600 text-indigo-600 font-normal"
      />
      <CCButton
        title="Send invite"
        className="py-2.5 border-indigo-600 text-indigo-600 font-normal"
      />
    </section>
  );
};
