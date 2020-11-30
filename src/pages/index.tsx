import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ThemeProvider from "../context/ThemeProvider";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import SelectBox from "../components/Selectbox";
import Countries from "../components/Countries";
import Loader from "../components/Loader";

export default function Home({ allCountries, error }) {
  const router = useRouter();
  const [countries, setCountries] = useState([...allCountries]);
  const [loading, setLoading] = useState(false);
  const [noMatch, setNoMatch] = useState(false);
  const [inputValue,setInputValue]=useState('')
  const [selected,setSelceted]=useState('')

  const searchHandler = async (name = "") => {
    if (name === "") return;
    let filteredCountries = allCountries.filter((country) =>
      country.name.toLowerCase().includes(name)
    );  

    if (filteredCountries.length) {
      setCountries([...filteredCountries]), setNoMatch(false);
    } else {
      setCountries([]), setNoMatch(true);
    }
  };

  const selectHandler=(value)=>{
    if(value==='all'){
      setCountries([...allCountries])
    }else{
      setCountries(allCountries.filter(country=>country.region.toLowerCase().includes(value)))
    }
  }

  useEffect(() => {
    searchHandler(inputValue.toLowerCase())
    selectHandler(selected.toLowerCase())
  }, [inputValue,selected])

  

  return (
    <ThemeProvider>
      <Navbar />
      <div className="container flex-col sm:flex-row justify-between items-baseline mt-8 mb-4 space-y-5 sm:space-y-0">
        <Searchbar  inputValue={inputValue} setInputValue={setInputValue} />
        <SelectBox setSelected={setSelceted} />
      </div>
      {loading ? (
        <Loader task="Fetching" />
      ) : (
        <Countries countries={countries} />
      )}
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
        allCountries: data,
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
