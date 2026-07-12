const MetalStructure = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/industrial-safety-guarding-banner.jpeg')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-shadow-lg/30 text-white text-center">
            Belgo Protec laterais de Transportadoras de Correia
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 py-10 gap-8 md:gap-0">
          <div className="flex flex-row items-center justify-center w-full">
            <img
              src="/images/industrial-assemblies.jpeg"
              className="bg-cover rounded-sm shadow-md shadow-gray-400"
              width={528}
              height={396}
            />
          </div>

          <div className="flex flex-col items-center justify-center h-auto gap-4 px-4">
            <span className="text-justify break-normal hyphens-auto">
              As{' '}
              <span className="font-bold">
                Grades Metálicas de Segurança Lateral (Sistema Belgo Protec)
              </span>
              são barreiras de proteção perimetral de alto desempenho, projetadas para o
              enclausuramento de áreas de risco e isolamento de partes móveis em equipamentos
              industriais. Desenvolvido para atender rigorosamente às exigências normativas da
              NR-12, o sistema garante a integridade física dos operadores contra pontos de
              esmagamento, aprisionamento e contato mecânico acidental, promovendo um ambiente de
              trabalho seguro e em conformidade com a legislação vigente.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Fabricadas com estrutura em painéis aramados modulares de alta resistência e postes de
              fixação robustos, as grades oferecem máxima durabilidade e estabilidade estrutural sob
              condições operacionais severas. O acabamento em aço galvanizado e revestimento em
              pintura eletrostática confere elevada proteção contra corrosão e desgaste prematuro. A
              geometria da malha foi perfeitamente dimensionada para impedir o acesso físico às
              zonas de perigo, assegurando, simultaneamente, total visibilidade e ventilação para a
              inspeção visual contínua dos componentes sem a necessidade de paradas ou remoção do
              sistema.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Indicadas para a proteção lateral de transportadores de correia, peneiras, britadores
              e demais sistemas de movimentação de carga em indústrias de mineração, siderurgia,
              cimenteiras e portos, as Grades Metálicas de Segurança são uma solução versátil,
              modular e de rápida montagem. Graças ao seu sistema flexível de fixação, permitem
              fácil remoção para intervenções de manutenção corretiva ou preventiva, otimizando os
              tempos de parada e elevando a produtividade com o máximo padrão de segurança
              industrial.
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center h-auto gap-4 pt-8 pb-8">
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-1.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-2.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-3.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-4.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
        </div>

        <div className="flex flex-row items-center justify-center h-auto gap-4 pb-8">
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-5.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-6.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-7.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-8.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
        </div>

        <div className="flex flex-row items-center justify-center h-auto gap-4 pb-8">
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-11.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
          <div className="bg-[url('/images/industrial-safety-guarding/image-card-12.jpg')] bg-cover rounded-lg shadow w-[320px] h-[180px]"></div>
        </div>
      </div>
    </>
  )
}

export default MetalStructure
