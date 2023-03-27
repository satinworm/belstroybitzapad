import { SubmitHandler, useForm } from 'react-hook-form'
type TFormProps = {
  phoneNumber: string
  name: string
}
const arr = [
  {
    title: 'Эффективный',
    description: 'равномерный обогрев'
  },
  {
    title: 'Комфортный и здоровый',
    description: 'микроклимат'
  },
  {
    title: 'Стильный внешний вид,',
    description: 'компактность и бесшумность'
  },
  {
    title: 'Простая интеграция в,',
    description: '"умный дом".'
  },
  {
    title: 'Возможность отопления',
    description: 'объектов с ограниченными возможностями местной сети'
  },
  {
    title: 'Сокращение затрат на закупку ',
    description: 'оборудования, монтаж и обслуживание'
  },
  {
    title: 'Сокращение ежемесячных платежей',
    description: ' за энергоресурсы в 2-4 раза'
  },
  {
    title: 'Программирование режимов',
    description: 'работы и возможность удаленного управления'
  },
  {
    title: 'Доступ к статистике ',
    description: 'энергопотребления'
  }
]
export const HeaterAdvantagesSection = () => {
  return (
    <section className='z-10 my-14'>
      <div className='container z-10 mt-[115px] max-w-[1180px] border-[2px] border-accent px-[25px] pt-[26px] pb-[75px]'>
        <h2 className='text-center font-oswald text-3xl font-light tracking-[-0.035em]'>
          Преимущества керамогранитных обогревателей
        </h2>
        <div className='grid grid-cols-3 place-items-baseline gap-5'>
          {arr.map((item, index) => (
            <div key={index} className='mt-[50px] flex gap-1.5'>
              <div className='h-[70px] w-[70px] bg-accent text-right font-oswald text-[80px] font-light leading-[70px] text-white'>
                {index + 1}
              </div>
              <div className='flex max-w-[280px] flex-col text-[14px]'>
                <span className='font-medium'>{item.title}</span>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
