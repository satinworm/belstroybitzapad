import { HeaterMainSection } from '../components/HeaterMainSection'
import { HeaterPageAboutSection } from '../components/HeaterPageAboutSection'
import { HeaterSystemInfo } from '../components/HeaterSystemInfo'
import { HeaterCanvas } from '../components/HeaterCanvas'
import { HeaterScopeSection } from '../components/HeaterScopeSection'
import { HeaterAdvantagesSection } from '../components/HeaterAdvantagesSection'
import { HeaterCalculationSection } from '../components/HeaterCalculationSection'

export const Heater = () => {
  return (
    <>
      <HeaterCanvas />
      <HeaterMainSection />
      <HeaterPageAboutSection />
      <HeaterSystemInfo />
      <HeaterScopeSection />
      <HeaterAdvantagesSection />
      <HeaterCalculationSection />
    </>
  )
}
