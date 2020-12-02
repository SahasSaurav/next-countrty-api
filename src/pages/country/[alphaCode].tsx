import Head from "next/head";
import { useRouter } from "next/router";
import {useState} from 'react';
import Link from "next/link";
import axios from "axios";
import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";
import DeatailCountryContent from "../../components/DetailsCountryContent"; 
import borderData from '../../borders.json';

export default function DeatailCountry({ country, error, errorMessage }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { alphaCode } = router.query;
  const { borders } = country;

  return (
    <>
      <Head>
        <title>Country-{alphaCode}</title>
      </Head>
      <Navbar />
      <div  className="container flex-col">
        <Link href="/">
          <a>
            <BackButton name="Back" />
          </a>
        </Link>
        <DeatailCountryContent countryDetail={country} borders={borders} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const { alphaCode } = context.params;
    const endpoint = `https://restcountries.eu/rest/v2/alpha/${alphaCode}`;
    const { data } = await axios.get(endpoint);
    return {
      props: {
        country: data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: true,
        errorMessage: err.message,
      },
    };
  }
}

export async function getStaticPaths(){
  const {data}=await axios.get('https://restcountries.eu/rest/v2/all')
  
  const paths=data.map(country=>({
    params:{alphaCode:country.alpha3Code.toString()}
  }))
  return {
    paths, fallback:false
  }
}
