import {useContext} from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export default function Searchbar({inputValue,setInputValue}){
  const {dark}=useContext(ThemeContext)
  
  
  return (
    <div className="flex flex-row justify-start items-center h-12 w-full sm:max-w-xs  rounded overflow-hidden bg-gray-50 dark:bg-gray-700 shadow-md">
      <svg className="inline-block w-6 h-6 text-transparent fill-current mx-2 my-auto stroke-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke={dark?'#eee':'#4A5568'}></path>
      </svg>
      <input type="text"  value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="w-full h-full px-2 focus:outline-none bg-gray-300 dark:bg-gray-900 placeholder-gray-700 dark:placeholder-gray-100  tracking-wide " aria-label="Search for a country..." placeholder="Search for a country..."/>
    </div>
  )
}