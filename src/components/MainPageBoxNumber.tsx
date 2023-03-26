import clsx from "clsx";

type Props = {
  number: string;
  className?: string;
  contrast?: boolean;
  id?: string;
};

export const MainPageBoxNumber = (props: Props) => {
  const { number, className, contrast, id } = props;
  

  return (
    <div
      id={id}
      className={clsx(
        " relative text-lg font-medium h-[30px] w-[30px] overflow-hidden font-bold",
        contrast ? "bg-white text-black" : "bg-black  text-white",
        className
      )}
      
    >
      <span className="absolute -bottom-2.5 right-0">{number}</span>
    </div>
  );
};
