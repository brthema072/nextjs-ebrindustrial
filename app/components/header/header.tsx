const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-around w-full px-12 py-6">
        <img src="/images/logo.png" alt="Logo" width={135} height={57} />

        <div className="flex flex-row items-center gap-6 text-[#2165E9]">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Equipamentos</span>
          <span className="cursor-pointer">Montagem industriais</span>
          <span className="cursor-pointer">Contato e orçamentos</span>
        </div>
      </div>
    </>
  )
}

export default Header
