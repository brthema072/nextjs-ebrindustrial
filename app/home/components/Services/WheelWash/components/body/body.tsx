import Link from 'next/link'

const Body = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-auto inset-0">
        <div className="w-[40%] text-center inset-0 pt-8 pb-4">
          <h1 className="text-xl md:text-[2.5rem] font-bold text-[#232323] md:text-4xl">
            Versátil com o melhor custo-benefício do mercado
          </h1>
        </div>

        <div className="w-[50%] mt-2 border-b border-gray-200"></div>

        <div className="flex flex-col items-stretch justify-center w-[80%] md:w-[50%] gap-4 mt-8">
          <span className="text-left text-lg">
            O <span className="font-bold">Lava Rodas EBR1296</span> tem uma capacidade de segregação
            de resíduos excepcional, garantindo uma limpeza eficiente e sustentável. Com manutenções
            periódicas, o equipamento tem uma vida útil prolongada, proporcionando confiabilidade e
            durabilidade.
          </span>

          <span className="text-left text-lg">
            O equipamento é composto por duas partes: uma estrutura monobloco por onde passam os
            veículos e um tanque de reciclo.
          </span>

          <span className="text-left text-lg">
            Sua mobilidade e montagem podem ser feita sem a necessidade de recursos dispendiosos,
            dispensando totalmente qualquer tipo de obra civil; O equipamento pode ser colocado
            sobre qualquer tipo de solo, sem necessidade de escavações ou tempo adicional para
            preparação.
          </span>

          <Link
            href="/wheel-wash"
            target="_blank"
            className="text-[1.37rem] text-[#0D3AEC] font-bold underline underline-offset-2 cursor-pointer"
          >
            Saiba mais sobre o Lava Rodas EBR1296 {'>'}
          </Link>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <Link href="/wheel-wash" target="_blank">
            <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
              <h3 className="text-xl font-bold">Foto</h3>
            </div>
          </Link>

          <Link href="/wheel-wash" target="_blank">
            <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
              <h3 className="text-xl font-bold">Foto</h3>
            </div>
          </Link>

          <Link href="/wheel-wash" target="_blank">
            <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
              <h3 className="text-xl font-bold">Foto</h3>
            </div>
          </Link>

          <Link href="/wheel-wash" target="_blank">
            <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
              <h3 className="text-xl font-bold">Foto</h3>
            </div>
          </Link>

          <Link href="/wheel-wash" target="_blank">
            <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
              <h3 className="text-xl font-bold">Foto</h3>
            </div>
          </Link>

          <Link href="/wheel-wash" target="_blank">
            <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
              <h3 className="text-xl font-bold">Foto</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Body
