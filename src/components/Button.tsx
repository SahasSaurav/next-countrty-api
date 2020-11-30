export default function Button({label}){
  return(
    <button className="inline-flex jusitify-center items-center px-4 py-2 m-2  bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white text-sm  sm:text-lg sm:font-medium transition-opacity duration-300 ease-out rounded hover:opacity-75 focus:outline-none shadow-md">
    {label}
  </button>
  )
}