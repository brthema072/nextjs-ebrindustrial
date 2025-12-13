'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <div className="fixed flex flex-row items-center justify-around w-full px-12 py-6 bg-white z-50">
        <img src="/images/logo.png" alt="Logo" width={135} height={57} />

        <div className="flex flex-row items-center gap-6 text-[#2165E9]">
          <Link href="/home">Home</Link>
          <Link href="/equipment">Equipamentos</Link>
          <div
            className="relative cursor-pointer select-none"
            ref={ref}
            onClick={() => setOpen(!open)}
          >
            <span>Montagem industriais</span>
            <div
              className={`absolute mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 origin-top ${
                open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              }`}
            >
              <ul className="py-2">
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Peneira Rotativa (TROMMEL)
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Usina Reciclagem Entulho RCC
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Britadores
                  </a>
                </li>
                <li>
                  <a href="/wheel-wash" className="block px-4 py-2 hover:bg-gray-100">
                    Lava Rodas EBR1296
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Estruturas Metálicas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/quote">Contato e orçamentos</Link>
        </div>
      </div>
    </>
  )
}

export default Header
