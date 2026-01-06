const OurClients = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-auto py-12">
        <h1 className="text-2xl text-[#1e2d3b] font-semibold">NOSSOS CLIENTES</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around mt-24 px-4 gap-4 w-[60%]">
          <div className="w-40 h-[90px] rounded-lg flex items-center justify-center">
            <img src="/images/amyris-logo.png" className="object-contain max-h-full max-w-full" />
          </div>

          <div className="w-40 h-[90px] rounded-lg">
            <img
              src="/images/john-deere-logo.png"
              className="object-contain max-h-full max-w-full"
            />
          </div>

          <div className="w-40 h-[90px] rounded-lg flex items-center justify-center">
            <img src="/images/messer-logo.png" className="object-contain max-h-full max-w-full" />
          </div>

          <div className="w-40 h-[90px] rounded-lg flex items-center justify-center">
            <img
              src="/images/votorantim-cimentos-logo.png"
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurClients
