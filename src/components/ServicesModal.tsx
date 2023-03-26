import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { useEffect, useRef } from 'react'
import { drawLine } from '../utils/canvas'

type Props = {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

type TFormProps = {
  phoneNumber: string
  name: string
}

export const ServicesModal = (props: Props) => {
  const { isOpen, onClose, title, description } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const { register, handleSubmit, reset } = useForm<TFormProps>({
    defaultValues: {
      phoneNumber: '',
      name: ''
    }
  })

  const onSubmit = () => {}

  useEffect(() => {
    const draw = () => {
      if (canvasRef.current) {
        const dimension = [
          document.documentElement.clientWidth,
          document.documentElement.offsetHeight
        ]
        canvasRef.current.width = dimension[0]
        canvasRef.current.height = dimension[1]

        const ctx = canvasRef.current.getContext('2d')
        if (!ctx) {
          return
        }
        const modalOffset = modalRef.current!.getBoundingClientRect()
        const descriptionOffset =
          descriptionRef.current!.getBoundingClientRect()
        const nameInputOffset = nameInputRef.current!.getBoundingClientRect()
        const buttonOffset = buttonRef.current!.getBoundingClientRect()

        drawLine(
          ctx,
          [descriptionOffset.left + 20, descriptionOffset.top],
          [descriptionOffset.left + 20, descriptionOffset.top - 20]
        )

        drawLine(
          ctx,
          [descriptionOffset.left + 20, descriptionOffset.top - 20],
          [modalOffset.left + modalOffset.width, descriptionOffset.top - 20]
        )

        drawLine(
          ctx,
          [
            descriptionOffset.left + 20,
            descriptionOffset.top + descriptionOffset.height
          ],
          [
            descriptionOffset.left + 20,
            buttonOffset.top + buttonOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            descriptionOffset.left + 20,
            buttonOffset.top + buttonOffset.height / 2
          ],
          [buttonOffset.left - 20, buttonOffset.top + buttonOffset.height / 2]
        )

        drawLine(
          ctx,
          [buttonOffset.left - 20, buttonOffset.top + buttonOffset.height / 2],
          [
            buttonOffset.left - 20,
            nameInputOffset.top + nameInputOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            buttonOffset.left - 20,
            nameInputOffset.top + nameInputOffset.height / 2
          ],
          [buttonOffset.left, nameInputOffset.top + nameInputOffset.height / 2]
        )

        drawLine(
          ctx,
          [
            buttonOffset.left + buttonOffset.width,
            nameInputOffset.top + nameInputOffset.height / 2
          ],
          [
            buttonOffset.left + buttonOffset.width + 20,
            nameInputOffset.top + nameInputOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            buttonOffset.left + buttonOffset.width + 20,
            nameInputOffset.top + nameInputOffset.height / 2
          ],
          [
            buttonOffset.left + buttonOffset.width + 20,
            buttonOffset.top + buttonOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            buttonOffset.left + buttonOffset.width + 20,
            buttonOffset.top + buttonOffset.height / 2
          ],
          [
            modalOffset.left + modalOffset.width,
            buttonOffset.top + buttonOffset.height / 2
          ]
        )
      }
    }

    draw()

    setInterval(() => {
      draw()
    }, 100)
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <canvas
        ref={canvasRef}
        className='pointer-events-none fixed top-0 left-0 z-20'
      />
      <div className='fixed inset-0 bg-black/70' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel
          className='mx-auto max-w-4xl border border-black bg-white px-14 py-8'
          ref={modalRef}
        >
          <Dialog.Title className='text-center text-2xl font-medium'>
            {title}
          </Dialog.Title>

          <div className='mt-7' ref={descriptionRef}>
            {description}
          </div>
          <form
            className='ml-auto flex w-full max-w-[300px] flex-col gap-3'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='mt-10 flex flex-col gap-2 text-dark-gray'>
              <span className='block max-w-[200px] text-xs'>
                <sup>*</sup>Получить консультацию вы можете уже сейчас просто
                оставив заявку в один клик
              </span>

              <div ref={nameInputRef}>
                <input
                  type='text'
                  placeholder='Ваше имя'
                  className='bg-[#EEEEEE]'
                  {...register('name', { required: true })}
                />
              </div>
              <input
                type='text'
                placeholder='Ваш телефон'
                className='bg-[#EEEEEE]'
                {...register('phoneNumber', { required: true })}
              />
            </div>

            <button
              className='button primaryButton w-full'
              id='phoneButton'
              type='submit'
              ref={buttonRef}
            >
              Получите консультацию
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
