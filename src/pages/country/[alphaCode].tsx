
import Head from "next/head";

import { useRouter } from "next/router";
import {useState} from 'react'
import Link from 'next/link';
import axios from "axios";
import ThemeProvider from "../../context/ThemeProvider";
import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";
import DeatailCountryContent from '../../components/DetailsCountryContent'

export default function DeatailCountry({ country,error,errorMessage }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { alphaCode } = router.query;
  const {borders}=country
  // console.log(country.borders)
  return (
    <ThemeProvider>
      <Head>
        <title>Country-{alphaCode}</title>
      </Head>
      <Navbar />
      <div className="container flex-col">
        <Link href="/">
          <a>
            <BackButton name='Back' />
          </a>
        </Link>
        <DeatailCountryContent countryDetail={country} borders={borders} />
      </div>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  try{
    const {alphaCode}=context.query;
    const endpoint = `https://restcountries.eu/rest/v2/alpha/${alphaCode}`;
    const { data } = await axios.get(endpoint);
    return {
      props: {
        country: data,
      }
    }
  }catch(err){
    return{
      props:{
        error:true,
        errorMessage:err.message,
      }
    }
  }
 
}
