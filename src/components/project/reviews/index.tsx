import { CCAvatar, Rating } from "shared/ui";

export const Reviews = () => {
  return (
    <div className="flex flex-col border-b-2 pb-2.5 pt-4">
      <div className="flex items-start w-full">
        <CCAvatar
          className="w-10 h-10 mt-1.5"
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
        />
        <div className="flex flex-col ml-2">
          <p className="font-semibold text-ellipsis overflow-hidden">Olha</p>
          <Rating className="-ml-1 mt-1" rating={4.5} />
          <p className="w-full text-ellipsis overflow-hidden mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </div>
  );
};
