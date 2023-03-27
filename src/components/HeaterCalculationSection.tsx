import { useEffect, useRef } from 'react'
import { drawLine } from '../utils/canvas'

export const HeaterCalculationSection = () => {
  return (
    <>
      <section
        // id={'XLPipeCalculatorSection'}
        className='relative w-full bg-white'
      >
        <div className='relative h-[1200px] w-full bg-white pt-16'>
          <div
            id={'HeaterCalculatorSection'}
            // style={{ transformStyle: 'preserve-3d' }}
            className='relative mx-auto h-full border-[2px] border-accent bg-white pt-8 xl:max-w-[1128px]'
          >
            <h2 className='text-center font-oswald text-[40px] font-light text-accent'>
              Расчет стоимости отопления на калькуляторе
            </h2>
            <h3 className='mx-auto mt-5 max-w-[725px] text-center text-[16px] text-space-gray'>
              Сделаем расчет отопления от систем XL PIPE быстро и бесплатно, с
              учетом индивидуальных параметров объекта. Для этого заполните
              указанные ниже поля и отправьте заявку на расчет.
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}
