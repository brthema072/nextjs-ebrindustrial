import Link from 'next/link'

const Footer = () => {
  const year = new Date().getUTCFullYear()

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#1e2d3b] w-full min-h-64 max-h-auto text-white">
        <div className="flex flex-col items-start justify-start w-auto h-auto py-[15%] px-[25%] gap-4">
          <span className="font-semibold">CONTATO</span>
          <Link
            href="/quote"
            target="_blank"
            className="text-[#008AFC] underline underline-offset-1"
          >
            Contato e Orçamento
          </Link>
          <span className="text-[#A0A09F]">(15) 99173-3940</span>
        </div>
        <div className="flex flex-col sm:items-center lg:items-center justify-center w-auto h-auto px-[25%] ">
          <img src="/images/logo.png" alt="Logo" width={135} height={57} />
        </div>
        <div className="grid place-items-start content-center min-h-64 px-[25%] gap-4">
          <span className="font-semibold">ENDEREÇO</span>
          <span className="text-[#A0A09F]">
            Estr. Oswaldo Pires de Camargo, 115 Votorantim - SP 18117-803
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer
