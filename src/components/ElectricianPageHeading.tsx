import clsx from 'clsx'
import { MainPageBoxNumber } from './MainPageBoxNumber'

type Props = {
  title: string
  subtitle?: string
  number: string
  position: 'left' | 'right'
  className?: string
  id?: string
}

export const ElectricianPageHeading = (props: Props) => {
  const { title, subtitle, number, position, className, id } = props

  return (
    <div
      id={id}
      className={clsx(
        'relative flex w-fit items-center gap-2',
        position === 'right'
          ? '-right-10 ml-auto flex-row-reverse'
          : 'ml-none -left-10 flex-row',
        className
      )}
    >
      <span className='absolute text-7xl font-bold uppercase text-black/5'>
        {title}
      </span>
      <h2 className='absolute -bottom-[51px] left-[100px] w-fit text-2xl font-medium xl:whitespace-nowrap'>
        {subtitle}
      </h2>
    </div>
  )
}
