const HeroSection = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/images/bg-home.png')] bg-cover bg-center bg-fixed"></div>

        <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-80"></div>

        <div className="relative w-full h-full flex flex-col items-center justify-start p-10 pt-20">
          <h1 className="text-white text-4xl max-w-4xl text-center font-bold leading-normal">
            Soluções inovadoras para montagens industriais, caldeiraria, usinagem e equipamentos
            ecológicos.
          </h1>

          <h3 className="text-gray-300 text-2xl max-w-3xl text-center mt-20">
            Com mais de uma década de experiência, a
            <span className="font-bold text-white">EBR Industrial</span> fornece serviços de alta
            qualidade para a indústria brasileira
          </h3>
        </div>
      </div>
    </>
  )
}

export default HeroSection
