export default function SelectBox({setSelected}){
  let optionValues=["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]
  return (
   <div className="flex flex-row justify-start items-center h-12 w-full sm:max-w-xs  rounded  overflow-hidden shadow-md relative ">
     <select aria-label="Filter by the country" onChange={(e)=>setSelected(e.target.value)} className="h-full w-full px-2 bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-100  tracking-wide" style={{
       WebkitAppearance:'none'
     }}>
       <option value="" className="hidden ">Filter by the country</option>
        {
          optionValues.map((optionValue,index)=>{
            return (
              <option key={index} value={optionValue.toLowerCase()}>
                {optionValue==='Americas'?optionValue='America':optionValue}
              </option>
            )
          })
        }
      </select>     
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" >
      <svg
          className="h-5 w-5 text-gray-700 dark:text-gray-100 stroke-2"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
        </svg>
      </span>
   </div>
  )
}