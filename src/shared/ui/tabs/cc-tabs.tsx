import classNames from "classnames";
import React from "react";
import { Star } from "shared/icons";

type Tab = {
  title: string;
  icon?: JSX.Element | null;
  content: JSX.Element | null;
};

type Props = {
  className?: string;
  tabs: Tab[];
};

export const CCTabs: React.FC<Props> = ({ className, tabs = null }) => {
  const [curTabIdx, setCurTabIdx] = React.useState(0);
  const [tabsList, setTabsList] = React.useState<Tab[]>([]);

  React.useEffect(() => {
    if (tabs) {
      setTabsList(tabs);
      setCurTabIdx(0);
    }
  }, [tabs]);

  return (
    <div className="flex flex-col w-full">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex overflow-y-auto -mb-px text-sm font-medium text-center text-gray-500">
          {tabsList.map((tab, idx) => (
            <li
              key={tab.title}
              onClick={() => setCurTabIdx(idx)}
              className={classNames(
                "inline-flex p-4 border-b-2 cursor-pointer rounded-t-lg md:hover:text-gray-600 md:hover:border-gray-300 group",
                {
                  "border-transparent": idx !== curTabIdx,
                  "border-indigo-600 text-indigo-600": idx === curTabIdx,
                }
              )}
            >
              {!!tab.icon &&
                React.cloneElement(tab.icon, {
                  className: classNames("mr-2", tab.icon.props.className, {
                    "stroke-indigo-600": idx === curTabIdx,
                  }),
                })}
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 w-full">{tabsList[curTabIdx]?.content || null}</div>
    </div>
  );
};
