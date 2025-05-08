import React from 'react';
import TwoColumns from '@/ui/TwoColumns/TwoColumns';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import './WhyChooseUs.scss';
import { FadeIn } from '@/components/Animation/FadeIn';

const LIST_ITEM = [
  "Non ci limitiamo a offrire servizi in cambio di un compenso",
  "Il nostro successo inizia dal tuo",
  "Operativi 7 giorni su 7"
]

export default function WhyChooseUs() {
  return (
    <TwoColumns directionReverse>
      <div className="text-content">
        <FadeIn>
          <h2>Perché scegliere noi</h2>
        </FadeIn>
        <FadeIn>
          <p className='my-regular'>Saremo tuoi partner: ti accompagneremo nei momenti di successo e ci risolleveremo nei momenti di crescita. Il nostro obiettivo è costruire insieme risultati duraturi, non semplici progetti a breve termine</p>
        </FadeIn>
        <ul className='my-l check-list'>
          {
            LIST_ITEM.map((itemText, index) => (
              <FadeIn key={index} delay={index * .2} direction='left'>
                <li>
                  <FaCheckCircle className='icon' />
                  <span className="text">{itemText}</span>
                </li>
              </FadeIn>
            ))
          }
        </ul>
      </div>
      <FadeIn direction='pop'>
        <div className="side-content" style={{ width: '480px' }}>
          <div className="img">
            <Image
                src="/choose-us.png"
                alt="Why choose us"
                fill
                style={{ objectFit: 'cover' }}
              />
          </div>
        </div>
      </FadeIn>
    </TwoColumns>
  )
}
