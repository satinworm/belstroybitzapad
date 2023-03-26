import { MainPageBoxNumber } from './MainPageBoxNumber'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ConsultationModal } from './ConsultationModal'

type TFormProps = {
  phoneNumber: string
}

export const MainPagePhoneSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { register, handleSubmit, watch } = useForm<TFormProps>({
    defaultValues: {
      phoneNumber: ''
    }
  })

  const onSubmit: SubmitHandler<TFormProps> = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <section className='container mt-[90px]' id='phoneSection'>
        <div className='flex w-full justify-between'>
          <div className='w-1/2 p-20 '>
            <h2
              className='mb-10 w-fit whitespace-nowrap text-3xl font-semibold'
              id='phoneHeading'
            >
              Понравились наши работы ?
            </h2>
            <div>
              Для получения консультации достаточно лишь перейти в{' '}
              <span className='font-medium'>телеграм</span> или{' '}
              <span className='font-medium'>инстаграмм</span> по указанным
              ссылкам и получить полную консультацию по всем вопросам онлайн.
              <br />
              <br />
              Наши консультанты предложат вам самые{' '}
              <span className='font-medium'>оптимальные решения</span> ваших
              вопросов и помогут вам сохранить ваше{' '}
              <span className='font-medium'>время</span> и{' '}
              <span className='font-medium'>деньги</span>!
            </div>
            <form
              className='flex w-full max-w-[300px] flex-col gap-3'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='mt-10 text-dark-gray'>
                <span className='mb-2 block max-w-[200px] text-xs'>
                  <sup>*</sup>Получить консультацию вы можете уже сейчас просто
                  оставив заявку в один клик
                </span>
                <input
                  type='text'
                  className='bg-[#EEEEEE] text-black'
                  {...register('phoneNumber', { required: true })}
                />
              </div>
              <button
                className='primaryButton button w-full py-2 text-sm'
                id='phoneButton'
                type='submit'
              >
                Получите консультацию
              </button>
            </form>
          </div>
          <div className='flex w-1/3 items-center gap-[6rem]'>
            <div className='mainPhoneSocial flex flex-col gap-8'>
              <img src='/icons/telegram-black.svg' alt='telegram' />
              <img src='/icons/instagram-black.svg' alt='telegram' />
              <img src='/icons/vk-black.svg' alt='telegram' />
              <img src='/icons/facebook-black.svg' alt='telegram' />
            </div>
            <div className='relative'>
              <MainPageBoxNumber
                number='05'
                id='phoneNumber'
                className='absolute left-0 top-[5rem]  mr-0 -translate-x-10'
              />
              <img src='/phone.svg' alt='phone' id='phoneContainer' />
            </div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        phoneNumber={watch('phoneNumber')}
        accentColor={'black'}
        inputBg={'#676767'}
      />
    </>
  )
}
