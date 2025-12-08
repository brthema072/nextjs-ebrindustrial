const OurClients = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-auto py-12">
        <h1 className="text-2xl text-[#1e2d3b] font-semibold">NOSSOS CLIENTES</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-24 gap-10">
          <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
            <h3 className="text-xl font-bold">Logo</h3>
          </div>

          <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
            <h3 className="text-xl font-bold">Logo</h3>
          </div>

          <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
            <h3 className="text-xl font-bold">Logo</h3>
          </div>

          <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
            <h3 className="text-xl font-bold">Logo</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurClients
