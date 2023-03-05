import { DeleteIcon, EditIcon, ExitIcon } from "shared/icons";

type Props = {};

export const Administrations: React.FC<Props> = () => {
  return (
    <section className="overflow-hidden flex flex-col px-4 pt-3 mt-12 space-y-5 border-t-2">
      <button className="flex items-center">
        <EditIcon className="h-5 w-5 mr-2" />
        Edit
      </button>
      <button className="flex items-center text-red-500">
        <DeleteIcon className="h-5 w-5 mr-2" />
        Delete an account
      </button>
      <button className="flex items-center">
        <ExitIcon className="h-5 w-5 mr-2" />
        Sign out
      </button>
    </section>
  );
};
