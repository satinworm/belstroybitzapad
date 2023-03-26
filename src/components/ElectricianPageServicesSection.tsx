import { MainPageHeading } from './MainPageHeading'
import { ServiceListed } from './ServiceListed'
import { useEffect, useState } from 'react'
import { ServicesModal } from './ServicesModal'
import { ElectricianPageHeading } from './ElectricianPageHeading'

const services = [
  {
    id: 0,
    title: 'Монтаж люстр \n и светильников',
    description:
      'Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.',
    image: '/electriciansWorks/montazlustr.png',
    prices: ['Цена от 18 BYN']
  },
  {
    id: 1,
    title: 'Установка розеток',
    description:
      'Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.',

    image: '/electriciansWorks/rozetki.png',
    prices: ['Цена от 4 BYN']
  },
  {
    id: 2,
    title: 'Монтаж выключателей',
    description:
      'Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.',

    image: '/electriciansWorks/vikluchatel.png',
    prices: ['Цена от 3 BYN']
  },
  {
    id: 3,
    title: 'Монтаж светодеодной ленты',
    description:
      'Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.',

    image: '/electriciansWorks/lenta.png',
    prices: ['Цена от 5 BYN']
  },
  {
    id: 4,
    title: 'Монтаж автоматов и сборка щитов',
    description:
      'Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.',

    image: '/electriciansWorks/avtomat.png',
    prices: ['Цена от 10 BYN']
  },
  {
    id: 5,
    title: 'Установка электросчетчика',
    description:
      'Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.',

    image: '/electriciansWorks/schetchik.png',
    prices: ['Цена от 12 BYN']
  },
  {
    id: 6,
    title: 'Прокладка кабелей',
    description:
      'Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.',

    image: '/electriciansWorks/kabeli.png',
    prices: ['Цена от 4 BYN']
  },
  {
    id: 7,
    title: 'Монтаж тепловых полов',
    description:
      'Каждый заказчик должен осуществить свою мечту и реализовать все свои желания в продукте, который будет соответствовать его собственному образу жизни, предоставит ему максимальный простор и безупречно организованное пространство для деятельности. Мы поможем вам сделать это.',

    image: '/electriciansWorks/pol.png',
    prices: ['Цена от 10 BYN']
  }
]

export const ElectricianPageServicesSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState<{
    title: string
    description: string
  }>()

  useEffect(() => {
    if (modalData) {
      setShowModal(true)
    }
  }, [modalData])

  const closeModal = () => {
    setShowModal(false)
    setModalData(undefined)
  }

  return (
    <>
      <section className='container' id='electricServicesSection'>
        <ElectricianPageHeading
          title='Services'
          subtitle='Услуги электрика в Гродно и Гродненской области'
          number='01'
          position='left'
          id='electricServicesHeading'
        />
        <ul
          id={'electricServiceList'}
          className='mt-28 grid grid-cols-2 gap-8 lg:grid-cols-4'
        >
          {services.map(service => (
            <ServiceListed
              {...service}
              key={service.id}
              onShowMoreClick={(title, description) => {
                setModalData({
                  title,
                  description
                })
              }}
            />
          ))}
        </ul>
      </section>
      <ServicesModal
        isOpen={showModal}
        onClose={closeModal}
        title={modalData?.title}
        description={modalData?.description}
      />
    </>
  )
}
