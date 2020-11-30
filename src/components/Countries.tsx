import Link from "next/link";
import CountryCard from './CountryCard';

export default function Countries({countries}) {
  return (
    <section className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8  justify-center sm:justify-between items-center p-4">
      {
        countries.map((country)=>(
          <Link  as={`/country/${country.alpha3Code}`} href={`/country/[alphacode]`}  key={country.alpha3Code}>
            <a>
              <CountryCard country={country} />
           </a>
          </Link>
        ))
      }
    </section>
  )

}
