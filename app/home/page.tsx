import HeroSection from './components/HeroSection/HeroSection'
import IndustrialAssemblies from './components/Services/IndustrialAssemblies/IndustrialAssemblies'
import OurClients from './components/Services/OurClinets/OurClients'
import WheelWash from './components/Services/WheelWash/WheelWash'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'

const Home = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <HeroSection />
        <WhatWeDo />

        <WheelWash />
        <div className="h-28" />
        <IndustrialAssemblies />

        <OurClients />
      </div>
    </>
  )
}

export default Home
