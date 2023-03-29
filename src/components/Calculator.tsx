import { FC, useState } from 'react'
import clsx from 'clsx'

interface PriceRange {
  minArea: number
  maxArea: number
  price: number
}

interface RoomPrice {
  areaRange: [number, number]
  price: number
}

const PRICE_TABLE: PriceRange[] = [
  { minArea: 1, maxArea: 5.5, price: 209 },
  { minArea: 5.6, maxArea: 8.3, price: 418 },
  { minArea: 8.4, maxArea: 11.1, price: 627 },
  { minArea: 11.2, maxArea: 13.9, price: 836 },
  { minArea: 14, maxArea: 16.7, price: 1046 },
  { minArea: 16.8, maxArea: 19.5, price: 1256 },
  { minArea: 19.6, maxArea: 22.3, price: 1444 },
  { minArea: 22.4, maxArea: 25.1, price: 1626 },
  { minArea: 25.2, maxArea: 27.9, price: 1802 },
  { minArea: 28, maxArea: 33.5, price: 1928 },
  { minArea: 33.6, maxArea: Infinity, price: 2150 }
]

const Calculator: FC = () => {
  const [numRooms, setNumRooms] = useState(1)
  const [roomAreas, setRoomAreas] = useState<number[]>([])

  const handleNumRoomsChange = (num: number) => {
    setNumRooms(num)
    setRoomAreas(new Array(num).fill(0))
  }

  const handleAreaChange = (index: number, area: number) => {
    const newRoomAreas = [...roomAreas]
    newRoomAreas[index] = area
    setRoomAreas(newRoomAreas)
  }

  const calculateRoomPrice = (area: number) => {
    for (const { minArea, maxArea, price } of PRICE_TABLE) {
      if (area >= minArea && area <= maxArea) {
        return price
      }
    }
    return 0
  }

  const totalRoomPrice = roomAreas.reduce(
    (total, area) => total + calculateRoomPrice(area),
    0
  )

  return (
    <div className='mt-[30px] flex flex-col items-center'>
      <div className='mb-4 flex'>
        {[1, 2, 3, 4, 5].map((num, index) => (
          <div
            key={num}
            className={`mr-4 flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center px-[15px] py-[10px] text-white transition duration-300 ${
              num === numRooms ? 'bg-xl-accent' : 'bg-[#D9D9D9]'
            }`}
            onClick={() => handleNumRoomsChange(num)}
          >
            <span className='font-oswald text-[40px] font-light'>{num}</span>
            <span className=' text-[18px] font-light'>
              Комнат{index === 0 && 'а'}
              {index === 1 && 'ы'}
              {index === 2 && 'ы'}
              {index === 3 && 'ы'}
            </span>
          </div>
        ))}
      </div>
      {numRooms > 0 && (
        <div
          style={{
            backgroundImage: `url("/XLPipeCalculator/${numRooms}room.svg")`
          }}
          className={`relative mx-auto flex h-[666px] w-[621px] flex-col border-2 border-xl-accent bg-no-repeat`}
        >
          {[...Array(numRooms)].map((_, index) => (
            <div
              key={index}
              id={`calcInput_${index + 1}`}
              className='absolute mb-4 flex flex-col'
            >
              <input
                type='number'
                id={`room-${index + 1}`}
                value={roomAreas[index]}
                defaultValue={Math.floor(0).toFixed(1)}
                min={0}
                className={clsx(
                  'relative h-[40px] w-[90px] border-[2px] border-[#7C3C82] pl-2.5 pr-1 text-center text-[18px] focus-visible:outline-xl-accent'
                )}
                onChange={e => handleAreaChange(index, e.target.value)}
              />
              <div>
                <label
                  htmlFor={`room-${index + 1}`}
                  className='text-[18px] text-xl-accent'
                >
                  Комната {index + 1}
                </label>
                <span className='absolute top-[9px] right-[16px] ml-1'>
                  м<sup>2</sup>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/*<div className='mb-4'>*/}
      {/*  {numRooms && (*/}
      {/*    <img*/}
      {/*      src={`/XLPipeCalculator/${numRooms}room.svg`}*/}
      {/*      className='h-[425px] w-[400px]'*/}
      {/*      alt='1 room'*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</div>*/}
      <div className='mt-4 text-[18px] font-medium text-black'>
        Приблизительная цена:{' '}
        <strong className='text-[24px] text-xl-accent'>
          {totalRoomPrice.toFixed(0)}
        </strong>{' '}
        BYN
      </div>
    </div>
  )
}

export default Calculator
