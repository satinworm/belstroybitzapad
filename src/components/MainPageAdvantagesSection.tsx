import { MainPageHeading } from "./MainPageHeading";
import { ServiceListed } from "./ServiceListed";
import { WorkStep } from "./WorkStep";
import { MainPageAdvantage } from "./MainPageAdvantage";

const advantages = [
  {
    title: "Цена - качество",
    description:
      "Только проверенные материалы для безопасности и долговечности дома",
    image: "/coins.svg",
    id: 0,
  },
  {
    id: 1,
    title: "Строительство под ключ",
    description:
      "Полный цикл работ - от проекта до финешной отделки готового дома",
    image: "/keys-with-leaves.svg",
  },
  {
    id: 2,
    title: "Постоянные бригады",
    description: "Все наши мастера работают с нами более 3-х лет",
    image: "/brigades.svg",
  },
  {
    id: 3,
    title: "Удобная система оплаты",
    description: "Поэтапная оплата комплекса работ",
    image: "/finance.svg",
  },
];

export const MainPageAdvantagesSection = () => {
  return (
    <section className="my-[90px] container" id="advantagesSection">
      <MainPageHeading
        title="Advantages"
        subtitle="Cхема работы"
        number="06"
        id="advantagesHeading"
        position="right"
      />
      <ul className="grid grid-cols-4 gap-10 mt-[100px]">
        {advantages.map((advantage) => (
          <MainPageAdvantage {...advantage} key={advantage.id} />
        ))}
      </ul>
    </section>
  );
};
