export interface AboutItem {
  icon: string;
  title: string;
  description: string;
}

const AboutItem = (props: AboutItem) => {
  const {
    icon,
    title,
    description,
  } = props;

  return (
    <div className="AboutItem text-center flex-1">
      <i className={`bx bx-${icon} inline-block p-[10px] text-xl bg-fury rounded-full mb-3`} />
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <p className="mb-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default AboutItem;