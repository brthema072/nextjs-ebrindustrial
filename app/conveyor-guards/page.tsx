const ConveyorGuards = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/conveyor-guards/image-card-2.jpg')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-shadow-lg/30 text-white text-center">
            Proteções de cabeceira e retornos de Correias
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 py-10 gap-8 md:gap-0">
          <div className="flex flex-col items-center justify-center w-full ">
            <img
              src="/images/conveyor-guards/image-card-4.jpg"
              className="bg-cover rounded-sm shadow-md shadow-gray-400"
              width={528}
              height={396}
            />

            <div className="flex flex-row items-center justify-center h-auto gap-4 pt-8 pb-8">
              <div className="bg-[url('/images/conveyor-guards/image-card-1.jpg')] bg-cover rounded-lg shadow w-[260px] h-[180px]"></div>
              <div className="bg-[url('/images/conveyor-guards/image-card-2.jpg')] bg-cover rounded-lg shadow w-[260px] h-[180px]"></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-auto gap-4 px-4">
            <span className="text-justify break-normal hyphens-auto">
              As <span className="font-bold">Proteções para Transportadores (Conveyor Guards)</span>
              são barreiras perimetrais de alto desempenho, em conformidade com a norma NR-12,
              projetadas para o enclausuramento de áreas de risco e isolamento de partes móveis.
              Fabricadas com painéis aramados modulares e estrutura robusta, garantem durabilidade,
              visibilidade para inspeção e proteção eficaz contra esmagamento e contato mecânico.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Fabricadas com estrutura em painéis aramados modulares de alta resistência e sistemas
              de fixação robustos que exigem ferramentas para abertura, as proteções oferecem máxima
              durabilidade e estabilidade estrutural sob condições operacionais severas. O
              acabamento em aço galvanizado e revestimento em pintura eletrostática confere elevada
              proteção contra corrosão e desgaste prematuro causados por intempéries e poeira
              industrial. A geometria da malha foi perfeitamente dimensionada conforme a ISO 13857
              para impedir o acesso físico às zonas de perigo, assegurando, simultaneamente, total
              visibilidade e ventilação para a inspeção visual contínua de alinhamento da correia e
              rolamentos, sem a necessidade de paradas ou remoção do sistema.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Indicadas para o enclausuramento seguro de pontos de carga, descarga e retorno de
              transportadores de correia em indústrias de mineração, siderurgia, cimenteiras e
              portos, as Proteções de Cabeceira e Retorno são uma solução altamente versátil,
              modular e de rápida montagem. Graças ao seu sistema flexível e ergonômico de fixação,
              permitem fácil remoção por equipes autorizadas para intervenções de manutenção
              corretiva ou preventiva, otimizando os tempos de parada e elevando a produtividade com
              o máximo padrão de segurança industrial.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConveyorGuards
