import classNames from "classnames";
import { CCAvatar } from "shared/ui";

export const ProfileHeader = ({ type }) => {
  return (
    <section className="h-60 relative">
      {type === "recruiter" ||
        (type === "investor" && (
          <div className="absolute left-[50%] md:w-full top-0 bg-gradient-to-br from-cyan-500 to-indigo-700 w-screen h-full transform -translate-x-[50%]" />
        ))}

      <div className="flex relative z-10 flex-col w-full justify-center items-center h-full">
        <CCAvatar
          className="w-28 h-28"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        />
        <h2
          className={classNames("mt-2 text-2xl font-extrabold", {
            "text-white": type === "recruiter" || type === "investor",
          })}
        >
          Marko
        </h2>
        <p
          className={classNames("mt-1 font-light text-gray-600 capitalize", {
            "text-white": type === "recruiter" || type === "investor",
          })}
        >
          {type || "Front-end"}
        </p>
      </div>
    </section>
  );
};
