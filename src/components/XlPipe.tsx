import { useState } from 'react'
import { usePopper } from 'react-popper'

type Props = { image: string; name: string; info: string }

export const XlPipe = (props: Props) => {
  const { image, name, info } = props

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    placement: 'right'
  })
  const [isHover, setIsHover] = useState(false)

  return (
    <div ref={setReferenceElement} className='relative bg-[#e6e7e8]'>
      <span className='mb-px block text-center text-[12px] font-medium text-[#939598]'>
        {name}
      </span>
      <div className='z-30' style={{ position: 'inherit' }}>
        <img
          src={image}
          alt={name}
          className='h-[53px] w-[188px]'
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
        />
      </div>
      {/*inset: 0px auto auto 0px;*/}
      {/*transform: translate3d(160px, -40.5px, 0);*/}
      {isHover && (
        <div
          ref={setPopperElement}
          style={{
            transform: 'translate3d(172px, -42.5px, 0)',
            inset: '0px auto auto 0px'
          }}
          className='absolute z-40'
          {...attributes.popper}
        >
          <div className='relative z-40'>
            {/*<div className=' rounded-lg border border-xl-accent bg-white p-4 text-sm'>*/}
            <div className='msgBg h-[95px] w-[210px] p-4 text-[12px] font-medium text-[#939598]'>
              {name}
              <div className='mt-1'>{info}</div>
            </div>
            {/*<div ref={setArrowElement} style={styles.arrow} className='arrow' />*/}
          </div>
        </div>
      )}
    </div>
  )
}
