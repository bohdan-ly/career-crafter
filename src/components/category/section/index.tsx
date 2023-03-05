type Props = {
  title: string | JSX.Element;
  content: JSX.Element;
};

export const CategorySection: React.FC<Props> = ({ title, content = null }) => {
  return (
    <section className="bg-blueGray-50 mt-16 px-4">
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <div className="w-full">{content}</div>
    </section>
  );
};
