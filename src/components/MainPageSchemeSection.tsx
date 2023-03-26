import { MainPageHeading } from "./MainPageHeading";
import { ServiceListed } from "./ServiceListed";
import { WorkStep } from "./WorkStep";

const works = [
  {
    title: "Заказ услуги",
    image: "/icons/checkbox.svg",
  },
  {
    title: "Выезд на участок",
    image: "/icons/02.svg",
  },
  {
    title: "Подписание договора",
    image: "/icons/03.svg",
  },
  {
    title: "Сдача обьекта",
    image: "/icons/04.svg",
  },
  {
    title: "Добро пожаловать в дом",
    image: "/icons/05.svg",
  },
];

export const MainPageSchemeSection = () => {
  return (
    <section className="mt-[90px] container">
      <MainPageHeading
        title="Work"
        subtitle="Cхема работы"
        number="03"
        id="schemeHeading"
        position="left"
      />
      <ul className="my-[100px] grid grid-cols-5 gap-8">
        {works.map((work, index) => (
          <WorkStep index={index} {...work} key={index} />
        ))}
      </ul>
    </section>
  );
};
