const ShaftProtection = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/shaft-protection/image-card-2.jpeg')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-shadow-lg/30 text-white text-center">
            Proteções de Eixos e Partes Móveis de Ventiladores Industriais (Sistema Belgo Protec)
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 py-10 gap-8 md:gap-0">
          <div className="flex flex-row items-center justify-center w-full">
            <img
              src="/images/shaft-protection/image-card-1.jpeg"
              className="bg-cover rounded-sm shadow-md shadow-gray-400"
              width={528}
              height={396}
            />
          </div>

          <div className="flex flex-col items-center justify-center h-auto gap-4 px-4">
            <span className="text-justify break-normal hyphens-auto">
              As{' '}
              <span className="font-bold">
                Proteções de Eixos e Partes Móveis de Ventiladores Industriais (Sistema Belgo
                Protec)
              </span>{' '}
              são barreiras de segurança física de alto desempenho, projetadas especificamente para
              o enclausuramento de zonas de rotação e isolamento de componentes dinâmicos em
              sistemas de exaustão e ventilação. Desenvolvido para atender rigorosamente às
              exigências normativas da NR-12, o sistema garante a integridade física dos operadores
              contra pontos de decepamento, aprisionamento por acoplamentos e contato mecânico
              acidental em componentes de alta velocidade, promovendo um ambiente de trabalho seguro
              e em conformidade com a legislação vigente.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Fabricadas com estrutura em painéis aramados modulares de alta resistência e sistemas
              de fixação robustos que exigem ferramentas para abertura, as proteções oferecem máxima
              durabilidade e estabilidade estrutural sob condições de alta vibração e fluxo de ar
              contínuo. O acabamento em aço galvanizado e revestimento em pintura eletrostática
              confere elevada proteção contra corrosão e desgaste prematuro causados por agentes
              químicos, umidade ou calor industrial. A geometria da malha foi perfeitamente
              dimensionada conforme a ISO 13857 para impedir o acesso físico às zonas de perigo,
              assegurando, simultaneamente, total visibilidade e fluxo de ventilação necessário para
              a inspeção visual contínua de rolamentos, eixos e correias de transmissão, sem a
              necessidade de paradas ou remoção do sistema.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Indicadas para a proteção de ventiladores centrífugos, axiais, exaustores e sistemas
              de transmissão por polia/correia em indústrias químicas, petroquímicas, siderúrgicas e
              de mineração, as Proteções de Eixos e Partes Móveis são uma solução altamente
              versátil, modular e de rápida montagem. Graças ao seu sistema flexível de fixação,
              permitem fácil remoção por equipes autorizadas para intervenções de manutenção
              corretiva ou preventiva (como lubrificação e tensionamento de correias), otimizando os
              tempos de parada e elevando a produtividade com o máximo padrão de segurança
              industrial.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center h-auto gap-4 pt-8 pb-8 px-4">
          <div className="bg-[url('/images/shaft-protection/image-card-3.jpeg')] bg-cover rounded-lg shadow w-full max-w-[200px] h-[220px] sm:h-[280px]"></div>
          <div className="bg-[url('/images/shaft-protection/image-card-4.jpeg')] bg-cover rounded-lg shadow w-full max-w-[200px] h-[220px] sm:h-[280px]"></div>
          <div className="bg-[url('/images/shaft-protection/image-card-5.jpeg')] bg-cover rounded-lg shadow w-full max-w-[200px] h-[220px] sm:h-[280px]"></div>
          <div className="bg-[url('/images/shaft-protection/image-card-6.jpeg')] bg-cover rounded-lg shadow w-full max-w-[200px] h-[220px] sm:h-[280px]"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center h-auto gap-4 pb-8 px-4">
          <div className="bg-[url('/images/shaft-protection/image-card-7.jpeg')] bg-cover rounded-lg shadow w-full max-w-[200px] h-[220px] sm:h-[280px]"></div>
          <div className="bg-[url('/images/shaft-protection/image-card-9.jpeg')] bg-cover rounded-lg shadow w-full max-w-[320px] h-[180px] sm:h-[220px] md:h-[180px]"></div>
          <div className="bg-[url('/images/shaft-protection/image-card-8.jpeg')] bg-cover rounded-lg shadow w-full max-w-[320px] h-[180px] sm:h-[220px] md:h-[180px]"></div>
        </div>
      </div>
    </>
  )
}

export default ShaftProtection
