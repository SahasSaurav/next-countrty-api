import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "react-query";

import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";
import DeatailCountryContent from "../../components/DetailsCountryContent";

import borderData from "../../borders.json";
import { getCountries, specificCountry } from "../../utils/fetch";

const DeatailCountry=({ country })=> {
  const { data, isLoading, isError } = useQuery("country", specificCountry, {
    initialData: country,
  });
  const router = useRouter();
  const { alphaCode } = router.query;
  const { borders } = country;

  return (
    <>
      <Head>
        <title>Country-{alphaCode}</title>
      </Head>
      <Navbar />
      <div className="container flex-col">
        <Link href="/">
          <a>
            <BackButton name="Back" />
          </a>
        </Link>
        <DeatailCountryContent countryDetail={data} borders={borders} />
      </div>
    </>
  );
}

export default DeatailCountry;

export async function getStaticProps(context) {
  const { alphaCode } = context.params;
  const data = await specificCountry(alphaCode);
  return {
    props: {
      country: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await getCountries();
  const paths = data.map((country) => ({
    params: { alphaCode: country.alpha3Code.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
