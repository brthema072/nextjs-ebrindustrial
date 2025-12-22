const WhatOurCustomersSay = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white pt-16">
        <h1 className="text-lg md:text-4xl text-[#757575] font-semibold">
          O QUE DIZEM NOSSOS CLIENTES
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-20">
          <div className="flex flex-col items-center justify-center w-3xs">
            <span className="text-sm text-justify break-normal hyphens-auto">
              Trabalhar com a EBR Industrial foi uma excelente experiência. Precisávamos de uma
              solução eficiente para a lavagem das rodas dos nossos caminhões e o Lava Rodas ERB1296
              superou nossas expectativas, economizando 95% da água utilizada. A equipe foi
              profissional e o suporte técnico foi impecável. Recomendo fortemente.
            </span>

            <span className="text-lg text-[#FF6161] font-bold mt-4">FLAVIO ROCHA</span>
            <span className="text-sm">TRANSLOG</span>
          </div>

          <div className="flex flex-col items-center justify-center  w-3xs">
            <span className="text-sm text-justify break-normal hyphens-auto">
              A expertise da EBR Industrial em montagens industriais é inigualável. Eles não apenas
              cuidaram das estruturas, mas também implementaram sistemas complexos que aumentaram
              significativamente nossa produtividade. A atenção aos detalhes e o compromisso com a
              qualidade são evidentes em cada etapa do processo.
            </span>

            <span className="text-lg text-[#FF6161] font-bold mt-4">ANA PEREIRA</span>
            <span className="text-sm">CONSTRUMAX</span>
          </div>

          <div className="flex flex-col items-center justify-center  w-3xs">
            <span className="text-sm text-justify break-normal hyphens-auto">
              A expertise da EBR Industrial em montagens industriais é inigualável. Eles não apenas
              cuidaram das estruturas, mas também implementaram sistemas complexos que aumentaram
              significativamente nossa produtividade. A atenção aos detalhes e o compromisso com a
              qualidade são evidentes em cada etapa do processo.
            </span>

            <span className="text-lg text-[#FF6161] font-bold mt-4">CARLOS MENDES</span>
            <span className="text-sm">RODOUSINAGEM</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatOurCustomersSay
