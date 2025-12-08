import HeroSection from './components/HeroSection/HeroSection'
import IndustrialAssemblies from './components/Services/IndustrialAssemblies/IndustrialAssemblies'
import OurClients from './components/OurClinets/OurClients'
import WheelWash from './components/Services/WheelWash/WheelWash'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import WhatOurCustomersSay from './components/WhatYourCustomersSay/WhatOurCustimersSay'
import Quote from './components/Quote/Quote'

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

        <WhatOurCustomersSay />
        <div className="h-24 bg-white" />
        <Quote />
      </div>
    </>
  )
}

export default Home
