import { ConsultationModal } from './ConsultationModal'
import { useState } from 'react'

export const HeaterScopeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className='my-[150px] bg-white'>
        <div
          id='HeaterScopeSection'
          className='container flex h-[740px] items-center justify-center gap-[100px]'
        >
          <div className='flex '>
            <img
              src='/HeaterScope.svg'
              className='h-full w-[650px]'
              alt='Heater System'
            />
          </div>
          <div
            id='HeaterScopeSectionTextBlock'
            className='relative flex h-full flex-col justify-between py-8'
          >
            <div>
              <h3 className='xlHeading text-left leading-[50px] text-black'>
                CФЕРА ПРИМЕНЕНИЯ
                <br /> КЕРАМОГРАНИТНЫХ ОБОГРЕВАТЕЛЕЙ
              </h3>
              <div className='mt-[40px]'>
                <ol className='flex max-w-[500px] list-disc flex-col pl-4'>
                  <li>Дома, дачи, квартиры, гостиницы, бани, сауны</li>
                  <li>Беседки, теплицы</li>
                  <li>Кафе рестораны, бары</li>
                  <li>
                    Офисные, торговые, производственные и складские помещения
                  </li>
                  <li>Медицинские и образовательные учреждения</li>
                  <li>
                    И другие жилые и нежилые помещения различной площади и
                    объема
                  </li>
                </ol>
              </div>
            </div>
            <div>
              <h3 className='xlHeading text-left leading-[50px] text-black'>
                РЕГУЛИРОВКА ТЕМПЕРАТУРЫ
              </h3>
              <div className='mt-[40px] max-w-[500px]'>
                Неотъемлемой частью комплекта безынерционной системы отопления
                “Хитстоун” являются терморегуляторы. Их применение гарантирует
                не только создание здорового и комфортного микроклимата в
                помещении, но и сокращение потребления электроэнергии.
              </div>
            </div>
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
