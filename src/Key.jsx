

import React from 'react'
import pervaya from '../public/gey/0.png'
import vtor from '../public/gey/1.png'
import tri from '../public/gey/2.png'
import chet from '../public/gey/3.png'
import pyat from '../public/gey/4.png'
import six from '../public/gey/5.png'
import sem from '../public/gey/6.png'
import eight from '../public/gey/7.png'


const KeyComponent = () => {
    const KeyElement = [
        {label: 'Квартиры и офисы', price: 'от 100 000 ₽', image: pervaya},
        {label: 'Магазины и ТЦ', price: 'от 100 000 ₽', image: vtor},
        {label: 'Фитнес центры', price: 'от 150 000 ₽', image: tri},
        {label: 'Бассейны', price: 'от 150 000 ₽', image: chet},
        {label: 'Загородные дома, коттеджи, таунхаусы', price: 'от 200 000 ₽', image: pyat},
        {label: 'Рестораны, кафе, бары', price: 'от 200 000 ₽', image: six},
        {label: 'Стоматологии, клиники', price: 'от 200 000 ₽', image: sem},
        {label: 'Салоны красоты, СПА', price: 'от 100 000 ₽', image: eight}
    ]

    return (
        <div className='grid grid-cols-4 gap-9 '>
            {KeyElement.map((element, index) => (
                <div key={index}>
                    <p className='text-2xl text-[#495D4C]'>{element.price}</p>
                    <img src={element.image} alt="!"></img>
                    <p className='text-180px text-[#78C081]'>{element.label}</p>
                </div>
            ))}
        </div>
    )

}

export default KeyComponent