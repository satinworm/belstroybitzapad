type Props = {
  title: string;
  image: string;
  description: string;
};

export const MainPageAdvantage = (props: Props) => {
  const { title, image, description } = props;

  return (
    <li className="flex flex-col items-center  gap-6 text-center">
      <img src={image} alt={title} className="w-[80px] h-[80px] flex-none" />
      <h5 className="text-2xl ">{title}</h5>
      <div className="text-[#A5A5A5] text-xs mt-auto ">{description}</div>
    </li>
  );
};
