import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/hooks/global";
import { CCButton, CCInput } from "shared/ui";
import { selectFridgeProducts } from "store/fridge/selector";
import { setRecipe } from "store/recipes/slice";

export const Hero = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const products = useAppSelector(selectFridgeProducts);

  const handleCloseRecipe = () => {
    dispatch(setRecipe(null));
  };

  return (
    <section className="bg-blueGray-50">
      <div className="overflow-hidden pt-16 flex flex-col">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              {/* <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
                <div className="flex flex-wrap items-center -m-1">
                  <div className="w-auto p-1">
                    <a className="text-sm" href="">
                      &#x1F44B; We are hiring! View open roles
                    </a>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                        stroke="black"
                        strokeWidth="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div> */}
              <h1 className="mb-6 text-center md:text-left text-4xl lg:text-6xl font-bold font-heading md:max-w-xl leading-snug">
                Career Crafter - platform for your career.
              </h1>
              <p className="mb-11 text-center md:text-left text-lg text-gray-900 font-medium md:max-w-md">
                Career Crafter is a comprehensive platform designed to support
                individuals in all aspects of their career development journey..
              </p>
              <div className="flex flex-col -m-2.5 md:mb-20">
                <div className="w-full max-w-[200px] md:w-1/2 p-2.5">
                  <div className="block">
                    <CCButton
                      className="bg-indigo-600 py-4 text-white hover:bg-indigo-700"
                      title="Get start"
                    />
                  </div>
                </div>
                <div className="w-full max-w-[400px] md:w-auto p-2.5">
                  <div className="block">
                    <CCInput />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-full md:w-1/2 p-8">
              <img
                className="transform hover:-translate-y-16 transition ease-in-out duration-1000 w-full object-contain"
                src="https://cdn.discordapp.com/attachments/1008571223543922809/1081854916093562920/Singleton_illustration_of_a_man_writing_drawed_by_single_black__be1cf51b-9d66-4b65-9460-7aa12ea22fd2.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-12 md:justify-center md:items-center">
            <p className="mb-6 text-sm text-gray-500 font-semibold uppercase md:text-lg">
              Trusted and loved by INT20H tech partners
            </p>
            <div className="flex flex-wrap -m-3 md:w-full md:justify-between md:mt-2">
              <div className="w-auto p-3 flex align-middle">
                <img
                  src="https://getlogovector.com/wp-content/uploads/2019/10/macpaw-logo-vector-xs.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="w-auto p-3 flex align-middle">
                <img
                  src="https://uploads-ssl.webflow.com/60ba5f32d62b9b6758e009c1/6299c2fdc4620adabd7c4ae2_Mighty_logo_new.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="w-auto p-3 align-middle">
                <img
                  src="https://supportyourapp.com/img/support-your-app-logo.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="w-auto p-3 flex align-middle">
                <img
                  src="https://www.infopulse.com/images/logo.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
