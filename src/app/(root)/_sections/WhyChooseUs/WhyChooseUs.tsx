import React from 'react';
import TwoColumns from '@/ui/TwoColumns/TwoColumns';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import './WhyChooseUs.scss';

export default function WhyChooseUs() {
  return (
    <TwoColumns directionReverse>
      <div className="text-content">
        <h2>Perché scegliere noi</h2>
        <p className='my-regular'>Saremo tuoi partner: ti accompagneremo nei momenti di successo e ci risolleveremo nei momenti di crescita. Il nostro obiettivo è costruire insieme risultati duraturi, non semplici progetti a breve termine</p>
        <ul className='my-l check-list'>
          <li>
            <FaCheckCircle className='icon' />
            <span className="text">Non ci limitiamo a offrire servizi in cambio di un compenso</span>
          </li>
          <li>
            <FaCheckCircle className='icon' />
            <span className="text">Il nostro successo inizia dal tuo</span>
          </li>
          <li>
            <FaCheckCircle className='icon' />
            <span className="text">Operativi 7 giorni su 7</span>
          </li>
        </ul>
      </div>
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
    </TwoColumns>
  )
}
