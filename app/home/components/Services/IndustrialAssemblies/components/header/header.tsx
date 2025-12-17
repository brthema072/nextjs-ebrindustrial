const Header = () => {
  return (
    <>
      <div className="relative h-[420px] md:h-[337px] bg-cover bg-center">
        <div className="absolute inset-0 bg-[url('/images/bg-home.png')] bg-cover bg-center bg-fixed"></div>

        <div className="absolute inset-0 bg-[#3E556F] opacity-80"></div>

        <div className="absolute inset-0 bg-[#F7F7F7] clip-left-bottom"></div>
        <div className="absolute inset-0 bg-[#F7F7F7] clip-right-bottom"></div>

        <div className="relative z-10 w-full mx-auto  h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-7xl font-bold text-yellow-400 text-center">
            Montagens industriais
          </h1>

          <div className="w-full md:w-180">
            <h2 className="text-lg md:text-3xl font-semibold text-white mt-4 leading-normal text-center">
              Estruturas metálicas e reservatórios
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
