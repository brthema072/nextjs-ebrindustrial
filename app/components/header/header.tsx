'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openEquipments, setOpenEquipaments] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenEquipaments(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleRedirect() {
    setMenuOpen((prev) => !prev)
  }

  return (
    <>
      <div className="fixed flex flex-row items-start md:items-center justify-between md:justify-around w-full px-12 py-6 bg-white z-50">
        <img src="/images/logo.png" alt="Logo" width={135} height={57} />

        <div className="flex flex-col items-end md:items-center">
          <button
            className="md:hidden text-[#2165E9] text-4xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row items-end md:items-center h-screen md:h-auto gap-6 text-[#2165E9] text-end md:text-center`}
          >
            <Link href="/home" onClick={handleRedirect}>
              Home
            </Link>
            <Link href="/equipment" onClick={handleRedirect}>
              Equipamentos
            </Link>
            <div
              className="relative cursor-pointer select-none"
              ref={ref}
              onClick={() => setOpenEquipaments(!openEquipments)}
            >
              <span>Montagem industriais</span>
              <div
                className={`absolute mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 origin-top ${
                  openEquipments
                    ? 'scale-100 opacity-100 block right-1'
                    : 'scale-95 opacity-0 pointer-events-none hidden'
                }`}
              >
                <ul className="py-2">
                  <li>
                    <Link
                      href="/rotary-sieve"
                      onClick={handleRedirect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Peneira Rotativa (TROMMEL)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/construction-demolition-wast-recycling"
                      onClick={handleRedirect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Usina Reciclagem Entulho RCC
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/crusher"
                      onClick={handleRedirect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Britadores
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/wheel-wash"
                      onClick={handleRedirect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Lava Rodas EBR1296
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/metal-structure"
                      onClick={handleRedirect}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Estruturas Metálicas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/quote" onClick={handleRedirect}>
              Contato e orçamentos
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
