const RotarySieve = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/bg-home.jpeg')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-white text-center">
            Peneira Rotativa (TROMMEL)
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
              A <span className="font-bold">Peneira Rotativa (Trommel)</span> é um equipamento de
              alto desempenho projetado para a separação e classificação de materiais sólidos por
              granulometria, atendendo com eficiência às demandas de processos industriais
              contínuos. Seu sistema de peneiramento é composto por um tambor cilíndrico rotativo
              perfurado, que promove a separação precisa dos materiais conforme o tamanho das
              partículas, garantindo maior controle e uniformidade no processo.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Fabricada com estrutura metálica robusta e componentes dimensionados para operação
              severa, a Peneira Rotativa oferece elevada resistência mecânica, longa vida útil e
              excelente estabilidade operacional. O acionamento rotativo contínuo reduz riscos de
              entupimento, melhora o aproveitamento do material processado e contribui para uma
              operação mais fluida e produtiva. O equipamento pode ser customizado com diferentes
              diâmetros, comprimentos, tipos de chapas perfuradas e sistemas de acionamento,
              adaptando-se às necessidades específicas de cada aplicação.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Indicada para indústrias de mineração, cimenteiras, usinas de reciclagem e aplicações
              ambientais, a Peneira Rotativa (Trommel) é uma solução versátil, durável e de fácil
              manutenção, contribuindo para a otimização dos processos, redução de perdas e aumento
              da produtividade operacional.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default RotarySieve
