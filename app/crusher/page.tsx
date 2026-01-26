const crusher = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/bg-home.jpeg')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-shadow-lg/30 text-white text-center">
            Britadores
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 py-10 gap-8 md:gap-0">
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
              Os <span className="font-bold">Britadores</span> são equipamentos essenciais nos
              processos de redução de tamanho de materiais sólidos, amplamente utilizados nas
              indústrias de mineração, construção civil, reciclagem e cimento. Projetados para
              fragmentar rochas, concreto, resíduos e outros materiais de alta resistência, garantem
              a produção de agregados com granulometria controlada e qualidade uniforme.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Construídos com estrutura metálica robusta e componentes de alta resistência ao
              desgaste, os britadores oferecem elevado desempenho operacional e longa vida útil
              mesmo em condições severas de trabalho. Seu projeto técnico permite alta capacidade de
              processamento, eficiência na cominuição do material e facilidade de manutenção,
              podendo ser configurados em diferentes modelos e capacidades conforme a aplicação e a
              demanda do processo produtivo.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Os britadores contribuem para a otimização das etapas de britagem, redução de custos
              operacionais e melhor aproveitamento do material processado. São indicados para
              operações que exigem confiabilidade, produtividade e controle granulométrico,
              atendendo às exigências técnicas e ambientais dos mais diversos segmentos industriais.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default crusher
