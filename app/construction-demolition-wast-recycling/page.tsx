const ConstructionDemolitionWastRecycling = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/bg-home.png')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-white text-center">
            Usina Reciclagem Entulho RCC
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 py-10">
          <div className="flex flex-row items-center justify-center w-full">
            <img
              src="/images/bg-home.png"
              className="bg-cover rounded-sm shadow-md shadow-gray-400"
              width={528}
              height={396}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-[80%] h-auto gap-4">
            <span className="text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>

            <span className="text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConstructionDemolitionWastRecycling
