import { Checkmark } from "shared/icons";
import { CCButton } from "shared/ui";

export const Team = () => {
  return (
    <div className="">
      <div className="relative w-full overflow-hidden h-28 mt-4">
        <div className="max-w-md list-inside gap-y-3 flex space-x-4 absolute top-0 left-[50%] -translate-x-[50%]">
          <div className="flex flex-col justify-center">
            <div className="w-20 h-20">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              />
            </div>
            <span className="text-center mt-1 font-semibold">Sara</span>
          </div>
          <div className="flex flex-col justify-center">
            <div className="w-20 h-20">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              />
            </div>
            <span className="text-center mt-1 font-semibold">David</span>
          </div>
          <div className="flex flex-col justify-center">
            <div className="w-20 h-20">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              />
            </div>
            <span className="text-center mt-1 font-semibold">Anna</span>
          </div>
          <div className="flex flex-col justify-center">
            <div className="w-20 h-20">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              />
            </div>
            <span className="text-center mt-1 font-semibold">Ludwig</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-4">
        <div className="space-x-5">
          <CCButton title="<-" className="rounded-full w-8 h-8" />
          <CCButton title="->" className="rounded-full w-8 h-8" />
        </div>
      </div>
      <CCButton
        title="Join +"
        className="w-full bg-indigo-600 text-white py-2.5 mt-3"
      />
    </div>
  );
};
