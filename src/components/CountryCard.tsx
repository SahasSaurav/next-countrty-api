import Image from 'next/image';
import Details from "./Details";

export default function CountryCard({country:{name,flag:flagImg,population,region,capital}}) {

  return (
  
    <div className="flex country w-full max-w-xs  rounded-lg bg-gray-300 text-gray-800 dark:bg-gray-900 dark:text-gray-100 mx-auto sm:mx-0 cursor-pointer shadow-md" style={{ flex:"1 0 250px", maxWidth:'292px', }}
    >
      <div className="h-full w-full flex flex-col items-center  rounded-lg overflow-hidden" >
        <div className="overflow-hidden h-full" style={{
          maxHeight:"226px"
        }}>
          <Image
            src={flagImg}
            alt={`${name} flag`}
            height={'230'}
            width={'292'}  
            className="img-lazy flex-shrink-0  w-full h-56 object-cover object-center transform hover:scale-110 transition-transform duration-100 ease-out "
          />
        </div>
        <div className="w-full h-full bg-gray-50 dark:bg-gray-700 px-4 py-3">
          <h2 className="country__name duration-100 title-font font-semibold text-xl text-gray-900 dark:text-gray-50 mb-2">
            {name}
          </h2>
          <Details title="Population" value={population} />
          <Details title="Region" value={region} />
          <Details title="Capital" value={capital} />
        </div>
      </div>
    </div>
  );
}
