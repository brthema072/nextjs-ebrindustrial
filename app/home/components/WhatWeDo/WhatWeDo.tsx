import Card from './components/Card'

const WhatWeDo = () => {
  const cards = [
    {
      title: 'EQUIPAMENTOS',
      description:
        'Fabricamos equipamentos inovadores e trabalhamos sob projeto,oferecendo soluções personalizadas para atender às necessidades específicas do seu negócio. Nossa expertise garante eficiência e sustentabilidade em cada produto.',
    },
    {
      title: 'MONTAGENS INDUSTRIAIS',
      description:
        'Oferecemos serviços completos de montagens industriais que vão além de estruturas, abrangendo sistemas complexos e soluções personalizadas para maximizar a eficiência e a produtividade das suas operações.',
    },
    {
      title: 'CALDEIRARIA INDUSTRIAL',
      description:
        'Fabricação e manutenção de equipamentos de alta qualidade. Com tecnologia avançada e uma equipe qualificada, garantimos soluções robustas e eficientes para atender às demandas específicas de cada projeto.',
    },
  ]

  return (
    <>
      <section className="relative w-full overflow-hidden py-24">
        <div className="absolute inset-0 bg-white"></div>

        <div className="absolute inset-0 bg-[#3E556F] clip-diagonal"></div>

        <div className="relative flex flex-col items-center justify-center w-full h-auto mt-[50px] gap-[50px] z-10">
          <h1 className="text-[#757575] text-4xl max-w-4xl text-center font-bold leading-normal">
            O QUE FAZEMOS?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatWeDo
