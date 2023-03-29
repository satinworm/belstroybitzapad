import clsx from 'clsx'

type Props = {
  index: number
  title: string
  image: string
  span: string
}

export const WorkStep = (props: Props) => {
  const { index, title, image, span } = props
  const mobile = window.innerWidth < 540

  return (
    <li
      className={clsx(
        'mx-auto flex min-w-[100px] flex-col items-center justify-center gap-x-[0px] gap-y-3 lg:gap-6',
        mobile && span
      )}
    >
      <div className='relative'>
        <h4 className='min-w-[110px] text-center text-[11px] font-medium text-black lg:text-base'>
          {title}
        </h4>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-trispace text-[62px] font-light text-black/10 lg:text-7xl'>
          0{index + 1}
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className='h-[15px] w-[15px] lg:h-[30px] lg:w-[30px]'
      />
    </li>
  )
}
