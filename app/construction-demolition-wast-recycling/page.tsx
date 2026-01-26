const ConstructionDemolitionWastRecycling = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/bg-home.jpeg')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-white text-center">
            Usina Reciclagem Entulho RCC
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
              A <span className="font-bold">Usina de Reciclagem de Entulho RCC</span> é uma solução
              completa para o processamento e reaproveitamento de resíduos da construção civil, como
              concreto, argamassa, cerâmica, tijolos e pavimentos. Desenvolvida para operações
              contínuas, a usina possibilita a transformação dos resíduos em agregados reciclados
              com diferentes faixas granulométricas, promovendo eficiência produtiva e
              sustentabilidade ambiental.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Projetada com estrutura metálica robusta e layout funcional, a usina integra
              equipamentos como alimentadores, britadores, peneiras e sistemas de transporte,
              garantindo elevado desempenho operacional e segurança durante o processo. Sua
              concepção técnica permite fácil manutenção, alta capacidade de processamento e
              flexibilidade de configuração, adaptando-se às necessidades específicas de cada
              operação e ao volume de material a ser processado.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              A Usina de Reciclagem de Entulho RCC contribui diretamente para a redução do descarte
              em aterros, o reaproveitamento de materiais e o atendimento às normas ambientais
              vigentes. É indicada para construtoras, usinas de reciclagem, mineradoras e órgãos
              públicos que buscam otimizar processos, reduzir impactos ambientais e agregar valor
              aos resíduos gerados em suas operações.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConstructionDemolitionWastRecycling
