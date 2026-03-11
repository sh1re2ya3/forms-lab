function PersonalitySection({ values, errors, handleChange }) {
  return (
    <div>

      <div className="form-field">
        <label>
          <input
            type="radio"
            name="earlyBirdOrNightOwl"
            value="earlyBird"
            checked={values.earlyBirdOrNightOwl === "earlyBird"}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          Early Bird
        </label>

        <label>
          <input
            type="radio"
            name="earlyBirdOrNightOwl"
            value="nightOwl"
            checked={values.earlyBirdOrNightOwl === "nightOwl"}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          Night Owl
        </label>

        {errors.earlyBirdOrNightOwl && (
          <p className="error-text">{errors.earlyBirdOrNightOwl}</p>
        )}
      </div>

      <div className="form-field">
        <label>
          <input
            type="radio"
            name="petPreference"
            value="dog"
            checked={values.petPreference === "dog"}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          Dog Person 🐶
        </label>

        <label>
          <input
            type="radio"
            name="petPreference"
            value="cat"
            checked={values.petPreference === "cat"}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          Cat Person 🐱
        </label>

        {errors.petPreference && (
          <p className="error-text">{errors.petPreference}</p>
        )}
      </div>
    </div>
  );
}

export default PersonalitySection;
