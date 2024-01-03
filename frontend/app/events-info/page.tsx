"use client"

import Card from '@/components/Card'
import { useState } from 'react'

const page = () => {
    const [showCard, setShowCard] = useState<number>(8)
    const [data, setData] = useState<string>("")

    // const showMore = () => {
    //     setShowCard(prev => prev + 8) // Увеличить количество отображаемых метеоритов на 5 при нажатии на кнопку
    //   }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value)
      }

  return (
    <div className='container_page'>
        <input className='mb-[2.5rem]' placeholder='Country filter' value={data} onChange={handleInputChange} />

        <div className='grid-card'>
          <Card count_element_show={showCard} filter={data}></Card>
        </div>
    </div>
  )
}

export default page