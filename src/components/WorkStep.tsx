type Props = {
  index: number;
  title: string;
  image: string;
};

export const WorkStep = (props: Props) => {
  const { index, title, image } = props;

  return (
    <li className="flex flex-col gap-6 justify-center items-center">
      <div className="relative">
        <h4 className="text-black font-medium">{title}</h4>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-trispace text-7xl text-black/10 font-light">
          0{index + 1}
        </div>
      </div>
      <img src={image} alt={title} className="h-[30px] w-[30px]" />
    </li>
  );
};
