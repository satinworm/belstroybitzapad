import { ConsultationModal } from './ConsultationModal'
import { useState } from 'react'

export const HeaterSystemInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id='HeaterSystemInfoSection' className='my-[72px] bg-white'>
        <div className='mr-auto flex h-[740px] items-center justify-end'>
          <div
            id='HeaterSystemInfoFirstBlock'
            className='relative flex h-full flex-col pt-[96px]'
          >
            <h3 className='xlHeading text-left leading-[50px] text-black'>
              БЕЗИНЕРЦИОННАЯ СИСТЕМА
              <br /> КЕРАМОГРАНИТНОГО ОТОПЛЕНИЯ
            </h3>
            <div className='mt-[60px] max-w-[715px] text-justify'>
              В качестве нагревающего элемента используется уникальный
              запатентованный электропроводящий состав, который обеспечивает
              равномерный нагрев керамогранитной плиты и последующую передачу
              тепла на расстояние.
              <br />
              <br /> Благодаря выделяемому количеству тепла, мощность системы
              “Хитстоун” для обогрева и поддержания комфортной температуры в
              помещении в 2-4 раза меньше, чем у имеющихся на сегодняшний день
              альтернативных систем отопления.
              <br />
              <br />
              Все компоненты системы отопления “Хитстоун” безопасны для здоровья
              человека и окружающей среды как в процессе производства, так и в
              процессе эксплуатации.
            </div>
            <button
              className='primaryButton button hover:buttonShadow absolute bottom-0 left-1/2 z-[30] mt-16 w-fit translate-y-1/2 -translate-x-1/2 transition duration-300'
              id='phoneButton'
              type='button'
              onClick={() => setIsModalOpen(true)}
            >
              Получить консультацию
            </button>
            <div className='absolute -bottom-[66px] left-1/2 mt-7 w-fit -translate-x-1/2 text-[12px] text-[#676767]'>
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
          <div className='flex'>
            <img
              src='/HeaterSystem.png'
              className='w-[600px]'
              alt='Heater System'
            />
          </div>
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
