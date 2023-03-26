import { MainPageHeading } from './MainPageHeading'
import { ServiceListed } from './ServiceListed'
import { ElectricianPageHeading } from './ElectricianPageHeading'
import { ConsultationModal } from './ConsultationModal'
import { useState } from 'react'

export const ElectricPageAboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <section
        className='bg-norepeat bgElectricianAbout mt-[90px] bg-cover'
        id='electricAboutSection'
      >
        <div className=''>
          <div className='container'>
            <ElectricianPageHeading
              title='Description'
              // subtitle='Описание'
              number=''
              position='left'
              id='electricAboutHeading'
              className='-translate-y-2/3'
            />
          </div>
          <div className='flex justify-between'>
            <div className='container w-full max-w-[700px] p-5 py-[50px] pl-[100px] text-[18px] text-black'>
              <div
                className={
                  'pb-[40px] text-[30px] font-medium leading-[37px] tracking-[-0.035em]'
                }
              >
                Уcлуги Электрика в Гродно под ключ и с гарантией качества
              </div>
              <b className='font-semibold'>Срочно</b> потребовались услуги
              электрика ?<br />
              Или нужна помощь в установке электрооборудования ?
              <br />
              <br />
              Обратитесь в компанию{' '}
              <b className='font-semibold'>“БелстройБитЗапад”</b> — наш
              сотрудник будет направлен на ваш объект в течение{' '}
              <b className='font-semibold'>1 часа</b> после заявки!
              <br />
              <br />
              Электромонтажные работы требуют соответствующих{' '}
              <b className='font-semibold'>знаний</b> и
              <b className='font-semibold'> квалификации</b>.
              <br />
              Услуги электрика — область, в которой непрофессионализм{' '}
              <b className='font-semibold'>недопустим</b>, а попытки сэкономить
              могут не только привести <b className='font-semibold'>к порче</b>{' '}
              дорогого оборудования, но и крайне{' '}
              <b className='font-semibold'>опасны для жизни и здоровья</b>.
              <br />
              <br />
              Поэтому рекомендуем довериться <b>профессионалам</b>!
              <br />
              Наши сотрудники обладают соответствующими разрядами и допусками к
              проведению работ.
              <button
                className='primaryButton button hover:buttonShadow mt-16 w-fit transition duration-300'
                id='phoneButton'
                type='button'
                onClick={() => setIsModalOpen(true)}
              >
                Получить консультацию
              </button>
              <div className='relative mt-7 w-fit text-[12px] text-[#676767]'>
                *остаьте заявку и мы с вами
                <br />
                свяжемся в блжайшее время
                <img
                  className='absolute -top-[8px] -right-[40px] h-[28px] w-[38px]'
                  src='/buttonElectricAbout.svg'
                  alt='arrowBtn'
                />
              </div>
            </div>
            <div>
              <img
                src='/electricianLampochka.png'
                className='h-[700px] w-[466px]'
                alt='Lampochka'
              />
            </div>
          </div>
          <div className='container pl-[100px]'></div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        accentColor={'#FCD638'}
        inputBg={'#a5a5a5'}
      />
    </>
  )
}
