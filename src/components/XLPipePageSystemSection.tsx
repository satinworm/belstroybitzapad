import { XlPipe } from './XlPipe'
import { ConsultationModal } from './ConsultationModal'
import { SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

const pipes = [
  {
    id: 0,
    name: 'XL PIPE-005 (7 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_1.svg'
  },
  {
    id: 1,
    name: 'XL PIPE-010 (14 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_2.png'
  },
  {
    id: 2,
    name: 'XL PIPE-015 (21 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_3.png'
  },
  {
    id: 3,
    name: 'XL PIPE-025 (28 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_4.png'
  },
  {
    id: 4,
    name: 'XL PIPE-030 (35 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_5.png'
  },
  {
    id: 5,
    name: 'XL PIPE-040 (42 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_6.png'
  },
  {
    id: 6,
    name: 'XL PIPE-050 (56 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_7.png'
  },
  {
    id: 7,
    name: 'XL PIPE-060 (70 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_8.png'
  },
  {
    id: 8,
    name: 'XL PIPE-060 (84 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_8.png'
  }
]

export const XLPipePageSystemSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id='XLPipePageSystemSection' className='bg-xl-bg'>
        <div className='container pt-20 '>
          <h2 className='xlHeading mb-10'>Как выглядит система XL PIPE</h2>
          <div className='flex items-center justify-end gap-12'>
            <div className='mr-[52px] flex flex-col'>
              {pipes.map(pipe => (
                <XlPipe key={pipe.id} {...pipe} />
              ))}
            </div>
            <div className='z-[40] mt-auto flex'>
              <img src='/girl.png' alt='girl' />
            </div>
            <div className='z-30 w-full max-w-[515px] max-w-lg border border-xl-accent bg-white py-6 px-12'>
              <h2 className='xlHeading'>Система XL PIPE</h2>
              <div className='mt-[50px] text-left text-[18px]'>
                Представляет собой трубу диаметром 20 мм из полиэтилена высокой
                прочности с жидкостью и греющим кабелем внутри. <br />
                <br /> Поставляется в готовом виде: 9 моделей длиной от 7 до 84
                м.
                <br /> <br />
                Одна система обогревает площадь от 3 до 25 м². В одной комнате
                можно монтировать несколько систем.
              </div>
              <button
                className='button xlButton mx-auto mt-6 block'
                type='submit'
                onClick={() => setIsModalOpen(true)}
              >
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        accentColor={'#7C3C82'}
        inputBg={'#A5A5A5'}
      />
    </>
  )
}
