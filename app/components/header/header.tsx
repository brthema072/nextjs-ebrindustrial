'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openEquipments, setOpenEquipaments] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenEquipaments(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMenuOpen((prev) => !prev)
  }, [pathname, searchParams])

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
            <Link href="/home">Home</Link>
            <Link href="/equipment">Equipamentos</Link>
            <div
              className="relative cursor-pointer select-none"
              ref={ref}
              onClick={() => setOpenEquipaments(!openEquipments)}
            >
              <span>Montagem industriais</span>
              <div
                className={`md:absolute mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 origin-top ${
                  openEquipments
                    ? 'scale-100 opacity-100 block'
                    : 'scale-95 opacity-0 pointer-events-none hidden'
                }`}
              >
                <ul className="py-2">
                  <li>
                    <Link href="/rotary-sieve" className="block px-4 py-2 hover:bg-gray-100">
                      Peneira Rotativa (TROMMEL)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/construction-demolition-wast-recycling"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Usina Reciclagem Entulho RCC
                    </Link>
                  </li>
                  <li>
                    <Link href="/crusher" className="block px-4 py-2 hover:bg-gray-100">
                      Britadores
                    </Link>
                  </li>
                  <li>
                    <a href="/wheel-wash" className="block px-4 py-2 hover:bg-gray-100">
                      Lava Rodas EBR1296
                    </a>
                  </li>
                  <li>
                    <Link href="/metal-structure" className="block px-4 py-2 hover:bg-gray-100">
                      Estruturas Metálicas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/quote">Contato e orçamentos</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
