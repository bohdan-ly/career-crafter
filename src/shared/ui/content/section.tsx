import classNames from "classnames";

type Props = {
  title: string | JSX.Element;
  content: JSX.Element;
  titleClassName?: string;
  className?: string;
};

export const Section: React.FC<Props> = ({
  title,
  content = null,
  className,
  titleClassName,
}) => {
  return (
    <section
      className={classNames(className, {
        "bg-blueGray-50 mt-16 px-4": !className,
      })}
    >
      <h2
        className={classNames(titleClassName, {
          "text-2xl font-extrabold": !titleClassName,
        })}
      >
        {title}
      </h2>
      <div className="w-full">{content}</div>
    </section>
  );
};
