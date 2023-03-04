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
      <div className="overflow-hidden pt-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="mb-6 text-4xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
                GoIT- platform for IT projects
              </h1>
              <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-wrap -m-2.5 mb-20">
                <div className="w-full md:w-auto p-2.5">
                  <div className="block">
                    <CCButton title="Get start" />
                  </div>
                </div>
                <div className="w-full md:w-auto p-2.5">
                  <div className="block">
                    <CCInput />
                  </div>
                </div>
              </div>
              <p className="mb-6 text-sm text-gray-500 font-semibold uppercase">
                Trusted and loved by INT20H tech partners
              </p>
              <div className="flex flex-wrap -m-3">
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
            <div className="w-full md:w-1/2 p-8">
              <img
                className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                src="flaro-assets/images/headers/header.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
