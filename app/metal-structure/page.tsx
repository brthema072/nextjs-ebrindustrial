const MetalStructure = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/bg-home.jpeg')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-white text-center">
            Estruturas Metálicas
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 py-10">
          <div className="flex flex-row items-center justify-center w-full">
            <img
              src="/images/bg-home.jpeg"
              className="bg-cover rounded-sm shadow-md shadow-gray-400"
              width={528}
              height={396}
            />
          </div>

          <div className="flex flex-col items-center justify-center h-auto gap-4 px-4">
            <span className="text-justify break-normal hyphens-auto">
              As <span className="font-bold">Estruturas Metálicas</span> são soluções projetadas
              para suportar e integrar equipamentos, sistemas e instalações industriais, oferecendo
              resistência, estabilidade e segurança estrutural. Desenvolvidas para atender
              diferentes aplicações, são utilizadas em plantas industriais, usinas, galpões, bases
              de equipamentos, passarelas e plataformas de acesso.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Fabricadas com aço estrutural de alta qualidade, as estruturas metálicas são
              dimensionadas conforme normas técnicas vigentes, garantindo precisão construtiva,
              durabilidade e confiabilidade. Seu projeto permite montagem modular, facilidade de
              transporte e instalação, além de flexibilidade para adequações conforme o layout e as
              necessidades operacionais de cada cliente. Os processos de fabricação priorizam
              soldagem controlada, acabamento adequado e proteção contra corrosão.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              As Estruturas Metálicas contribuem para a organização, segurança e eficiência das
              operações industriais, possibilitando a integração otimizada dos equipamentos e a
              ampliação de plantas com agilidade. São indicadas para indústrias de mineração,
              cimenteiras, reciclagem e infraestrutura que demandam soluções estruturais robustas,
              funcionais e alinhadas às exigências técnicas e operacionais.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MetalStructure
