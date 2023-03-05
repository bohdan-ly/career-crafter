import { InvestorsCrawl } from "./investors-crawl";

export const Investors = () => {
  return (
    <div className="flex flex-col w-full space-y-4 pt-5">
      <InvestorsCrawl className="transform -translate-x-full md:translate-x-0" />
      <InvestorsCrawl className="transform translate-x-1/3 md:translate-x-0" />
      <InvestorsCrawl className="transform -translate-x-full md:translate-x-0" />
    </div>
  );
};
