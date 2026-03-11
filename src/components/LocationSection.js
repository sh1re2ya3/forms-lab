import { COUNTRIES, CITIES_BY_COUNTRY } from "../constants/formOptions";

function LocationSection({ values, errors, handleChange }) {

  const cities = CITIES_BY_COUNTRY[values.country] || [];

  return (
    <div>

      <div className="form-field">
        <label>Country</label>
        <select
          name="country"
          value={values.country}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        >
          <option value="">Select country</option>

          {COUNTRIES.map(country => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}

        </select>

        {errors.country && <p>{errors.country}</p>}
      </div>

      <div className="form-field">
        <label>City</label>

        <select
          name="city"
          value={values.city}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        >

          <option value="">Select city</option>

          {cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}

        </select>

        {errors.city && <p>{errors.city}</p>}
      </div>

    </div>
  );
}

export default LocationSection;