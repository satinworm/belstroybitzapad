import { MainPageHeading } from './MainPageHeading'
import { MainPageBoxNumber } from './MainPageBoxNumber'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

export const Footer = () => {
  const location = useLocation()
  const isMainPage = location.pathname === '/'
  const isPipePage = location.pathname.includes('electrical-works/xl-pipe')
  const isElectricPage = location.pathname.includes(
    'electrical-works/ElectricianServices'
  )

  return (
    <footer
      className={clsx(
        'bg-[#252525]',
        (isPipePage || isElectricPage) && '!bg-white'
      )}
    >
      <div className='container relative flex justify-between px-5 pt-16 pb-7'>
        <div className='w-1/3'>
          {!isPipePage && (
            <div className='absolute -left-6 top-5 flex items-center'>
              <h2
                className={clsx(
                  'text-7xl font-bold uppercase text-white/5',
                  isElectricPage && 'text-[#f2f2f2]'
                )}
              >
                Contacts
              </h2>
              {!isPipePage && !isElectricPage && (
                <MainPageBoxNumber number='07' contrast />
              )}
            </div>
          )}

          <div
            className={clsx(
              'mt-12 flex flex-col gap-5 text-2xl text-[#E8E8E8]',
              isPipePage && 'text-xl-accent',
              isElectricPage && 'text-[#000001]'
            )}
          >
            <span className='block font-medium tracking-[-0.035em]'>
              Контакты
            </span>
            {!isPipePage && !isElectricPage && (
              <span className='block'>Наш адрес:</span>
            )}
          </div>

          <address
            id='footerAddress'
            style={{
              fontStyle: isPipePage ? 'normal' : 'italic'
            }}
            className={clsx(
              'text-[#A5A5A5]',
              isPipePage && '!text-xl-accent',
              isElectricPage && 'text-[#000001]'
            )}
          >
            <div>
              <img
                src={
                  (isElectricPage && '/icons/location-yellow.svg') ||
                  (isPipePage && '/icons/location_xl-pipe.svg') ||
                  (isMainPage && '/icons/location-yellow.svg')
                }
                alt='location'
              />
              <span>г. Гродно ул. Пушкина д.13 оф. 20</span>
            </div>
            <div className='items-start'>
              <img
                src={
                  (isElectricPage && '/icons/call-yellow.svg') ||
                  (isPipePage && '/icons/call_xl-pipe.svg') ||
                  (isMainPage && '/icons/call-yellow.svg')
                }
                alt='call'
              />
              <div className='flex flex-col gap-2'>
                <a href='tel:+375290000000'>+375 (29) 000-00-00</a>
              </div>
            </div>
            <div>
              <img
                src={
                  (isElectricPage && '/icons/clock-yellow.svg') ||
                  (isPipePage && '/icons/clock_xl-pipe.svg') ||
                  (isMainPage && '/icons/clock-yellow.svg')
                }
                alt='clock'
              />
              <span>Пн-пт с 10.00 до 18.00</span>
            </div>
            <div>
              <img
                src={
                  (isElectricPage && '/icons/mail-yellow.svg') ||
                  (isPipePage && '/icons/mail_xl-pipe.svg') ||
                  (isMainPage && '/icons/mail-yellow.svg')
                }
                alt='mail'
              />
              <a href='mailto:belstroybutzapad@gmail.com'>
                belstroybutzapad@gmail.com
              </a>
            </div>
          </address>
        </div>

        <iframe
          src='https://yandex.by/map-widget/v1/-/CCUZZSgecA'
          height='400'
          // frameBorder='1'
          allowFullScreen={true}
          className='w-2/3'
        />
      </div>
    </footer>
  )
}
