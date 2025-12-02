const Footer = () => {
  const year = new Date().getUTCFullYear()

  return (
    <>
      <span>© {year} - Todos os direitos reservados</span>
    </>
  )
}

export default Footer
