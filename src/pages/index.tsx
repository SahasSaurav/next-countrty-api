import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import SelectBox from "../components/Selectbox";
import Countries from "../components/Countries";
import Loader from "../components/Loader";

import { getCountries } from "../utils/fetch";

const Home = ({ allCountries }) => {
  const { data, isLoading, isError } = useQuery("allCountries", getCountries, {
    initialData: allCountries,
  });
  const router = useRouter();
  const [countries, setCountries] = useState([...data]);
  const [noMatch, setNoMatch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelceted] = useState("");

  const searchHandler = (name = "") => {
    let filteredCountries = allCountries.filter((country) =>
      country.name.toLowerCase().includes(name)
    );
    if (name === "") {
      setCountries([...filteredCountries]);
    }
    if (filteredCountries.length) {
      setCountries([...filteredCountries]), setNoMatch(false);
    } else {
      setCountries([]), setNoMatch(true);
    }
  };

  const selectHandler = (value) => {
    if (value === "all") {
      setCountries([...allCountries]);
    } else {
      setCountries(
        allCountries.filter((country) =>
          country.region.toLowerCase().includes(value)
        )
      );
    }
  };

  useEffect(() => {
    searchHandler(inputValue.toLowerCase());
    return () => {
      searchHandler(inputValue.toLowerCase());
    };
  }, [inputValue]);

  useEffect(() => {
    selectHandler(selected.toLowerCase());
    return () => {
      selectHandler(selected.toLowerCase());
    };
  }, [selected]);

  return (
    <>
      <Head>
        <title>Rest API-Countries</title>
      </Head>
      <Navbar />
      <div className="container flex-col sm:flex-row justify-between items-baseline mt-8 mb-4 space-y-5 sm:space-y-0">
        <Searchbar inputValue={inputValue} setInputValue={setInputValue} />
        <SelectBox setSelected={setSelceted} />
      </div>
      {isLoading ? (
        <Loader task="Fetching" />
      ) : (
        <Countries countries={countries} />
      )}
      {noMatch === true && (
        <h2 className="flex justify-center items-center text-3xl text-gray-800 dark:text-white font-medium">
          No matching results were found...
        </h2>
      )}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getCountries();
  return {
    props: {
      allCountries: data,
    },
  };
}
