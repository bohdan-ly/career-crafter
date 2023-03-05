import { CCAvatar } from "shared/ui";

export const ProfileHeader = () => {
  return (
    <section className="h-60">
      <div className="flex flex-col w-full justify-center items-center h-full">
        <CCAvatar
          className="w-28 h-28"
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
        />
        <h2 className="mt-2 text-2xl font-extrabold">Anna</h2>
        <p className="mt-1 font-light text-gray-600">Front-end</p>
      </div>
    </section>
  );
};
