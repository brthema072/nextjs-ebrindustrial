import Link from 'next/link'

const Quote = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[linear-gradient(100deg,rgba(33,101,233,0.7)_0%,#2165E9_36.8%)] w-full h-auto py-20 gap-16">
        <h1 className="text-5xl text-white font-semibold">SOLICITE AGORA UM ORÇAMENTO</h1>

        <Link href="/quote" target="_blank">
          <button className="flex flex-row items-center justify-center border-8 border-[#bada55] rounded-md text-3xl text-white p-8 font-semibold hover:bg-[#68B04D] transition-colors delay-100 cursor-pointer">
            <span>SOLICITAR ORÇAMENTO</span>
            <svg
              className="w-8 h-w-8 text-white fill-current"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z" />
            </svg>
          </button>
        </Link>
      </div>
    </>
  )
}

export default Quote
