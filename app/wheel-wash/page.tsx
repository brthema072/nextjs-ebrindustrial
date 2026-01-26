const WheelWash = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-row items-center justify-center relative w-full h-[400px] bg-[#3d5975]">
          <div className="absolute inset-0 m-auto bg-[url('/images/bg-home.jpeg')] bg-cover bg-center w-[98%] my-4 rounded-sm"></div>
          <div className="absolute inset-0 bg-[rgb(5,27,55)] opacity-20"></div>

          <h1 className="relative text-4xl font-bold text-white text-center">LAVA RODAS EBR1296</h1>
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
              O <span className="font-bold">Lava Rodas EBR1296</span> é um equipamento robusto e
              eficiente, desenvolvido para a lavagem e contenção de resíduos em rodas de caminhões,
              carretas e veículos pesados antes do acesso a áreas controladas. Sua estrutura
              metálica reforçada garante alta durabilidade mesmo em ambientes industriais severos,
              enquanto o sistema de grelhas e rampas facilita a passagem dos veículos com segurança.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Projetado para otimizar o controle ambiental, o Lava Rodas EBR1296 contribui
              diretamente para a redução do carreamento de sujeira, lama e materiais particulados
              para fora do pátio industrial, auxiliando no cumprimento de normas ambientais e na
              preservação das vias internas e externas. O equipamento permite fácil manutenção,
              limpeza e adaptação conforme a necessidade da operação.
            </span>

            <span className="text-justify break-normal hyphens-auto">
              Ideal para indústrias, mineradoras, cimenteiras e obras de grande porte, o Lava Rodas
              EBR1296 alia eficiência operacional, resistência e funcionalidade, tornando-se uma
              solução confiável para o controle de resíduos e melhoria da organização do fluxo
              logístico.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default WheelWash
