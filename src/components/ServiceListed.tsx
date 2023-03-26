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
      className='bg-norepeat hover:serviceShadow z-10 flex h-[400px] max-w-[318px] flex-col bg-cover py-4 pl-6 transition-all duration-200 hover:scale-y-105 hover:scale-x-105'
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className='mt-auto flex flex-col bg-white/20 p-4 backdrop-blur-sm'>
        <h3 className='min-h-[60px] text-xl text-white'>{title}</h3>
        <div className='mt-2 flex justify-between gap-2 text-xs text-white '>
          <div className='w-1/2'>{shortDescription}</div>
          <ul className='mb-4 flex w-1/2 flex-col gap-1 text-right'>
            {prices.map((price, index) => (
              <li className='whitespace-nowrap' key={index}>
                {price}
              </li>
            ))}
          </ul>
        </div>
        <button
          type='button'
          className='mt-auto w-fit border-b border-b-accent text-xs text-accent'
          onClick={() => onShowMoreClick(title, description)}
        >
          Дополнительная информация
        </button>
      </div>
    </li>
  )
}
