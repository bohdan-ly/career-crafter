import { ArrowDown, PlusIcon } from "shared/icons";
import { CCButton, CCInput, CCTextarea } from "shared/ui";
import { Tags } from "./tags";

export const ProjectSettings = () => {
  return (
    <div className="w-full h-full flex flex-col px-10 py-12 overflow-y-auto overflow-x-hidden">
      <h2 className="text-2xl font-bold w-screen">Create/Edit</h2>
      <CCInput
        withIcon={false}
        formClassName="mt-5"
        labelClasses="mb-2 text-base font-light text-gray-500 ml-1"
        placeholder="Project name"
        label="Name"
        className="py-3"
      />
      <CCInput
        withIcon={false}
        formClassName="mt-5"
        labelClasses="mb-2 text-base font-light text-gray-500 ml-1"
        placeholder="Choose up to 3 categories"
        label="Categories"
        className="py-3"
      >
        <ArrowDown className="absolute top-[50%] transform -translate-y-[50%] right-2 stroke-gray-400 w-5 h-5" />
      </CCInput>
      <CCInput
        withIcon={false}
        formClassName="mt-5"
        labelClasses="mb-2 text-base font-light text-gray-500 ml-1"
        placeholder="Project area"
        label="Area"
        className="py-3"
      />
      <CCInput
        withIcon={false}
        formClassName="mt-5"
        labelClasses="mb-2 text-base font-light text-gray-500 ml-1"
        placeholder="Select necessary skills"
        label="Necessary skills"
        className="py-3"
      >
        <ArrowDown className="absolute right-2 stroke-gray-400 top-[50%] transform -translate-y-[50%] w-5 h-5" />
      </CCInput>
      <CCTextarea
        value=""
        onSave={() => {}}
        labelClasses="mb-2 text-base font-light text-gray-500 ml-1"
        label="About project"
        formClassName="mt-5"
      />
      <div className="mt-5 flex flex-col">
        <p className="mb-2 text-base font-light text-gray-500">Tags</p>
        <Tags />
      </div>
      <div className="mt-5 flex flex-col">
        <p className="mb-2 text-base font-light text-gray-500">Photo</p>
        <div className="h-40 w-full bg-gray-100 rounded-lg flex justify-center items-center">
          <div className="flex items-center justify-center rounded-full bg-gray-200 p-3">
            <PlusIcon className="h-6 w-6 stroke-indigo-600" />
          </div>
        </div>
      </div>
      <div className="mt-6 mr-auto">
        <CCButton
          className="py-3 px-8 bg-indigo-600 text-white focus:bg-indigo-900 hover:bg-indigo-700"
          title="Create"
        />
      </div>
    </div>
  );
};
