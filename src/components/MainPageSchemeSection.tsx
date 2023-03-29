import { MainPageHeading } from './MainPageHeading'
import { ServiceListed } from './ServiceListed'
import { WorkStep } from './WorkStep'

const works = [
  {
    title: 'Заказ услуги',
    image: '/icons/checkbox.svg',
    span: 'col-span-2 lg:col-span-1 w-1/3'
  },
  {
    title: 'Выезд на участок',
    image: '/icons/02.svg',
    span: 'col-span-2 lg:col-span-1 w-1/3'
  },
  {
    title: 'Подписание договора',
    image: '/icons/03.svg',
    span: 'col-span-2 lg:col-span-1 w-1/3'
  },
  {
    title: 'Сдача обьекта',
    image: '/icons/04.svg',
    span: 'col-span-3 lg:col-span-1 w-1/2'
  },
  {
    title: 'Добро пожаловать в дом',
    image: '/icons/05.svg',
    span: 'col-span-3 lg:col-span-1 w-1/2'
  }
]

export const MainPageSchemeSection = () => {
  return (
    <section className='mt-[20px] lg:mt-[90px]'>
      <MainPageHeading
        title='Work'
        subtitle='Cхема работы'
        number='03'
        id='schemeHeading'
        position='left'
      />
      <ul className='my-[30px] grid w-full grid-cols-6 justify-center gap-3 px-[10px] lg:my-[100px] lg:grid-cols-5 lg:gap-8'>
        {works.map((work, index) => (
          <WorkStep index={index} {...work} key={index} />
        ))}
      </ul>
    </section>
  )
}
