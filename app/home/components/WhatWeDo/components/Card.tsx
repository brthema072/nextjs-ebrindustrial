const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      <div className="bg-gray-50 shadow-md shadow-gray-400 rounded-md p-6 max-w-sm border border-gray-200 w-[313px] h-[269px]">
        <h3 className="text-lg font-semibold text-[#1f3a60] mb-3">{title}</h3>

        <p className="text-gray-700 font-medium leading-relaxed text-sm">{description}</p>
      </div>
    </>
  )
}

export default Card
