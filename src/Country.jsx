export const Country = ({ country }) => {
  const lng = country.languages ? Object.values(country.languages) : [];
  const curr = country.currencies;
  const currKeys = Object.keys(curr ?? {});
  const currStringArr = currKeys.reduce((acc, key) => {
    acc.push(`${curr[key].name}(${curr[key].symbol})`);
    return acc;
  }, []);

  return (
    <div className="country">
      <div className="title">
        <img
          className="flag"
          src={country.flags.svg}
          alt={country.name.official}
        />
        <h2 className="name">{country.name.common}</h2>
      </div>
      <div className="fields">
        <p className="field">
          <h3>Official name:</h3>
          <span>{country.name.official}</span>
        </p>

        <p className="field">
          <h3>Capital:</h3>
          <span>{country.capital}</span>
        </p>

        <p className="field">
          <h3>Located in:</h3>
          <span>{country.subregion}</span>
        </p>

      </div>
    </div>
  );
};
