type Props = {
  title: string
  shortDescription?: string
  description: string
  image: string
  prices: Array<string>
  onShowMoreClick: (title: string, description: string) => void
}

export const ServiceListed = (props: Props) => {
  const {
    title,
    shortDescription,
    image,
    prices,
    onShowMoreClick,
    description
  } = props

  return (
    <li
      className='bg-norepeat hover:serviceShadow z-10 flex h-[180px] max-w-[318px] flex-col bg-cover pl-2 transition-all duration-200 hover:scale-y-105 hover:scale-x-105 lg:h-[400px] lg:py-4 lg:pl-6'
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className='mt-auto flex flex-col bg-white/20 p-[5px] backdrop-blur-sm lg:p-4'>
        <h3 className='text-[12px] text-white lg:min-h-[60px] lg:text-xl'>
          {title}
        </h3>
        <div className='mt-2 flex justify-between gap-2 text-xs text-white '>
          <div className='w-1/2'>{shortDescription}</div>
          <ul className='mb-2 mr-2 flex w-1/2 flex-col gap-1 text-right lg:mb-4'>
            {prices.map((price, index) => (
              <li className='whitespace-nowrap text-[11px]' key={index}>
                {price}
              </li>
            ))}
          </ul>
        </div>
        <button
          type='button'
          className='mt-auto w-fit border-b border-b-accent text-[9px] text-accent lg:text-xs'
          onClick={() => onShowMoreClick(title, description)}
        >
          Дополнительная информация
        </button>
      </div>
    </li>
  )
}
