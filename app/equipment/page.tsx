import Link from 'next/link'

const Equipment = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/bg-home.png')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-white text-center">Equipamentos</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-auto gap-4 py-14">
          <h1 className="text-2xl text-[#1e2d3b] font-semibold">Nossos Equipamentos</h1>
          <span className="text-justify md:text-center text-lg w-[80%] md:w-[50%]">
            A EBR é fundamentada na vasta experiência de sua diretoria e equipe técnica, atuando nas
            áreas de montagem industrial, caldeiraria, usinagem, manutenção geral e fabricação de
            equipamentos ecológicos, atendendo tanto a projetos próprios quanto a projetos
            personalizados.
          </span>
        </div>

        <div className="flex items-center justify-center w-full h-auto mb-14">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto h-auto gap-4">
            <Link href="/" target="_blank" className="w-[320px]">
              <div className="bg-blue-500 text-white rounded-lg shadow w-full h-[180px]">
                <h3 className="text-xl font-bold">Foto</h3>
              </div>
            </Link>

            <Link href="/" target="_blank" className="w-[320px]">
              <div className="bg-blue-500 text-white rounded-lg shadow w-full h-[180px]">
                <h3 className="text-xl font-bold">Foto</h3>
              </div>
            </Link>

            <Link href="/" target="_blank" className="w-[320px]">
              <div className="bg-blue-500 text-white rounded-lg shadow w-full h-[180px]">
                <h3 className="text-xl font-bold">Foto</h3>
              </div>
            </Link>

            <Link href="/" target="_blank" className="w-[320px]">
              <div className="bg-blue-500 text-white rounded-lg shadow w-full h-[180px]">
                <h3 className="text-xl font-bold">Foto</h3>
              </div>
            </Link>

            <Link href="/" target="_blank" className="sm:col-span-1 md:col-span-2">
              <div className="bg-blue-500 text-white rounded-lg shadow w-full h-[180px]">
                <h3 className="text-xl font-bold">Foto</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Equipment
