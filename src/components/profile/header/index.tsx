import { ClassNames } from "@emotion/react";
import classNames from "classnames";
import { CCAvatar } from "shared/ui";

export const ProfileHeader: React.FC<{ type: string }> = ({ type }) => {
  return (
    <section className="h-60 relative">
      {type === "recruiter" ||
        (type === "investor" && (
          <div
            className={classNames(
              "absolute left-[50%] md:w-full top-0 bg-gradient-to-br w-screen h-full transform -translate-x-[50%]",
              {
                "from-cyan-200 to-indigo-800": type && type == "investor",
                // @ts-ignore
                "from-cyan-100 to-indigo-700": type && type == "recruiter",
              }
            )}
          />
        ))}

      <div className="flex relative z-10 flex-col w-full justify-center items-center h-full">
        <CCAvatar
          className="w-28 h-28 object-cover"
          src={
            (type === "recruiter" &&
              "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ||
            (type === "investor" &&
              "https://images.pexels.com/photos/3624854/pexels-photo-3624854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ||
            "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          }
        />
        <h2
          className={classNames("mt-2 text-2xl font-extrabold", {
            "text-white": type === "investor",
          })}
        >
          {(type === "recruiter" && "Oleh") ||
            (type === "recruiter" && "investor") ||
            "Marko"}
        </h2>
        <p
          className={classNames("mt-1 font-light text-gray-600 capitalize", {
            "text-white": type === "investor",
          })}
        >
          {type || "Front-end"}
        </p>
      </div>
    </section>
  );
};
