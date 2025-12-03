const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      <div className="bg-gray-50 shadow-md rounded-md p-6 max-w-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-[#1f3a60] mb-3">{title}</h3>

        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </>
  )
}

export default Card
