import { ClassNames } from "@emotion/react";
import classNames from "classnames";
import { roles } from "pages/profile";
import { Behance, Github } from "shared/icons";
import { CCAvatar } from "shared/ui";

export const ProfileHeader: React.FC<{ type: string }> = ({ type }) => {
  const bgClassName =
    type == "investor"
      ? "from-cyan-200 to-indigo-800"
      : type == "recruiter"
      ? "from-emerald-100 to-purple-200"
      : "";

  return (
    <section
      className={classNames("h-60 relative", {
        "h-72": type === roles.recruiter,
      })}
    >
      {!!bgClassName && (
        <div
          className={classNames(
            `absolute left-[50%] md:w-full top-0 bg-gradient-to-br w-screen h-full transform -translate-x-[50%]`,
            bgClassName
          )}
        />
      )}

      <div className="flex relative z-10 flex-col w-full justify-center items-center h-full">
        <CCAvatar
          className="w-28 h-28 object-cover"
          src={
            (type === "recruiter" &&
              "https://images.unsplash.com/photo-1618088044996-29f175e9d672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80") ||
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

        {type == "recruiter" && (
          <div className="flex space-x-4 mt-3">
            <Github className="stroke-none" />
            <Behance className="stroke-none" height="24px" width="24px" />
            <Github className="stroke-none" />
          </div>
        )}
      </div>
    </section>
  );
};
