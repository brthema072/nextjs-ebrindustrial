const Quote = () => {
  return (
    <>
      <div className="pt-[105px] bg-[#F7F7F7]">
        <div className="flex flex-col items-center justify-center w-full h-auto py-10">
          <h1 className="text-5xl text-[#1e2d3b] font-semibold">Solicitar orçamento</h1>

          <div className="flex flex-col items-center justify-ceitems-center w-auto h-auto gap-6 mt-10">
            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Nome:</span>
              <input
                type="text"
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Email:</span>
              <input
                type="email"
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Telefone:</span>
              <input
                type="tel"
                className="border-black border-2 sm:min-w-xs lg:min-w-[200px] min-h-10"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Empresa:</span>
              <input
                type="text"
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <span className="text-lg text-[#3b3a3a] font-bold">Solicitar orçamento de:</span>
              <select
                name="services"
                id="services"
                form="serviceform"
                className="border-black border-2 sm:min-w-xs lg:min-w-[430px] min-h-10"
              >
                <option value="">Escolha uma opção</option>
                <option value="rotarySieve">Peneira Rotativa (TROMMEL)</option>
                <option value="wasteRecyclingPlant">Usina Reciclagem Entulho RCC</option>
                <option value="crushers">Britadores</option>
                <option value="wheelWash">Lava Rodas EBR1296</option>
                <option value="metalStructures">Estruturas Metálicas</option>
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
              ></textarea>
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto">
              <button className="bg-[#2165e9] rounded-xl text-white font-semibold min-w-[150px] min-h-[50px] cursor-pointer">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quote
