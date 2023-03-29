import { MainPageHeading } from './MainPageHeading'
import { ServiceListed } from './ServiceListed'
import { WorkStep } from './WorkStep'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const projects = [
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Лучшие',
    img: '/portfolio/1.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Лучшие',
    img: '/portfolio/2.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Архитектура',
    img: '/portfolio/3.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Лучшие',
    img: '/portfolio/4.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Ремонт',
    img: '/portfolio/5.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Ремонт',
    img: '/portfolio/6.JPG'
  }
]

const uniqueCategories = projects
  .map(project => project.category)
  .filter((value, index, self) => self.indexOf(value) === index)

export const MainPagePortfolioSection = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedId, setSelectedId] = useState<0 | 1 | 2 | 3>(0)

  const handleShowAllProjectsClick = () => {
    setFilteredProjects(projects)
    setSelectedId(0)
  }

  const handleCategoryClick = (category: string, index: number) => {
    setFilteredProjects(
      projects.filter(project => project.category === category)
    )
    setSelectedId(index)
    alert(selectedId)
  }

  useEffect(() => {
    window.dispatchEvent(new Event('resize'))
  }, [filteredProjects])

  return (
    <section className='container mt-[90px]'>
      <MainPageHeading
        title='Portfolio'
        subtitle='Наше портфолио'
        number='04'
        position='right'
        id='portfolioHeading'
      />
      <div className='mt-[100px] flex flex-col items-center gap-10 lg:flex-row'>
        <div
          className='hidden max-w-max flex-col gap-4 lg:flex'
          id='portfolioList'
        >
          <button
            type='button'
            key={0}
            className={clsx(
              'transition duration-200',
              selectedId === 0
                ? 'portfolioButton_active portfolioButton_shadow'
                : 'portfolioButton hover:portfolioButton_shadow'
            )}
            onClick={handleShowAllProjectsClick}
          >
            Все проекты
          </button>
          {uniqueCategories.map((category, index) => (
            <button
              type='button'
              key={index + 1}
              className={clsx(
                'transition duration-200',
                selectedId === index + 1
                  ? 'portfolioButton_active portfolioButton_shadow'
                  : 'portfolioButton hover:portfolioButton_shadow'
              )}
              onClick={() => handleCategoryClick(category, index + 1)}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className='mx-auto grid grid-cols-3 gap-3'>
          {filteredProjects.map((project, index) => (
            <img
              key={index}
              src={project.img}
              className='h-[200px] w-[230px] bg-gray-300'
            />
          ))}
        </ul>
      </div>
      <div className='mt-20 flex w-full justify-center'>
        <button className='primaryButton button' id='moreProjects'>
          Больше проектов
        </button>
      </div>
    </section>
  )
}
