export const MainPageMainSection = () => {
  return (
    <section className="relative h-screen bg-main-bg bg-cover bg-no-repeat">
      <div className="main-links absolute top-1/2 left-8 z-10 hidden -translate-y-1/2 flex-col gap-8 lg:flex">
        <a href="#">
          <img src="/icons/facebook.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="/icons/instagram.svg" alt="instagram" />
        </a>
        <a href="#">
          <img src="/icons/vk.svg" alt="vk" />
        </a>
      </div>
      <div className="absolute top-1/2 right-0 w-full -translate-y-1/2 text-right">
        <div className="container">
          <h1 className="ml-auto max-w-[900px] font-oswald text-2xl font-extralight leading-[148px] tracking-[-0.035em] text-white lg:text-[100px]">
            Добро пожаловать на сайт БелстройбитЗапад
          </h1>
          <span className="mt-2 font-medium text-accent lg:text-xl">
            Фундамент вашей мечты
          </span>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full translate-y-1/2">
        <div className="container">
          <div className="main-advantages grid w-full grid-cols-2 gap-10 border border-black bg-white p-10 text-sm lg:grid-cols-4">
            <div>
              <img src="/icons/checkbox.svg" alt="checkbox" />
              <span>Специалисты с большим опытом работы 8+ лет</span>
            </div>
            <div>
              <img src="/icons/checkbox.svg" alt="checkbox" />
              <span>Гарантия на фундамент 20 лет и 5 лет на конструктив</span>
            </div>
            <div>
              <img src="/icons/checkbox.svg" alt="checkbox" />
              <span>
                Экономия до 30% на материалах За счет оптовых скидок у
                крупнейших поставщиков
              </span>
            </div>
            <div>
              <img src="/icons/checkbox.svg" alt="checkbox" />
              <span>
                Схема составляется технологом Цена фиксируется в договоре на все
                время выпоняемой услуги
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
