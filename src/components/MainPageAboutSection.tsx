import { MainPageHeading } from "./MainPageHeading";
import { ServiceListed } from "./ServiceListed";

export const MainPageAboutSection = () => {
  return (
    <section
      className="mt-[90px] bg-nature-bg bg-norepeat bg-cover"
      id="aboutSection"
    >
      <div className="container">
        <MainPageHeading
          title="about"
          subtitle="О компании"
          number="02"
          position="right"
          id="aboutHeading"
          className="-translate-y-2/3"
        />
        <div className="p-[100px]">
          <div className="w-2/3 p-5 bg-white/80 text-black ml-auto text-lg">
            Компания ООО «Белстройбитзапад» основана в 2006 году как
            организация, основной сферой деятельности которой является
            строительство жилых, офисных, торговых зданий.
            <br />
            <br />
            Мы предлагаем продукт, в котором нуждаются люди.
            <br />
            <br />
            Мы любим своё дело, выполняем работу качественно, постоянно
            совершенствуемся, используя современные технологии, и, конечно,
            соблюдаем сроки и договоренности.
            <br />
            <br />
            Каждый заказчик должен осуществить свою мечту и реализовать все свои
            желания в продукте, который будет соответствовать его собственному
            образу жизни, предоставит ему максимальный простор и безупречно
            организованное пространство для деятельности.
          </div>
        </div>
      </div>
    </section>
  );
};
