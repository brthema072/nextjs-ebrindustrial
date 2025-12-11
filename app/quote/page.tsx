'use client'

import { useState } from 'react'

const Quote = () => {
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)

    await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        name: form.get('name'),
        email: form.get('email'),
        phone: form.get('phone'),
        company: form.get('company'),
        service: form.get('services'),
        additionalInformations: form.get('additionalInformations'),
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    setLoading(false)
  }

  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-col items-center justify-center w-full h-auto py-10">
          <h1 className="text-5xl text-[#1e2d3b] font-semibold">Solicitar orçamento</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-ceitems-center w-auto h-auto gap-6 mt-10"
          >
            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Nome:</span>
              <input
                type="text"
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
                name="name"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Email:</span>
              <input
                type="email"
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
                name="email"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Telefone:</span>
              <input
                type="tel"
                className="border-black border-2 sm:min-w-xs lg:min-w-[200px] min-h-10"
                name="phone"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Empresa:</span>
              <input
                type="text"
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
                name="company"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Solicitar orçamento de:</span>
              <select
                name="services"
                id="services"
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
              >
                <option value="">Escolha uma opção</option>
                <option value="Peneira Rotativa (TROMMEL)">Peneira Rotativa (TROMMEL)</option>
                <option value="Usina Reciclagem Entulho RCC">Usina Reciclagem Entulho RCC</option>
                <option value="Britadores">Britadores</option>
                <option value="Lava Rodas EBR1296">Lava Rodas EBR1296</option>
                <option value="Estruturas Metálicas">Estruturas Metálicas</option>
              </select>
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">
                Informações adicionais (opcional):
              </span>
              <textarea
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
                rows={5}
                cols={28}
                name="additionalInformations"
              ></textarea>
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              {loading ? (
                <div
                  className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin text-[#2165e9]"
                  aria-hidden="true"
                ></div>
              ) : (
                <button
                  type="submit"
                  className="bg-[#2165e9] rounded-xl text-white font-semibold min-w-[150px] min-h-[50px] cursor-pointer"
                >
                  Enviar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Quote
