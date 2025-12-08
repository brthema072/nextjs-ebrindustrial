const Header = () => {
  return (
    <>
      <div className="relative h-[420px] md:h-[337px] bg-cover bg-center">
        <div className="absolute inset-0 bg-[url('/images/bg-home.png')] bg-cover bg-center bg-fixed"></div>

        <div className="absolute inset-0 bg-[#3E556F] opacity-80"></div>

        <div className="absolute inset-0 bg-[#F7F7F7] clip-left-bottom"></div>
        <div className="absolute inset-0 bg-[#F7F7F7] clip-right-bottom"></div>

        <div className="relative z-10 w-full mx-auto  h-full flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold text-yellow-400">Lava Rodas EBR1296</h1>

          <div className="w-180">
            <h2 className="text-xl md:text-3xl font-semibold text-white mt-4 leading-normal text-center">
              Lavagem e segregação de resíduos com{' '}
              <span className="bg-[#008AFC] text-white px-2 py-1 rounded">economia de 90%</span>
              de água utilizada
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
