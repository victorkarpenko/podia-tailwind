import Link from "next/link";

interface DropdownProps {
  label: string;
  items: {
    href?: string;
    label: string;
  }[];
}


const Dropdown = (props: DropdownProps) => {
  const {
    label,
    items,
  } = props;

  return (
    <span className="relative group px-4 py-2 flex items-center">
      {label}
      <i className="ml-[4px] bx bx-chevron-down group-hover:-rotate-180 transition-rotate duration-300" />
      <div className="absolute left-0 top-full w-44 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
        {
          items.map(({ href = '#', label }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-2 hover:bg-gray-50 hover:text-mainBrand"
            >
              {label}
            </Link>
          ))}
      </div>
    </span>
  )
};

export default Dropdown;