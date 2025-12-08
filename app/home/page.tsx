import HeroSection from './components/HeroSection/HeroSection'
import IndustrialAssemblies from './components/Services/IndustrialAssemblies/IndustrialAssemblies'
import WheelWash from './components/Services/WheelWash/WheelWash'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'

const Home = () => {
  return (
    <>
      <div className="pt-[105px]">
        <HeroSection />
        <WhatWeDo />

        <WheelWash />
        <div className="h-28" />
        <IndustrialAssemblies />
      </div>
    </>
  )
}

export default Home
