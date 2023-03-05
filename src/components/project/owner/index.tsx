import { CCAvatar } from "shared/ui";

export const Owner = () => {
  return (
    <div className="mt-5 flex flex-col border-b pb-3">
      <div className="flex items-start space-x-2">
        <CCAvatar
          className="w-12 h-12"
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
        />
        <p className="font-semibold">Kate</p>
      </div>
      <p className="font-semibold mt-5">
        Contact with Kate:
        <a
          href="mailto:kate@gmail.com"
          className="ml-2 font-normal hover:underline hover:text-indigo-600"
        >
          kate@gmail.com
        </a>
      </p>
      <a href="/" className="mt-3 font-semibold underline text-indigo-600">
        Resume
      </a>
    </div>
  );
};
