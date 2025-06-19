import ClientsReviews from '@/components/home/module/ui/ClientsReviews'
import FeaturesSection from '@/components/home/module/ui/Featured'
import ForYouSection from '@/components/home/module/ui/ForyouSection'
import HeroSection from '@/components/home/module/ui/Hero'
import Newsletter from '@/components/home/module/ui/NewsLetter'
import Pricing from '@/components/home/module/ui/Pricing'
import StartTrial from '@/components/home/module/ui/StartTrial'
import React from 'react'

const Home = () => {
  return (
    <>
  <HeroSection/>
  <FeaturesSection/>
  <ForYouSection/>
  <Pricing/>
  <Newsletter/>
  <ClientsReviews/>
  <StartTrial/>
    </>
  )
}

export default Home