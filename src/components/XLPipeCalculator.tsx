import { useEffect, useRef } from 'react'
import { drawLine } from '../utils/canvas'

export const XLPipeCalculator = () => {
  return (
    <>
      <section
        // id={'XLPipeCalculatorSection'}
        className='relative z-[5] w-full bg-xl-bg'
      >
        <div className='relative z-[5] h-[1200px] w-full bg-xl-bg pt-16'>
          <div
            id={'XLPipeCalculatorSection'}
            style={{ transformStyle: 'preserve-3d' }}
            className='xlMagic relative mx-auto h-full bg-[white] pt-8 xl:max-w-[1128px]'
          >
            <h2 className='text-center font-oswald text-[40px] font-light text-xl-accent'>
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
