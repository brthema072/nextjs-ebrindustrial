import Link from 'next/link'

const Body = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-auto inset-0">
        <div className="w-[80%] md:w-[40%] text-center inset-0 pt-8 pb-4">
          <h1 className="text-xl md:text-[2.5rem] font-bold text-[#232323] md:text-4xl">
            Precisão e inovação para elevar sua operação ao próximo nível
          </h1>
        </div>

        <div className="w-[50%] mt-2 border-b border-gray-200"></div>

        <div className="flex flex-col items-stretch justify-center w-[80%] md:w-[50%] gap-4 mt-8">
          <span className="text-justify md:text-left text-lg">
            Na EBR Industrial, oferecemos serviços completos de montagens industriais que vão além
            de estruturas simples. Nossa equipe altamente qualificada e experiente está preparada
            para lidar com projetos complexos e personalizados, sempre visando maximizar a
            eficiência e a produtividade das suas operações.
          </span>

          <div className="flex flex-col items-start justify-center w-full h-auto mt-8 gap-6">
            <span className=" text-[#3d5975] text-xl font-semibold">Nossos diferenciais</span>

            <div className="flex flex-col">
              <span className="text-lg font-bold">Nossos diferenciais</span>
              <span className="text-justify md:text-left text-lg">
                Contamos com profissionais especializados e atualizados com as melhores práticas do
                setor, garantindo a excelência em cada projeto.
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold">Soluções personalizadas</span>
              <span className="text-justify md:text-left text-lg">
                Desenvolvemos soluções sob medida para atender às necessidades específicas de cada
                cliente, independente do grau de complexidade do projeto.
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold">Tecnologia de ponta</span>
              <span className="text-justify md:text-left text-lg">
                Utilizamos tecnologias avançadas e equipamentos modernos para assegurar precisão e
                qualidade em nossas montagens.
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold">Compromisso com a segurança</span>
              <span className="text-justify md:text-left text-lg">
                Seguimos rigorosos padrões de segurança para garantir a integridade de nossos
                colaboradores e a confiabilidade das instalações.
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold">Atendimento completo</span>
              <span className="text-justify md:text-left text-lg">
                Acompanhamos todas as etapas do projeto, desde o planejamento e execução até a
                entrega final, oferecendo suporte técnico contínuo.
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <Link href="/" target="_blank">
            <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
              <h3 className="text-xl font-bold">Foto</h3>
            </div>
          </Link>

          <Link href="/" target="_blank">
            <div className="bg-blue-500 text-white rounded-lg shadow w-[320px] h-[180px]">
              <h3 className="text-xl font-bold">Foto</h3>
            </div>
          </Link>

          <Link href="/" target="_blank">
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
