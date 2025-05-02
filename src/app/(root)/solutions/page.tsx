import React from 'react'
import HeroSection from './_sections/HeroSection/HeroSection'
import WebappSection from './_sections/WebappSection/WebappSection'
import PortfolioSection from './_sections/PortfolioSection/PortfolioSection'
import GestionaleSection from './_sections/GestionaleSection/GestionaleSection'
import SMMSection from './_sections/SMMSection/SMMSection'
import Closure from '@/ui/Closure/Closure'

export default function page() {
  return (
    <>
      <HeroSection />
      <WebappSection />
      <PortfolioSection />
      <GestionaleSection />
      <SMMSection />
      <Closure>
        <h1>Sei pronto a <span className="gradient-text">salire di livello</span>?</h1>
        <p className='my-m'>Inizia ora a far crescere il tuo business con noi</p>
      </Closure>
    </>
  )
}
