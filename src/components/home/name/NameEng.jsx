const NameEng = () => {
  return (
    <div className="relative group inline-block">
        <h1 className="mt-4 relative z-10 text-4xl font-bold">
        Rattaphon Siriphan
        </h1>
        <h1
        className="mt-4
        absolute inset-0 text-4xl font-bold text-blue-500 
        blur-sm opacity-0 group-hover:opacity-100 
        transition-opacity duration-500
        pointer-events-none
        "
        aria-hidden="true"
        >
        Rattaphon Siriphan
        </h1>
    </div>
  )
}
export default NameEng