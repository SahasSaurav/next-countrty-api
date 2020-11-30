import { useState,useEffect } from "react";
import {useRouter} from 'next/router';
import axios from "axios";
import ThemeProvider from "../context/ThemeProvider";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import SelectBox from "../components/Selectbox";
import Countries from "../components/Countries";
import Loader from "../components/Loader";

export function borderJson({ countries }) {
  console.log(countries);
}

export default function Home({ countries, error }) {
  const router=useRouter();
  const [loading, setLoading] = useState(false);
  
  // useEffect(() => {
  //   const handleStart=(url)=>(url!==router.asPath)&&setLoading(true)
  //   const handleComplete=(url)=>(url!==router.asPath)&&setLoading(false)

  //   router.events.on('routeChangeStart',handleStart)
  //   router.events.on('routeChangeComplete',handleComplete)
  //   router.events.on('routeChangeError',handleComplete)


  //   return () => {
  //     router.events.off('routeChangeStart',handleStart)
  //     router.events.off('routeChangeComplete',handleComplete)
  //     router.events.off('routeChangeError',handleComplete)
  //   }
  // },[router] )

  return (
    <ThemeProvider>
      <Navbar />
      <div className="container flex-col sm:flex-row justify-between items-baseline mt-8 mb-4 space-y-5 sm:space-y-0">
        <Searchbar />
        <SelectBox />
      </div>
      {loading?(<Loader task="Fetching" />):(<Countries countries={countries} />)}
      
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  try {
    const endpoint = `https://restcountries.eu/rest/v2/all`;
    const { data } = await axios({
      method: "get",
      url: endpoint,
    });
    return {
      props: {
        countries: data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: true,
      },
    };
  }
}
