const getCountries = async () => {
  const endpoint = `https://restcountries.eu/rest/v2/all`;
  const res = await fetch(endpoint);
  return res.json();
};

const specificCountry = async (alphaCode) => {
  const endpoint = `https://restcountries.eu/rest/v2/alpha/${alphaCode}`;
  const res = await fetch(endpoint);
  return res.json();
}

const borderDetails = async () => {
  const endpoint = `https://restcountries.eu/rest/v2/all`;
  const res = await fetch(endpoint);
  const data = await res.json()
  return data.map((country) => {
    let obj = {};
    obj[country.alpha3Code] = country.name;
    return obj;
  });
}

export {
  getCountries,
  specificCountry,
  borderDetails
}