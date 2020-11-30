import Link from "next/link";
import Button from "./Button";
import Details from "./Details";
import borderData from "../borders.json";

export default function DeatilsCountryContent({
  countryDetail: {
    flag,
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    nativeName,
  },
  borders,
}) {
  return (
    <section className="grid items-center lg:grid-cols-2 gap-10 lg:mt-16">
      <div className="max-w-full">
        <img
          className="w-full object-contain object-left-top"
          style={{ maxHeight: "350px" }}
          src={flag}
          alt={`${name} flag`}
        />
      </div>
      <div className="max-w-full grid gap-6 sm:grid-cols-2">
        <h2 className="sm:col-span-2 title-font font-semibold text-3xl text-gray-900 transition-colors duration-100 dark:text-gray-50">
          {name}
        </h2>
        <div className="max-w-full">
          <Details title="Native Name" value={nativeName} />
          <Details title="Population" value={population.toLocaleString()} />
          <Details title="Region" value={region} />
          <Details title="Sub Region" value={subregion} />
          <Details title="Capital" value={capital} />
        </div>
        <div className="max-w-full -mt-6 sm:mt-0">
          <Details title="Top Level Domain" value={topLevelDomain} />
          <Details
            title="Currencies"
            value={
              currencies ? currencies.map((currency) => currency.name) : ""
            }
          />
          <Details
            title="Languages"
            value={languages ? languages.map((language) => language.name) : ""}
          />
        </div>
        <h3 className="sm:col-span-2 flex items-baseline text-gray-900 dark:text-gray-100 mb-1">
          <span className=" font-medium text-lg mr-1">Borders:</span>
          <span className="flex flex-wrap">
            {borders.map((border, index) => (
              <Link
                as={`/country/${border}`}
                href={`/country/[alphacode]`}
                key={index}
              >
                <a>
                  <Button label={border} />
                </a>
              </Link>
            ))}
          </span>
        </h3>
      </div>
    </section>
  );
}