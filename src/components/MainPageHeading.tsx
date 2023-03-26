import clsx from 'clsx'
import { MainPageBoxNumber } from './MainPageBoxNumber'

type Props = {
  title: string
  subtitle: string
  number: string
  position: 'left' | 'right'
  className?: string
  id?: string
}

export const MainPageHeading = (props: Props) => {
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
      <span className='text-7xl font-bold uppercase text-black/5'>{title}</span>
      <h2 className='absolute -bottom-1 right-0 text-2xl font-medium'>
        {subtitle}
      </h2>
      <MainPageBoxNumber number={number} />
    </div>
  )
}
