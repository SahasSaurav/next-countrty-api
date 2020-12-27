const getCountries = async () => {
  const endpoint = `https://restcountries.eu/rest/v2/all`;
  const res = await fetch(endpoint);
  return res.json();
};

const specificCountry=async(alphaCode)=>{
  const endpoint = `https://restcountries.eu/rest/v2/alpha/${alphaCode}`;
  const res = await fetch(endpoint);
  return res.json();
}

export {
  getCountries,
  specificCountry
}