import { InvestorsCrawl } from "./investors-crawl";

export const Investors = () => {
  return (
    <div className="flex flex-col w-full space-y-4 pt-5 overflow-hidden">
      <InvestorsCrawl className="transform" />
      <InvestorsCrawl className="transform" rtl />
    </div>
  );
};
